"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaJs,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiApollographql, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
 const topRowSkills = [
  { icon: <SiTypescript className="text-[#007ACC]" />, name: "TypeScript" },
  { icon: <FaSass className="text-pink-500" />, name: "Sass" },
  {
    icon: <RiTailwindCssFill className="text-cyan-500" />,
    name: "Tailwind CSS",
  },
  { icon: <FaNpm className="text-[#CB3837]" />, name: "NPM" },
  {
    icon: <FaGithub className="text-gray-900 dark:text-white" />,
    name: "GitHub",
  },

  {
    icon: <TbBrandFramerMotion className="text-[#F8ED19]" />,
    name: "framer motion",
  },
  {
    icon: <SiRedux  className="text-[#7548B2]" />,
    name: "Redux ",
  },
];
 const bottomRowSkills = [
  { icon: <FaReact className="text-blue-500" />, name: "React" },
  {
    icon: <RiNextjsFill className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <FaCss3Alt className="text-[#007ACC]" />, name: "CSS3" },
  { icon: <FaHtml5 className="text-[#E44D26]" />, name: "HTML5" },
  { icon: <FaJs className="text-[#F0DB4F]" />, name: "JavaScript" },
  { icon: <FaGitSquare className="text-[#F34F29]" />, name: "Git" },
  { icon: <SiApollographql 
    className="text-[#FFEADB]" />, name: "Apollo graphql " },
];
export default function Experience() {
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="flex items-center justify-center ">
      <div className="w-full max-w-4xl mx-auto p-8 ">
        <motion.h2
          className="font-bold  mb-12 text-gray-800 dark:text-indigo-100 text-center text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Top Row - Right to Left */}
          <motion.div
            className="flex justify-around items-center"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
          >
            {topRowSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 "
                variants={iconVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 text-4xl rounded-lg bg-slate-100 dark:bg-slate-800 shadow-2xl  hover:scale-110
            hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)]"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-1 ">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-around items-center"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
          >
            {bottomRowSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2"
                variants={iconVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 text-4xl rounded-lg bg-slate-100 dark:bg-slate-800 shadow-lg  hover:scale-110 
            hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)]"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-1">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
