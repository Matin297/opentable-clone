"use client";

import { deleteCookie } from "cookies-next";
import { AUTH_COOKIE } from "@/utils/constants";
import { useAuthContext } from "@/contexts/auth";

export default function Signout() {
  const [, setAuth] = useAuthContext();
  const signoutHandler = () => {
    deleteCookie(AUTH_COOKIE);
    setAuth(null);
  };
  return (
    <button
      onClick={signoutHandler}
      className="px-4 py-2 text-xs border text-cyan-700 border-cyan-700 rounded hover:bg-cyan-700 hover:text-white"
    >
      Sign out
    </button>
  );
}
