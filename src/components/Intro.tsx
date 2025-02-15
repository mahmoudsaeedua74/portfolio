"use client";
import React from "react";
import me from "../../public/saeeds.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Intro() {
  const text = "Hi all I'm";
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        staggerChildren: 0.1,
      },
    },
  };
  const wordVariants = {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };

  const text2 = "Mahmoud Saeed";
  const wordVariants2 = {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };
  const textVariants2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <section
        id="home"
        className=" md:gap-1 gap-2 sm:text-start text-center 
        lg:flex-row flex justify-evenly flex-col-reverse items-center md:items-start mt-10 sm:mt-52 overflow-hidden  cursor-default  my-20"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-2xl sm:text-3xl lg:text-[36px] text-stone-950 dark:text-[#E5E9F0] font-medium"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                transition={{ delay: text.length * 0.1 + index * 0.1 + 2.6 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[86px] text-stone-950 font-bold dark:text-[#E5E9F0]"
            initial="hidden"
            animate="visible"
            variants={textVariants2}
          >
            {text2.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={wordVariants2}
                transition={{ delay: text.length * 0.1 + index * 0.1 + 3.7 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-2xl sm:text-3xl lg:text-[36px] text-indigo-500 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 6 }}
          >
            {" "}
            &gt; Front-end developer
          </motion.p>

          <div className="mt-8 sm:mt-10 lg:mt-12 space-y-2 sm:space-y-3">
            <motion.p
              className="text-[#607B96] text-lg sm:text-xl lg:text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6.5 }}
            >
              {"//"} let`s get to know each other
            </motion.p>

            <motion.p
              className="text-[#607B96] text-lg sm:text-xl lg:text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 7 }}
            >
              {"//"} you can also see it on my Github page
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 7.5 }}
            >
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#1b775c] font-bold">githubLink</span> =
              <a
                className="text-[#E99287] underline hover:scale-110 transition-all duration-200 break-all sm:break-normal"
                href="https://github.com/mahmoudsaeedua74"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                &quot;https://github.com/mahmoudsaeedua74&quot;
              </a>
            </motion.p>

            <motion.div
              className="font-semibold text-lg sm:text-xl lg:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 8 }}
            >
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#1b775c] font-bold">MyResume</span> =
              <a 
                href="https://drive.google.com/file/d/1qKGfcnJBBY2jD0k5C5gutm4i90DjyB6R/view?usp=sharing"
                target="_blank"
                download={
                  "https://drive.google.com/file/d/1qKGfcnJBBY2jD0k5C5gutm4i90DjyB6R/view?usp=sharing"
                }
                rel="noopener noreferrer"
                className="text-[#E99287]  hover:scale-105 transition-all duration-200"
              >
                {" "}
                &quot;No_excuses&quot;
              </a>
            </motion.div>

            <motion.div
              className="font-semibold text-lg sm:text-xl lg:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 8.5 }}
            >
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#1b775c] font-bold">getContact</span> =
              <a
                href="#contact"
                rel="noopener noreferrer"
                className="text-[#E99287]  hover:scale-105 transition-all duration-200"
              >
                {" "}
                &quot;lets_Talk&quot;
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mt-10  w-[280px] sm:w-[400px] sm:h-[600px] h-[400px]  mx-auto  "
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.5 }}
        >
          <Image
            src={me}
            alt=""
            className="rounded-full shadow-[0_5px_15px_rgba(128,128,237,_1)]   "
          />
        </motion.div>
      </section>
    </>
  );
}
