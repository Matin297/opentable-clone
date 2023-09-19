import Link from "next/link";

import AuthContextProvider from "@/contexts/auth";

import SignUp from "./SignUp";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center gap-2 px-4 py-3">
        <Link href="/" className="mr-auto">
          <img
            className="h-9 w-auto"
            src="https://cdn.otstatic.com/cfe/14/images/opentable-logo-153e80.svg"
            alt="logo"
          />
        </Link>
        <AuthContextProvider>
          <SignUp />
          <button className="px-4 text-xs border border-cyan-700 rounded">
            Sign In
          </button>
        </AuthContextProvider>
      </nav>
    </header>
  );
}
