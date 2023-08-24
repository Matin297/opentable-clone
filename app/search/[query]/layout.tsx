import { ReactNode } from "react";

import CopyRights from "@/app/components/Footer/CopyRights";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CopyRights />
    </>
  );
}
