"use client";
import Navbar from "../components/navbar";

export default function RegisterLayout({ children }) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="max-w-7xl mx-auto px-2 pt-10">{children}</main>
    </>
  );
}
