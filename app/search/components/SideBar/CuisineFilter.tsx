import { prisma } from "@/utils/prisma";
import CheckBoxFilterItem from "./CheckBoxFilterItem";

const getCuisines = async () => {
  return await prisma.cuisine.findMany();
};

export default async function CuisineFilter() {
  const result = await getCuisines();
  return (
    <section className="py-4 font-light">
      <h4 className="font-semibold mb-2">Cuisine</h4>
      {result.map(({ id, name }) => (
        <CheckBoxFilterItem key={id} category="cuisine" name={name} />
      ))}
    </section>
  );
}
