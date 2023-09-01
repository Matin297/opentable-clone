"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { createQueryString } from "@/app/search/utils/queryParams";

type FilterItemProps = {
  name: string;
  category: "cuisine" | "location";
};

export default function CheckBoxFilterItem({
  name,
  category,
}: FilterItemProps) {
  const router = useRouter();
  const pathname = usePathname()!;
  const searchParams = useSearchParams()!;

  const onChangeHandler = (name: string) => () => {
    router.push(
      pathname +
        "?" +
        createQueryString({
          key: category,
          searchParams: searchParams.toString(),
          value: searchParams.get(category) === name ? undefined : name,
        })
    );
  };

  return (
    <div className="flex gap-2 mb-1">
      <input
        type="checkbox"
        checked={searchParams.get(category) === name}
        onChange={onChangeHandler(name)}
        id={name}
      />
      <label htmlFor={name} className="capitalize">
        {name}
      </label>
    </div>
  );
}
