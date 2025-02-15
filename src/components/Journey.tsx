"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Journey() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["5px", "100%"]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 150 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <section
      id="Journey"
      ref={sectionRef}
      className="w-full font-semibold px-4 md:px-8 lg:w-[85%] xl:w-[70%] mx-auto my-10 md:my-20 relative min-h-screen"
    >
      <h2 className="font-bold  mb-12 text-gray-800 dark:text-indigo-100 text-center text-4xl">
        My Journey
      </h2>
      <motion.ol
        className="relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.1 }}
      >
        <motion.div
          className="absolute left-[-2px] w-[4px] rounded-full"
          style={{
            height,
            background: "linear-gradient(to top, #ec4899, transparent)",
          }}
        />

        <motion.li
          id="#Journey"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          className="mb-10 ms-4"
        >
          <div className="" />
          <time className="mb-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
            February 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900  dark:text-slate-200">
            Start self study
          </h3>
          <p className="mb-4 text-ba  text-gray-500 dark:text-gray-400    p-2">
            I recently started exploring the field of programming and learning
            C++. I have gained a basic understanding of programming fundamentals
            and how the field works. i`m excited to continue learning and
            improving my skills as I progress in my journey.
          </p>
        </motion.li>

        <motion.li
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          className="mb-10 ms-4"
        >
          <div className="" />
          <time className="mb-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
            April 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-200">
            Start researching
          </h3>
          <p className="text-base  text-gray-500 dark:text-gray-400  p-2">
            I spent some time researching different fields in tech and found
            myself interested in Front-End Development. After exploring my
            options, I decided to start learning programming with a focus on
            Front-End Development. I chose to begin my journey with a Route..
          </p>
        </motion.li>

        <motion.li
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          className="mb-10 ms-4"
        >
          <div className="" />
          <time className="mb-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
            june 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-200">
            start with route
          </h3>
          <p className="text-base  text-gray-500 dark:text-gray-400  p-2">
            I started my journey with Route, where I began gaining a deeper
            understanding of Front-End Development and the field as a whole. I
            also explored what I will be learning throughout the entire track.
          </p>
        </motion.li>

        <motion.li
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          className="mb-10 ms-4"
        >
          <div className="" />
          <time className="mb-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
            August 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-200">
            start know about HTML,CSS and Bootstrap
          </h3>
          <p className="text-base  text-gray-500 dark:text-gray-400  p-2">
            I started learning with Route, and alongside that, I listened to
            Eng. Osama Elzero. , I also used the MDN to strengthen my
            understanding. I began learning HTML & CSS, focusing on key concepts
            such as HTML Structure و CSS Styling and Bootstrap
          </p>
          <p className="text-base  text-gray-500 dark:text-gray-400  p-2">
            Here is my most important project using these skills:
          </p>

          <div className="sm:space-x-2 sm:inline-block flex flex-col gap-y-2  items-start">
            <a
              target="_blank"
              href="https://github.com/mahmoudsaeedua74/Daniels"
              className="relative inline-flex items-center justify-start px-4 py-2 pr-12
   overflow-hidden font-semibold
     transition-all text-[#9ca3af]
     duration-300 ease-in-out rounded-lg hover:pl-10 hover:pr-6  bg-gray-800 
      group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  bg-[#ec4899] group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#9ca3af]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full  text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Daniels
              </span>
            </a>
            <a
              target="_blank"
              href="https://github.com/mahmoudsaeedua74/Daniels"
              className="relative inline-flex items-center justify-start px-4 py-2 pr-12
   overflow-hidden font-semibold
     transition-all text-[#9ca3af]
     duration-300 ease-in-out rounded-lg hover:pl-10 hover:pr-6  bg-gray-800 
      group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#ec4899] group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#9ca3af]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Mealify
              </span>
            </a>
          </div>
        </motion.li>

        <motion.li
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          className="mb-10 ms-4"
        >
          <div className="" />
          <time className="mb-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
            october 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-200">
            start Know about JS
          </h3>
          <p className="text-base  text-gray-500 dark:text-gray-400  p-2 space-y-2">
            I started learning JavaScript with Route, while also following Eng.
            Osama Elzero and Jonas Schmedtmann on Udemy. I focused on mastering
            the core fundamentals, including Hoisting, Scope, Closures,
            Execution Context, and the Call Stack. As I progressed, I explored
            ES6 features, DOM manipulation, Object-Oriented Programming (OOP),
            and Modules. I also learned how to handle AJAX requests, work with
            jQuery, and write clean, optimized code for better performance.
            Additionally, I delved into advanced concepts like Prototypal
            Inheritance, the Event Loop, Asynchronous JavaScript (Promises &
            Async/Await), Functional Programming, and Performance Optimization
            techniques.
          </p>
          <p className="text-base  text-gray-500 dark:text-gray-400  p-2">
            Here is my most important project using these skills:
          </p>
          <div className="sm:space-x-2 sm:inline-block flex flex-col gap-y-2  items-start">
            <a
              target="_blank"
              href="https://mahmoudsaeedua74.github.io/CRUD--project/"
              className="relative inline-flex items-center justify-start px-4 py-2 pr-12
   overflow-hidden font-semibold
     transition-all text-[#9ca3af]
     duration-300 ease-in-out rounded-lg hover:pl-10 hover:pr-6  bg-gray-800 
      group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#ec4899] group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#9ca3af]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                CRUD--project
              </span>
            </a>
            <a
              target="_blank"
              href="https://mahmoudsaeedua74.github.io/Games-oop/"
              className="relative inline-flex items-center justify-start px-4 py-2 pr-12
   overflow-hidden font-semibold
     transition-all text-[#9ca3af]
     duration-300 ease-in-out rounded-lg hover:pl-10 hover:pr-6  bg-gray-800 
      group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#ec4899] group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#9ca3af]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Games-oop
              </span>
            </a>
            <a
              target="_blank"
              href="https://mahmoudsaeedua74.github.io/weather-app/"
              className="relative inline-flex items-center justify-start px-4 py-2 pr-12
   overflow-hidden font-semibold
     transition-all text-[#9ca3af]
     duration-300 ease-in-out rounded-lg hover:pl-10 hover:pr-6  bg-gray-800 
      group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#ec4899] group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#9ca3af]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {" "}
                weather-app
              </span>
            </a>
          </div>
        </motion.li>
        <motion.li
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          className="mb-10 ms-4"
        >
          <div className="" />
          <time className="mb-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
            November 2024 - present..
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-200">
            start Know about React and Next.js
          </h3>
          <p className="text-base  text-gray-500 dark:text-gray-400  p-2">
            I started learning React and Next.js with Route, which gave me a
            strong foundation. To deepen my understanding, I also followed Jonas
            Schmedtmann, which helped me grasp React and Next.js more
            thoroughly. In React, I learned about JSX, Components, Props, State
            Management, React Hooks (useState, useEffect, useContext, etc.),
            Context API, Redux Toolkit, React Router, Handling Forms,
            Performance Optimization, and Writing Clean Code. In Next.js, I
            explored File-based Routing, Static Site Generation (SSG),
            Server-Side Rendering (SSR), API Routes, Middleware, Image
            Optimization, and Incremental Static Regeneration (ISR). Besides
            React and Next.js, I also learned: TypeScript for better type safety
            and scalability. Tailwind CSS, SASS, and Material UI for styling and
            UI design. Redux Toolkit, Context API, Recoil, and Tanstack Query
            for state management. Framer Motion for animations and smooth UI
            interactions
          </p>
          <p className="text-base  text-gray-500 dark:text-gray-400  p-2">
            Here is my most important project using these skills:
          </p>
          <div className="sm:space-x-2 sm:inline-block flex flex-col gap-y-2  items-start">
            {" "}
            <a
              target="_blank"
              href="https://e-commorce.vercel.app/"
              className="relative inline-flex items-center justify-start px-4 py-2 pr-12
   overflow-hidden font-semibold
     transition-all text-[#9ca3af]
     duration-300 ease-in-out rounded-lg hover:pl-10 hover:pr-6  bg-gray-800 
      group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#ec4899] group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#9ca3af]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {" "}
                e-commerce
              </span>
            </a>
            <a
              target="_blank"
              href="https://pizza-restaurant-ten.vercel.app/"
              className="relative inline-flex items-center justify-start px-4 py-2 pr-12
   overflow-hidden font-semibold
     transition-all text-[#9ca3af]
     duration-300 ease-in-out rounded-lg hover:pl-10 hover:pr-6  bg-gray-800 
      group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#ec4899] group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#9ca3af]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {" "}
                pizza-restaurant
              </span>
            </a>
          </div>
        </motion.li>
      </motion.ol>
    </section>
  );
}
