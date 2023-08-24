"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      query: { value: string };
    };
    router.push(`/search/${target.query.value}`);
  };

  return (
    <header className="min-h-[26rem] p-2 bg-hero bg-no-repeat bg-cover bg-[50%] text-white flex justify-center items-center">
      <form onSubmit={onSubmitHandler}>
        <h1 className="text-5xl mb-4 font-bold">Make a free reservation</h1>
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
    </header>
  );
}
