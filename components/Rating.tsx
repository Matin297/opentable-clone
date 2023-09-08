import { generateStars } from "@/utils/rating";

export default function Rating({ value }: { value: number }) {
  return <span className="text-md text-rose-600">{generateStars(value)}</span>;
}
