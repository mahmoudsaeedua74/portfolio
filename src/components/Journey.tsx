"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Journey() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
      ref={sectionRef}
      className="w-full px-4 md:px-8 lg:w-[85%] xl:w-[70%] mx-auto my-10 md:my-20 relative min-h-screen"
    >
      <h1 className="text-center">My Journey</h1>
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
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
          className="mb-10 ms-4"
        >
          <div className="" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Start self study
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
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
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Start researching
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            june 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            start with route
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            start know about HTML,CSS and Bootstrap
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I started learning with Route, and alongside that, I listened to
            Eng. Osama Elzero. , I also used the MDN to strengthen my
            understanding. I began learning HTML & CSS, focusing on key concepts
            such as HTML Structure و CSS Styling and Bootstrap
          </p>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Here is my most important project using these skills:
          </p>

          <div className="space-x-2">
            <a
              href="https://github.com/mahmoudsaeedua74/Daniels"
              target="_blank"
              className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Daniels{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="https://mahmoudsaeedua74.github.io/mealfiy/"
              target="_blank"
              className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Mealify{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
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
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            october 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            start Know about JS
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Here is my most important project using these skills:
          </p>
          <div className="space-x-2">
            <a
              href="https://mahmoudsaeedua74.github.io/CRUD--project/"
              target="_blank"
              className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              CRUD--project{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="https://mahmoudsaeedua74.github.io/Games-oop/"
              target="_blank"
              className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Games-oop{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="https://mahmoudsaeedua74.github.io/weather-app/"
              target="_blank"
              className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              weather-app{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </motion.li>
        <motion.li
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: .5, once: true }}
          className="mb-10 ms-4"
        >
          <div className="" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2024 - present..
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            start Know about React and Next.js
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Here is my most important project using these skills:
          </p>
          <div className="space-x-2">
            {" "}
            <a
              href="https://pizza-restaurant-ten.vercel.app/"
              target="_blank"
              className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              pizza-restaurant{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="https://e-commorce.vercel.app/"
              target="_blank"
              className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              e-commerce{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </motion.li>
      </motion.ol>
    </section>
  );
}
