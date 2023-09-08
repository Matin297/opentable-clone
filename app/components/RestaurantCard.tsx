import Link from "next/link";

import { Cuisine, Location, PRICE, Review } from "@/utils/prisma";
import { calcAverageRating } from "@/utils/rating";

import Price from "../../components/Price";
import Rating from "../../components/Rating";

interface RestaurantCardProps {
  price: PRICE;
  slug: string;
  name: string;
  images: string[];
  cuisine: Cuisine;
  location: Location;
  reviews: Review[];
}

export default function RestaurantCard({
  slug,
  name,
  price,
  images,
  cuisine,
  location,
  reviews,
}: RestaurantCardProps) {
  return (
    <li className="rounded-lg overflow-hidden border border-zinc-300">
      <Link href={`/restaurant/${slug}`}>
        <img
          className="h-[150px] w-full object-cover"
          src={images[0]}
          alt="food example"
        />
        <div className="p-2">
          <h3 className="text-lg mb-1 font-bold">{name}</h3>
          <div className="mb-1">
            <Rating value={calcAverageRating(reviews)} />
            <span className="ml-1 text-xs font-medium">
              {reviews.length} review(s)
            </span>
          </div>
          <div className="text-sm mb-2">
            <span className="capitalize">{cuisine.name}</span>
            <span className="ml-2">
              <Price price={price} />
            </span>
            <span className="ml-2 capitalize">{location.name}</span>
          </div>
          <div className="font-bold text-sm">Booked 29 times today</div>
        </div>
      </Link>
    </li>
  );
}
