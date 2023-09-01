"use client";

import { ReactNode } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import cn from "classnames";

import { createQueryString } from "@/app/search/utils/queryParams";
import { PRICE } from "@prisma/client";

const CATEGORY = "price";

export default function LinkFilterItem({
  children,
  className,
  value,
}: {
  children: ReactNode;
  className: string;
  value: PRICE;
}) {
  const pathname = usePathname()!;
  const searchParams = useSearchParams()!;

  return (
    <Link
      href={`${pathname}?${createQueryString({
        searchParams: searchParams.toString(),
        key: CATEGORY,
        value: searchParams.get(CATEGORY) === value ? undefined : value,
      })}`}
      className={cn(
        "text-center p-3 basis-[33%] outline-offset-[-2px] hover:outline hover:outline-2 hover:bg-zinc-100 hover:rounded",
        className,
        { "outline outline-2 rounded": searchParams.get(CATEGORY) === value }
      )}
    >
      {children}
    </Link>
  );
}
