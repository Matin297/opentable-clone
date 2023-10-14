"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";

import { User } from "@/utils/prisma";
import useAsync from "@/hooks/useAsync";
import { AUTH_COOKIE } from "@/utils/constants";

import Profile from "@/app/components/Profile";

type Error = {
  message?: string;
};

const AuthContext = createContext<
  [User | null, Dispatch<SetStateAction<User | null>>]
>([null, () => {}]);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [auth, setAuth] = useState<User | null>(null);

  const { run, isLoading, isIdle } = useAsync<User, Error>();

  useEffect(() => {
    run(
      axios.get("/api/profile", {
        headers: {
          Authorization: `bearer ${getCookie(AUTH_COOKIE)}`,
        },
      })
    )
      .then(setAuth)
      .catch(() => deleteCookie(AUTH_COOKIE));
  }, [run]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {isLoading || isIdle ? null : auth ? <Profile {...auth} /> : children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext needs to be used within AuthContextProvider!"
    );
  }

  return context;
};
