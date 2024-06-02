"use client";
import { navElements } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const isActive = (name: string) => {
    // "/" 경로는 예외 처리
    if (name === "home" && pathname === "/") {
      return true;
    }
    return pathname.includes(name);
  };

  return (
    <nav
      className="fixed right-0 top-0 w-full bg-[#2294FF] py-8 md:px-20"
      style={{ zIndex: "10" }}
    >
      <div className="sm: prose prose-xl flex items-center justify-end gap-10 px-8 text-lg text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        {navElements.map((element) => (
          <Link
            key={element.name}
            href={element.url}
            className={`${isActive(element.name) ? "text-[#FFBF00]" : "text-white"}`}
          >
            {element.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
