import { prisma } from "@/utils/prisma";

import RestaurantCard from "./components/RestaurantCard";
import SearchRestaurantForm from "./components/SearchRestaurantForm";

const getRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      price: true,
      slug: true,
      name: true,
      images: true,
      cuisine: true,
      location: true,
      reviews: true,
    },
  });
  return restaurants;
};

export default async function Home() {
  const result = await getRestaurants();
  return (
    <main>
      <header className="min-h-[26rem] p-2 bg-hero bg-no-repeat bg-cover bg-[50%] text-white flex justify-center items-center">
        <SearchRestaurantForm title="Make a free reservation" />
      </header>
      <section className="my-12 px-8">
        <ul className="grid grid-cols-auto gap-4">
          {result.map(({ id, ...restaurant }) => (
            <RestaurantCard key={id} {...restaurant} />
          ))}
        </ul>
      </section>
    </main>
  );
}
