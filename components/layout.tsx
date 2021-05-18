import Head from "next/head";
import { ReactNode } from "react";
import Menu from "./menu";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
}
