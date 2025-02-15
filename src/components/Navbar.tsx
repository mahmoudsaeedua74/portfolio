"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY + 20) {
        setVisible(false);
      } else if (window.scrollY < lastScrollY - 20) {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div>
        <button
          className="relative group block sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform
     transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
          >
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]" />
              <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10" />
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]" />
            </div>
          </div>
        </button>
      </div>
      <header className="z-[999] relative">
        {visible ? (
          <motion.nav
            className={`" 
            ${
              isOpen
                ? "!-translate-x-[200%]"
                : "!-translate-x-[50%] -translate-y- fixed inset-0 h-screen w-full m-0  "
            }
            sm:w-fit
          bg-white
          dark:bg-slate-50
          dark:text-white/90
            border-opacity-40 
            bg-opacity-80 shadow-lg
          shadow-black/[0.03] 
            backdrop-blur-[0.5rem]
            sm:top-6 sm:h-[3.25rem] 
            sm:rounded-full 
            duration-300
            transition-all
            sm:!-translate-x-1/2
          dark:border-black/40 dark:bg-opacity-75
            fixed top-[0.15rem] left-1/2 h-12  py-4 px-16
            sm:flex justify-center items-center sm:py-0"`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <ul
              className="flex-col
          sm:flex-row flex
            items-center space-y-10 sm:space-y-0 justify-center gap-y-1  text-5xl sm:text-base text-slate-950  font-bold sm:w-[initial] sm:flex-nowrap sm:gap-5"
            >
              {isOpen == false && (
                <div>
                  <button
                    className="relative group text-end block sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div
                      className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform
     transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
                    >
                      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left rotate-[42deg]" />
                        <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 -translate-x-10" />
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left -rotate-[42deg]" />
                      </div>
                    </div>
                  </button>
                </div>
              )}
              <Link
                className="hover:text-slate-700 duration-150 transition-colors cursor-pointer"
                href={""}
              >
                Home
              </Link>
              <li className="hover:text-slate-700 duration-150 transition-colors cursor-pointer">
                Project
              </li>
              <Link
                className="hover:text-slate-700 duration-150 transition-colors cursor-pointer"
                href={""}
              >
                Journey
              </Link>
              <li className="hover:text-slate-700 duration-150 transition-colors cursor-pointer">
                Education
              </li>
              <li className="hover:text-slate-700 duration-150 transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </motion.nav>
        ) : (
          ""
        )}
      </header>
    </>
  );
}
