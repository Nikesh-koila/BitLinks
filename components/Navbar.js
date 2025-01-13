"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path=usePathname();

  return (
    <nav className=" h-16 text-white bg-cyan-700 flex justify-between items-center px-2 sm:px-8">
     <Link href="/">  <h2 className="text-3xl  font-bold">BitLinks</h2></Link>
      <ul className="flex gap-5 text-lg font-bold items-center justify-center">
      
        <Link href={path=='/'?"/shorten":"/"}>
          <button className="py-3 px-4 sm:px-6 rounded-lg text-sm bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300  ">
          {path=='/'?"Try now":"Back"}
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
