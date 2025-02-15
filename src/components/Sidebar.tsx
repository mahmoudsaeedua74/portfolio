import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; 

const Sidebar = () => {
  return (
    <article className="fixed top-1/2 transform -translate-y-1/2 left-4 p-4 rounded-full shadow-2xl  bg-white dark:bg-gray-800">
      <div className="flex flex-col gap-y-6">
        <a 
          href="https://github.com/mahmoudsaeedua74" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-700 dark:text-white hover:text-stone-950 transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)] hover:border  w-10 h-10 rounded-full flex justify-center items-center"
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="https://www.linkedin.com/in/mahmoud-saeed-8890092b5/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-700 dark:text-white hover:text-stone-950 transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)] hover:border  w-10 h-10 rounded-full flex justify-center items-center "
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="https://www.facebook.com/profile.php?id=100005360088833" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-700 dark:text-white hover:text-stone-950 transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)] hover:border  w-10 h-10 rounded-full flex justify-center items-center "
        >
          <FaFacebook size={30} />
        </a>
        <a 
          href="https://www.instagram.com/mahmoud_sa3eed_/?next=%2F" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-700 dark:text-white hover:text-stone-950 transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)] hover:border  w-10 h-10 rounded-full flex justify-center items-center "
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </article>
  );
};

export default Sidebar;
