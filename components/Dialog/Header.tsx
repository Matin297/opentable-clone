import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="flex justify-between items-center mb-4">
      {children}
    </header>
  );
}
