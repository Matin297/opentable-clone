import Link from "next/link";
import ReservationForm from "../components/ReservationForm";

import { prisma } from "@/utils/prisma";
import { formatTime } from "@/utils/time";
import { DATE_LOCALE, DATE_FORMAT_OPTIONS } from "@/utils/constants";

async function getRestaurant(slug: string) {
  const restaurant = await prisma.restaurant.findUnique({ where: { slug } });
  if (!restaurant) throw new Error("No such restaurant found!");
  return restaurant;
}

export default async function ReserveRestaurant({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    time: string;
    date: string;
    party: string;
  };
}) {
  const { name, images } = await getRestaurant(params.slug);

  return (
    <main className="grid grid-rows-[repeat(2, auto)] lg:grid-cols-3 gap-5 max-w-5xl mx-auto p-5">
      <section className="lg:col-span-2">
        <p className="text-lg font-semibold">You’re almost done!</p>
        <div className="flex gap-4 my-4">
          <img className="w-16 h-16 rounded-md" src={images[0]} alt={name} />
          <div className="text-base font-medium">
            <h2 className="text-2xl font-bold mb-1">{name}</h2>
            <div className="flex gap-4 flex-wrap">
              <span>
                {new Date(searchParams.date).toLocaleDateString(
                  DATE_LOCALE,
                  DATE_FORMAT_OPTIONS
                )}
              </span>
              <span>{formatTime(searchParams.time)}</span>
              <span>{searchParams.party} people (Standard seating)</span>
            </div>
          </div>
        </div>
        <ReservationForm {...params} {...searchParams} />
        <p className="mt-4 text-sm font-light">
          By clicking “Complete reservation” you agree to the{" "}
          <Link href="/" className="text-rose-600 hover:underline">
            OpenTable Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/" className="text-rose-600 hover:underline">
            Privacy Policy
          </Link>{" "}
          . Message & data rates may apply. You can opt out of receiving text
          messages at any time in your account settings or by replying STOP.
        </p>
      </section>
      <section className="flex flex-col gap-4 text-sm">
        <h4 className="font-bold text-base">What to know before you go</h4>
        <h5 className="font-bold">Important dining information</h5>
        <p>
          We have a 15 minute grace period. Please call us if you are running
          later than 15 minutes after your reservation time.
        </p>
        <p>
          We may contact you about this reservation, so please ensure your email
          and phone number are up to date.
        </p>
        <p>
          Your table will be reserved for 1 hour 30 minutes for parties of up to
          2; 2 hours for parties of up to 4; 2 hours 30 minutes for parties of
          up to 6; and 2 hours 45 minutes for parties of 7+.
        </p>
      </section>
    </main>
  );
}
