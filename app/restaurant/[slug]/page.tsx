import Link from "next/link";

import { generateStars, calcAverageRating } from "@/utils/rating";
import { prisma } from "@/utils/prisma";

import { SECTION_IDs } from "../utils";

import Photos from "../components/photos";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import Rating from "@/app/components/Rating";

const getRestaurant = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      description: true,
      images: true,
      name: true,
      items: true,
      reviews: {
        select: {
          id: true,
          text: true,
          user: true,
          rating: true,
        },
      },
    },
  });
  if (!restaurant) throw new Error("No Such Restaurant!");
  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const {
    images,
    description,
    name,
    items: menuItems,
    reviews,
  } = await getRestaurant(params.slug);

  const rating = calcAverageRating(reviews);

  return (
    <main>
      <Photos images={images} className="h-[460px]" as="header" />
      <main className="flex items-start gap-6 max-w-5xl mx-auto mt-[-60px]">
        <section className="max-w-[70%] shadow-xl bg-white rounded-md px-5 flex flex-col gap-8">
          <NavBar className="flex gap-5 border-b font-medium sticky top-0 bg-white" />
          <article id={SECTION_IDs.OVERVIEW}>
            <h1 className="pb-8 mb-4 border-b text-5xl font-semibold">
              {name}
            </h1>
            <div className="text-sm flex gap-4 font-medium mb-8">
              <Rating value={rating} /> <span>{rating}</span>{" "}
              <span>{reviews.length} review(s)</span>
            </div>
            <p>{description}</p>
            <Link className="text-rose-600" href="/">
              Read more
            </Link>
          </article>
          <article id={SECTION_IDs.MENU}>
            <h2 className="text-2xl font-bold pb-4 mb-4 border-b">Menu</h2>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {menuItems.map(({ id, description, name, price }) => (
                <li key={id} className="border p-2 rounded">
                  <h3 className="font-bold mb-2">{name}</h3>
                  <p>{description}</p>
                  <div className="font-bold mt-3">{price}</div>
                </li>
              ))}
            </ul>
          </article>
          <article id={SECTION_IDs.PHOTOS}>
            <h2 className="text-2xl font-bold pb-4 mb-4 border-b">
              {images.length} Photos
            </h2>
            <Photos images={images} className="h-[320px]" as="section" />
          </article>
          <article id={SECTION_IDs.REVIEWS}>
            <h2 className="text-2xl font-bold pb-4 border-b">
              What {reviews.length} people are saying
            </h2>
            <ul className="divide-y">
              {reviews.map((review) => (
                <li key={review.id} className="text-sm flex gap-4 py-4">
                  <section className="text-center w-full max-w-[80px]">
                    <div className="bg-violet-500 mx-auto text-white w-[48px] h-[48px] leading-[48px] mb-2 rounded-full">
                      {review.user.first_name[0]}
                      {review.user.last_name[0]}
                    </div>
                    <span className="font-medium break-words">
                      {review.user.first_name} {review.user.last_name}
                    </span>
                  </section>
                  <section>
                    ⭐⭐⭐⭐⭐
                    <p className="mt-4">{review.text}</p>
                    <Link className="text-rose-600" href="/">
                      Read more
                    </Link>
                  </section>
                </li>
              ))}
            </ul>
          </article>
        </section>
        <SideMenu />
      </main>
    </main>
  );
}
