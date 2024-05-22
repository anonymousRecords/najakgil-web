import { navElements } from "@/constants";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 p-4">
      <div className="prose prose-xl mx-auto flex flex-col justify-between sm:flex-row">
        <div className="flex flex-row justify-center gap-4 align-middle text-4xl text-white sm:justify-evenly lg:text-5xl">
          {navElements.map((element) => (
            <Link key={element.name} href={element.url}>
              {element.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
