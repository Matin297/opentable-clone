import { Table } from "./prisma";

export function findTablesToBook(
  party: number,
  tables: Pick<Table, "id" | "seats">[]
): number[] {
  if (party <= 0) return [party];

  let minOffset = [-Infinity];

  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    const combos = findTablesToBook(party - table.seats, tables.slice(i + 1));

    if (combos[0] === 0) {
      return [...combos, table.id];
    }

    if (combos[0] > minOffset[0]) {
      minOffset = [...combos, table.id];
    }
  }

  return minOffset;
}
