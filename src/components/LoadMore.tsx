"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoArrowDown } from "react-icons/io5";

export default function LoadMore() {
  return (
    <motion.div
      className=" flex flex-col items-center "
      initial={{ y: 0, opacity: 0.7 }}
      animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      <div className="flex flex-col justify-center items-center mt-40 cursor-pointer">
        {" "}
        <p className="text-indigo-500  font-semibold text-lg">
          There’s more about me
        </p>
        <IoArrowDown className="text-indigo-700  text-3xl mt-2 animate-bounce" />
      </div>
    </motion.div>
  );
}
