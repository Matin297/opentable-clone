import { PRICE } from "@/utils/prisma";

export default function Price({ price }: { price: PRICE }) {
  if (price === "EXPENSIVE") {
    return "$$$$";
  } else if (price === "REGULAR") {
    return (
      <>
        <span>$$</span>
        <span className="text-zinc-300">$$</span>
      </>
    );
  } else if (price === "CHEAP") {
    return (
      <>
        <span>$</span>
        <span className="text-zinc-300">$$$</span>
      </>
    );
  }
  return null;
}
