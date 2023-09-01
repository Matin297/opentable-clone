"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchRestaurantForm({ title }: { title?: string }) {
  const router = useRouter();

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      query: { value: string };
    };
    router.push(
      `/search/?location=${encodeURIComponent(
        target.query.value.toLowerCase()
      )}`
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className="w-full max-w-[555px]">
      {title && (
        <h1 className="text-5xl mb-4 font-bold text-center">{title}</h1>
      )}
      <div className="flex flex-wrap gap-4">
        <input
          autoComplete="off"
          type="search"
          className="grow p-3 rounded text-black"
          placeholder="Location, Restaurant, or Cuisine"
          name="query"
          required
        />
        <button
          type="submit"
          className="transition-[background-color] duration-300 ease-in-out bg-rose-600 hover:bg-rose-700 py-3 px-12 rounded"
        >
          Let’s go
        </button>
      </div>
    </form>
  );
}
