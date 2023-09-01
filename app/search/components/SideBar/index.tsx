import PriceFilter from "./PriceFilter";
import RegionFilter from "./RegionFilter";
import CuisineFilter from "./CuisineFilter";

export default function SideBar() {
  return (
    <aside className="divide-y divide-zinc-300 text-base w-full max-w-[15rem]">
      <PriceFilter />
      <RegionFilter />
      <CuisineFilter />
    </aside>
  );
}
