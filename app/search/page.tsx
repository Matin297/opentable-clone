import Link from "next/link";
import SearchRestaurantForm from "../components/SearchRestaurantForm";
import SideBar from "./components/SideBar";

import { prisma, PRICE } from "@/utils/prisma";
import Price from "../components/Price";

type SearchParamsType = { location: string; cuisine: string; price: PRICE };

const getRestaurantsBySearchParams = async (searchParams: SearchParamsType) => {
  const restaurants = prisma.restaurant.findMany({
    where: {
      location: {
        name: searchParams.location,
      },
      cuisine: {
        name: searchParams.cuisine,
      },
      price: searchParams.price,
    },
    select: {
      cuisine: true,
      location: true,
      slug: true,
      description: true,
      price: true,
      name: true,
      id: true,
      images: true,
      reviews: true,
    },
  });
  return restaurants;
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  const result = await getRestaurantsBySearchParams(searchParams);

  return (
    <main>
      <header className="py-4 px-16 bg-[url('https://cdn.otstatic.com/cfe/14/images/dtp-tablet-de6f07.png')] bg-no-repeat bg-cover bg-[50%] text-white flex justify-center items-center">
        <SearchRestaurantForm />
      </header>
      <section className="flex gap-4 p-4 max-w-4xl mx-auto">
        <SideBar />
        <section className="grow">
          {result.length > 0 ? (
            <ul className="divide-y divide-zinc-300">
              {result.map(({ id, ...restaurant }) => (
                <li key={id} className="flex gap-4 pt-4 mb-4 text-sm">
                  <Link
                    href={`/restaurant/${restaurant.slug}#photos`}
                    className="mb-1"
                  >
                    <img
                      className="rounded-md max-w-[100px]"
                      src={restaurant.images[0]}
                      alt="meal"
                    />
                  </Link>
                  <div className="grow">
                    <Link
                      href={`/restaurant/${restaurant.slug}#overview`}
                      className="text-cyan-600 font-semibold text-lg underline"
                    >
                      <h2>{restaurant.name}</h2>
                    </Link>
                    <div className="my-1">
                      ⭐⭐⭐⭐⭐{" "}
                      <Link
                        href={`/restaurant/${restaurant.slug}#reviews`}
                        className="hover:underline underline-offset-2"
                      >
                        ({restaurant.reviews.length})
                      </Link>
                    </div>
                    <div className="mb-4">
                      <Price price={restaurant.price} /> •{" "}
                      <span className="capitalize">
                        {restaurant.cuisine.name}
                      </span>{" "}
                      •{" "}
                      <span className="capitalize">
                        {restaurant.location.name}
                      </span>
                    </div>
                    <p>{restaurant.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">
              <span className="font-light">No result found for </span>
              <strong className="capitalize">{searchParams.location}</strong>!
            </p>
          )}
        </section>
      </section>
    </main>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  return {
    title: searchParams.location,
  };
}
