import Link from "next/link";
import { SECTION_IDs } from "../utils/constants";

export default function NavBar({ className }: { className: string }) {
  return (
    <nav className={className}>
      {Object.values(SECTION_IDs).map((section) => (
        <Link key={section} className="capitalize py-4" href={`#${section}`}>
          {section}
        </Link>
      ))}
    </nav>
  );
}

// active:text-rose-600 active:border-b-2 active:border-b-red-600
