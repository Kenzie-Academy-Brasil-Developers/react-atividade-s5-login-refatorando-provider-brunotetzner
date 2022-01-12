import { Children, ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface childrenProps {
  children: ReactNode;
}
export const Provider = ({ children }: childrenProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
