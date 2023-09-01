import Link from "next/link";
import { Cuisine, Location, PRICE } from "@/utils/prisma";
import Price from "./Price";

interface RestaurantCardProps {
  price: PRICE;
  slug: string;
  name: string;
  images: string[];
  cuisine: Cuisine;
  location: Location;
}

export default function RestaurantCard({
  slug,
  name,
  price,
  images,
  cuisine,
  location,
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
            ⭐⭐⭐⭐⭐
            <span className="ml-1 text-xs font-medium">100 reviews</span>
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
