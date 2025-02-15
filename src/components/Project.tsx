"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import projectOne from "../../public/Screenshot 2025-02-14 203320.png";
import projectTow from "../../public/Screenshot 2025-02-14 203342.png";
import projectThree from "../../public/Screenshot 2025-02-14 203513.png";
import projectFour from "../../public/Screenshot 2025-02-14 203357.png";
import { SiApollographql, SiRedux, SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
const Project = () => {
  const projects = [
    {
      img: projectOne,
      title: "E-Commerce Website",
      link: "https://e-commorce.vercel.app",
      desc: "A fully responsive E-Commerce website with modern web technologies.",
      tags: [
        <FaJs key="FaJs" className="text-[#F0DB4F]" />,
        <FaReact key="FaReact" className="text-blue-500" />,
        <SiRedux key="SiRedux" className="text-[#7548B2]" />,
        <RiTailwindCssFill key="RiTailwindCssFill" className="text-cyan-500" />,
      ],
    },
    {
      img: projectTow,
      title: "Cart-shopping",
      link: "https://bininte-shoping.vercel.app/",
      desc: "E-Commerce with Next.js, Apollo GraphQL, and Redux Toolkit.",
      tags: [
        <FaReact key="FaReact" className="text-blue-500" />,
        <SiTypescript key="SiTypescript" className="text-[#007ACC]" />,
        <SiRedux key="SiRedux" className="text-[#7548B2]" />,
        <RiNextjsFill key="RiNextjsFill" className="text-white0" />,
        <RiTailwindCssFill key="typescript" className="text-cyan-500" />,
        <SiApollographql key="SiApollographql" className="text-[#FFEADB]" />,
      ],
    },
    {
      img: projectThree,
      title: "Game Catalog",
      link: "https://mahmoudsaeedua74.github.io/Games-oop/",
      desc: "A game catalog website built with JavaScript OOP classes.",
      tags: [
        <FaJs key="FaJs" className="text-[#F0DB4F]" />,
        <FaHtml5 key="FaCss3Alt" className="text-[#E44D26]" />,
        <FaCss3Alt key="FaCss3Alt" className="text-[#007ACC]" />,
      ],
    },
    {
      img: projectFour,
      title: "Pizza Ordering App",
      link: "https://pizza-restaurant-ten.vercel.app/",
      desc: "A pizza ordering app with React, TypeScript, Redux, and Framer Motion.",
      tags: [
        <FaReact key="FaReact" className="text-blue-500" />,
        <SiTypescript key="SiTypescript" className="text-[#007ACC]" />,
        <TbBrandFramerMotion key="SiTypescript" className="text-[#F8ED19]" />,

        <SiRedux key="SiRedux" className="text-[#7548B2]" />,
        <RiTailwindCssFill key="typescript" className="text-cyan-500" />,
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 ">
      <motion.h3
        className="font-bold  mb-12 text-gray-800 dark:text-indigo-100 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Best Projects
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-slate-100 dark:bg-black/60   rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                className="w-full h-full block object-cover transition-transform duration-700 group-hover:scale-110"
                layout="fill"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="p-6">
              <motion.h4
                className="text-2xl font-bold mb-2 text-gray-800 dark:text-stone-300 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h4>

              <motion.p
                className="text-sm text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.desc}
              </motion.p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-lg p-3
                     bg-slate-950
                     border-slate-600
                       border rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex 
                items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium
                 text-gray-200 transition duration-300
                 ease-out border-2 border-slate-800 rounded-full shadow-md group/item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-200 duration-300 -translate-x-full
                 bg-slate-950 group-hover/item:translate-x-0 ease"
                >
                  <svg
                    className="w-6 h-6"
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

                <span
                  className="absolute flex items-center justify-center w-full h-full
                text-slate-900
                 dark:text-indigo-100
                  transition-all duration-300 transform group-hover/item:translate-x-full ease"
                >
                  View Project
                </span>
                <span className="relative invisible"> View Project</span>
              </motion.a>
            </div>

            <div
              className="absolute
             top-0 left-0
              w-full h-1 
              bg-gradient-to-r
               from-slate-200
                to-slate-700 transform 
                origin-left scale-x-0
                 group-hover:scale-x-100 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
