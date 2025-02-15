"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="z-[999] relative">
      <motion.nav
        className="  bg-white
                      dark:bg-slate-50
                      dark:text-white/90
        rounded-none 
                    border-opacity-40 
              bg-opacity-80 shadow-lg
         shadow-black/[0.03] 
         backdrop-blur-[0.5rem]
         sm:top-6 sm:h-[3.25rem] 
           sm:rounded-full 
           dark:border-black/40 dark:bg-opacity-75
           fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-4 px-16
             flex justify-center items-center sm:py-0"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.4,
        }}
      >
        <ul className="flex   items-center justify-center gap-y-1 text-[0.9rem] text-stone-950 font-semibold sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <Link
            href={""}
            className="h-3/4 flex items-center justify-center relative"
          >
            Home
          </Link>
          <li className="h-3/4 flex items-center justify-center relative">
            Project
          </li>
          <Link
            href={"/Journey"}
            className="h-3/4 flex items-center justify-center relative"
          >
            Journey
          </Link>
          <li className="h-3/4 flex items-center justify-center relative">
            Education
          </li>
          <li className="h-3/4 flex items-center justify-center relative">
            Contact
          </li>
        </ul>
      </motion.nav>
    </header>
  );
}
