"use client";

import { SyntheticEvent, useRef } from "react";
import cn from "classnames";
import useAvailability from "@/hooks/useAvailability";

import Link from "next/link";
import Alert from "@/components/Alert";
import Spinner from "@/components/Spinner";

import { PARTY_SIZE, TIME } from "../utils/constants";
import { formatTime } from "../utils/time";

type SideMenuProps = {
  slug: string;
  open_time: string;
  close_time: string;
};

export default function SideMenu({
  open_time,
  close_time,
  slug,
}: SideMenuProps) {
  const dateRef = useRef<HTMLInputElement>(null);

  const { getAvailability, data, error, isLoading, isFailed } =
    useAvailability();

  const openTimeIndex = TIME.findIndex(({ time }) => time === open_time);
  const closeTimeIndex = TIME.findIndex(({ time }) => time === close_time);

  function onSubmitHandler(event: SyntheticEvent) {
    event.preventDefault();
    const { party, time, date } = event.target as typeof event.target & {
      party: { value: string };
      time: { value: string };
      date: { value: string };
    };

    getAvailability({
      slug,
      party: party.value,
      time: time.value,
      date: date.value,
    });
  }

  return (
    <aside className="sticky top-1 w-full max-w-[30%] shadow-xl bg-white rounded-md p-4">
      <h2 className="mb-4 text-lg font-semibold text-center border-b pb-4">
        Make a reservation
      </h2>
      <form onSubmit={onSubmitHandler} className="text-sm">
        {isFailed && error?.message && (
          <Alert className="mb-4" message={error.message} />
        )}
        <div>
          <label className="font-semibold" htmlFor="party">
            Party Size:
          </label>
          <select
            disabled={isLoading}
            name="sizes"
            id="party"
            className="pt-3 pb-2 border-b w-full"
          >
            {PARTY_SIZE.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
          {isFailed && error?.party && (
            <Alert className="mt-2" message={error.party} />
          )}
        </div>
        <section className="flex gap-2 my-4">
          <div className="flex flex-col justify-between flex-1">
            <label className="font-semibold" htmlFor="date">
              Date
            </label>
            <input
              ref={dateRef}
              disabled={isLoading}
              className="pt-3 pb-2 border-b"
              id="date"
              type="date"
            />
            {isFailed && error?.date && (
              <Alert className="mt-2" message={error.date} />
            )}
          </div>
          <div className="flex flex-col justify-between flex-1">
            <label className="font-semibold" htmlFor="time">
              Time
            </label>
            <select
              disabled={isLoading}
              id="time"
              name="time"
              className="w-full pt-3 pb-2 border-b"
            >
              <option className="text-slate-400" value="">
                --:-- --
              </option>
              {TIME.slice(openTimeIndex, closeTimeIndex).map(
                ({ time, display }) => (
                  <option value={time} key={time}>
                    {display}
                  </option>
                )
              )}
            </select>
            {isFailed && error?.time && (
              <Alert className="mt-2" message={error.time} />
            )}
          </div>
        </section>
        <button
          disabled={isLoading}
          type="submit"
          className="flex justify-center items-center w-full text-white font-semibold transition-[background-color] duration-300 ease-in-out bg-rose-600 hover:bg-rose-700 py-3 px-12 rounded"
        >
          {isLoading ? <Spinner /> : "Find a time"}
        </button>
      </form>
      <section className="flex gap-1 flex-wrap mt-4">
        {data.map(({ time, isAvailable }) => (
          <Link
            key={time}
            href={`/reserve/${slug}/?date=${dateRef.current?.value}T${time}`}
            className={cn(
              "whitespace-nowrap bg-rose-600 text-white p-2 text-sm rounded basis-14",
              {
                "bg-slate-300": !isAvailable,
                "pointer-events-none": !isAvailable,
              }
            )}
          >
            {isAvailable && formatTime(time)}
          </Link>
        ))}
      </section>
    </aside>
  );
}
