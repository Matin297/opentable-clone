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
import { User } from "@/utils/prisma";

import Profile from "@/app/components/Profile";
import useProfile from "@/hooks/useProfile";

const AuthContext = createContext<
  [User | null, Dispatch<SetStateAction<User | null>>]
>([null, () => {}]);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [auth, setAuth] = useState<User | null>(null);

  const { getProfile, isLoading, isIdle } = useProfile();

  useEffect(() => {
    getProfile().then(setAuth);
  }, [getProfile]);

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
