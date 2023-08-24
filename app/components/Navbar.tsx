import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex gap-2 px-4 py-3">
        <Link href="/" className="mr-auto">
          <img
            className="h-9 w-auto"
            src="https://cdn.otstatic.com/cfe/14/images/opentable-logo-153e80.svg"
            alt="logo"
          />
        </Link>
        <button className="px-4 text-white text-xs bg-cyan-700 rounded">
          Sign in
        </button>
        <button className="px-4 text-xs border border-cyan-700 rounded">
          Sign up
        </button>
      </nav>
    </header>
  );
}
