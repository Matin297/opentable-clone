import CheckBoxFilterItem from "./CheckBoxFilterItem";
import { prisma } from "@/utils/prisma";

const getLocations = async () => {
  return await prisma.location.findMany();
};

export default async function RegionFilter() {
  const result = await getLocations();
  return (
    <section className="py-4 font-light">
      <h4 className="font-semibold mb-2">Region</h4>
      {result.map(({ id, name }) => (
        <CheckBoxFilterItem key={id} name={name} category="location" />
      ))}
    </section>
  );
}
