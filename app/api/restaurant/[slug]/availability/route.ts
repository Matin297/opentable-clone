import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/utils/prisma";

import { TIME } from "@/app/restaurant/utils/constants";

type Errors = {
  party?: string;
  time?: string;
  date?: string;
};

export async function GET(
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  const party = req.nextUrl.searchParams.get("party");
  const time = req.nextUrl.searchParams.get("time");
  const date = req.nextUrl.searchParams.get("date");

  const errors: Errors = {};

  if (!party) errors.party = "Party size is required!";
  if (!time) errors.time = "Time is required!";
  if (!date) errors.date = "Date is required!";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(errors, { status: 400 });
  }

  const timeIndex = TIME.findIndex(({ time: t }) => time === t);

  if (timeIndex < 0) {
    return NextResponse.json(
      { message: "Provided time is invalid!" },
      { status: 400 }
    );
  }

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      open_time: true,
      close_time: true,
      tables: {
        select: {
          id: true,
          seats: true,
        },
      },
    },
  });

  if (!restaurant) {
    return NextResponse.json(
      { message: "There's no such restaurant!" },
      { status: 400 }
    );
  }

  const openTimeIndex = TIME.findIndex(
    ({ time }) => time === restaurant.open_time
  );
  const closeTimeIndex = TIME.findIndex(
    ({ time }) => time === restaurant.close_time
  );

  let startIndex = timeIndex - 2;
  if (startIndex < 0) startIndex = 0;
  else if (startIndex < openTimeIndex) startIndex = openTimeIndex;

  let endIndex = timeIndex + 2;
  if (endIndex >= TIME.length) endIndex = TIME.length - 1;
  else if (endIndex > closeTimeIndex) endIndex = closeTimeIndex;

  const timeRange = TIME.slice(startIndex, endIndex + 1).map(
    (timeItem) => timeItem.time
  );

  const bookings = await prisma.booking.findMany({
    where: {
      date: {
        gte: new Date(`${date}T${timeRange.at(0)}`),
        lte: new Date(`${date}T${timeRange.at(-1)}`),
      },
    },
    select: {
      id: true,
      date: true,
      tables: {
        select: {
          table_id: true,
        },
      },
    },
  });

  const bookedTables = bookings.reduce((acc, { date, tables }) => {
    acc[date.toISOString().split("T")[1]] = tables.reduce(
      (acc, { table_id }) => {
        acc[table_id] = true;
        return acc;
      },
      {} as Record<string, boolean>
    );
    return acc;
  }, {} as Record<string, Record<string, boolean>>);

  const freeTables = timeRange.map((timeItem) => {
    const booked = bookedTables[timeItem] || {};
    const tables = restaurant.tables.filter(({ id }) => !booked[id]);
    return {
      time: timeItem,
      tables,
    };
  });

  const availability = freeTables.map(({ time, tables }) => {
    const totalSeatsAvailable = tables.reduce((acc, { seats }) => {
      return acc + seats;
    }, 0);

    return {
      time,
      isAvailable: totalSeatsAvailable >= Number(party),
    };
  });

  return NextResponse.json(availability);
}
