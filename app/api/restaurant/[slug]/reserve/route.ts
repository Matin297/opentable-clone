import { NextRequest, NextResponse } from "next/server";
import validator from "validator";

import { prisma } from "@/utils/prisma";
import { findTablesToBook } from "@/utils/booking";

type ReserveError = {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
};

const LENGTH_CONFIG = {
  min: 2,
  max: 15,
};

export async function POST(
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  const party = req.nextUrl.searchParams.get("party");
  const time = req.nextUrl.searchParams.get("time");
  const date = req.nextUrl.searchParams.get("date");

  if (!party) {
    return NextResponse.json(
      { message: "Party size is required!" },
      { status: 400 }
    );
  }

  if (!time) {
    return NextResponse.json({ message: "Time is required!" }, { status: 400 });
  }

  if (!date) {
    return NextResponse.json({ message: "Date is required!" }, { status: 400 });
  }

  const formData = await req.formData();
  const errors: ReserveError = {};

  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const first_name = formData.get("first_name")?.toString() || "";
  const last_name = formData.get("last_name")?.toString() || "";
  const occassion = formData.get("occassion")?.toString() || "";
  const request = formData.get("request")?.toString() || "";

  if (!validator.isEmail(email)) {
    errors.email = "Email is invalid!";
  }

  if (!validator.isMobilePhone(phone)) {
    errors.phone = "Phone number is not valid!";
  }

  if (!validator.isLength(first_name, LENGTH_CONFIG)) {
    errors.first_name = "First name length should be between 2 to 15!";
  }

  if (!validator.isLength(last_name, LENGTH_CONFIG)) {
    errors.last_name = "Last name length should be between 2 to 15!";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(errors, { status: 400 });
  }

  const tables = await prisma.table.findMany({
    where: {
      restaurant: {
        slug,
      },
    },
    select: {
      id: true,
      seats: true,
    },
  });

  if (tables.length === 0) {
    return NextResponse.json(
      { message: "No available tables!" },
      { status: 400 }
    );
  }

  const booking = await prisma.booking.findFirst({
    where: {
      date: new Date(`${date}T${time}`),
    },
    select: {
      id: true,
      tables: {
        select: {
          table_id: true,
        },
      },
    },
  });

  const availableTables = tables.filter(({ id }) => {
    const isTablesBooked = booking?.tables.find(
      ({ table_id }) => table_id === id
    );
    return !isTablesBooked;
  });

  if (availableTables.length === 0) {
    return NextResponse.json(
      { message: "No available tables!" },
      { status: 400 }
    );
  }

  const totalSeatsAvailable = availableTables.reduce(
    (acc, { seats }) => acc + seats,
    0
  );

  if (totalSeatsAvailable < Number(party)) {
    return NextResponse.json(
      { message: "No available tables!" },
      { status: 400 }
    );
  }

  const tablesToBook = findTablesToBook(Number(party), availableTables).slice(
    1
  );

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json({ message: "Slug is invalid!" }, { status: 400 });
  }

  const upcomingBooking = await prisma.booking.create({
    data: {
      email,
      first_name,
      last_name,
      phone,
      occassion,
      request,
      date: new Date(`${date}T${time}`),
      party_size: Number(party),
      restaurant_id: restaurant.id,
    },
  });

  const bookingsOnTables = tablesToBook.map((table_id) => ({
    table_id,
    booking_id: upcomingBooking.id,
  }));

  await prisma.bookingsOnTables.createMany({
    data: bookingsOnTables,
  });

  return NextResponse.json({ booking: upcomingBooking });
}
