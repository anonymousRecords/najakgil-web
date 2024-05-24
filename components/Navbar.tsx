"use client";
import { navElements } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const searchParams = usePathname();
  console.log(searchParams);

  return (
    <nav className="fixed right-0 top-0 w-full bg-[#2294FF] py-8 md:px-20">
      <div className="prose prose-xl flex justify-end gap-4 text-4xl text-white sm:justify-end lg:text-5xl">
        {navElements.map((element) => (
          <Link
            key={element.name}
            href={element.url}
            className={`${searchParams === element.url ? "text-[#FFBF00]" : "text-white"}`}
          >
            {element.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
