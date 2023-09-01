import { PRICE } from "@prisma/client";
import LinkFilterItem from "./LinkFilterItem";

export default function PriceFilter() {
  return (
    <section className="py-4 font-light">
      <h4 className="font-semibold mb-2">Price</h4>
      <div className="flex">
        <LinkFilterItem
          value={PRICE.CHEAP}
          className="border rounded-tl rounded-bl"
        >
          $
        </LinkFilterItem>
        <LinkFilterItem value={PRICE.REGULAR} className="border-t border-b">
          $$
        </LinkFilterItem>
        <LinkFilterItem
          value={PRICE.EXPENSIVE}
          className="border rounded-tr rounded-br"
        >
          $$$$
        </LinkFilterItem>
      </div>
    </section>
  );
}
