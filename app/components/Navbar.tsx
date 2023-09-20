import Link from "next/link";

import AuthContextProvider from "@/contexts/auth";

import SignUp from "./SignUp";
import SignIn from "./SignIn";

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
          <SignIn />
        </AuthContextProvider>
      </nav>
    </header>
  );
}
