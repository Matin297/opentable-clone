"use client";

import { ChangeEvent } from "react";
import axios from "axios";

import { Booking } from "@/utils/prisma";
import useAsync from "@/hooks/useAsync";

import Spinner from "@/components/Spinner";
import Alert from "@/components/Alert";

export type Params = {
  slug: string;
  time: string;
  date: string;
  party: string;
};

type Error = {
  message?: string;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
};

export default function ReservationForm({ slug, time, date, party }: Params) {
  const { run, isFailed, isLoading, isSuccess, error } = useAsync<
    Booking,
    Error
  >();

  function onSubmitHandler(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target);
    run(
      axios.post(`/api/restaurant/${slug}/reserve`, formData, {
        params: {
          time,
          date,
          party,
        },
      })
    );
  }

  if (isSuccess)
    return <div className="text-green-500"> Reserved Successfully! </div>;

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
      {isFailed && error?.message && (
        <Alert className="mb-4" message={error.message} />
      )}

      <h3 className="font-medium text-base">Details</h3>
      <div className="flex gap-4">
        <div className="flex-1 ">
          <input
            className="w-full border p-3 rounded"
            placeholder="First name"
            name="first_name"
            disabled={isLoading}
            required
          />
          {isFailed && error?.first_name && (
            <Alert className="mt-2" message={error.first_name} />
          )}
        </div>
        <div className="flex-1">
          <input
            className="w-full border p-3 rounded"
            placeholder="Last name"
            name="last_name"
            disabled={isLoading}
            required
          />
          {isFailed && error?.last_name && (
            <Alert className="mt-2" message={error.last_name} />
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            className="w-full border p-3 rounded"
            placeholder="Phone number"
            type="tel"
            name="phone"
            disabled={isLoading}
            required
          />
          {isFailed && error?.phone && (
            <Alert className="mt-2" message={error.message} />
          )}
        </div>
        <div className="flex-1">
          <input
            className="w-full border p-3 rounded"
            placeholder="email"
            type="email"
            name="email"
            disabled={isLoading}
            required
          />
          {isFailed && error?.email && (
            <Alert className="mt-2" message={error.email} />
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <select
          className="flex-1 border p-3 rounded"
          name="occasion"
          id="occasion"
          disabled={isLoading}
        >
          <option value="default">Select an occasion (optional)</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="date">Date night</option>
          <option value="business_meal">Business Meal</option>
          <option value="special_occasion">Celebration</option>
        </select>
        <input
          className="flex-1 border p-3 rounded"
          placeholder="Add a special request (optional)"
          name="request"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className="flex justify-center items-center w-full text-white transition-[background-color] duration-300 ease-in-out bg-rose-600 hover:bg-rose-700 py-3 px-12 rounded"
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : "Complete reservation"}
      </button>
    </form>
  );
}
