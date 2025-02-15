"use client";
import {  } from "next/navigation";
import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div aria-label="toggle dark" role="button" className="fixed bottom-5 transform -translate-y-1/2 right-4  rounded-full shadow-2xl ">
      <input
        type="checkbox"
        id="checkbox"
        className="hidden"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label
        htmlFor="checkbox"
        className={` relative flex items-center  rounded-full cursor-pointer  transition-colors duration-500`}
      >
        <div
          className={` `}
        >
          {theme === "light" ? (
            <LuSun  className="  text-yellow-600   dark:text-white hover:text-stone-950 transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)] 
             w-6 h-6 rounded-full flex justify-center items-center " />
          ) : (
            <FaRegMoon  className="  text-gray-400  dark:text-white hover:text-stone-950 transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)] 
             w-6 h-6 rounded-full flex justify-center items-center " />
          )}
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
