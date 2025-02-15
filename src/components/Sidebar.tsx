"use client";
import React, { useState } from "react";
import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
const Sidebar = () => {
  const [activeTooltip, setActiveTooltip] = useState("");
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mahmoudsaeedua74",
      label: "Check out my GitHub projects",
      color: "text-gray-900 dark:text-white"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mahmoud-saeed-8890092b5/",
      label: "Connect with me on LinkedIn",
      color: "text-blue-600"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100005360088833",
      label: "Follow me on Facebook",
      color: "text-blue-500"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/mahmoud_sa3eed_/",
      label: "Follow me on Instagram",
      color: "text-pink-500"
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mahmoudsaeed0112074@gmail.com",
      label: "Get In touch",
      color: "text-orange-500"
    }
  ];
  return (
    <div className="hidden sm:block fixed top-1/2 -translate-y-1/2 left-2  z-50">
    <div className="flex flex-col gap-y-4 bg-white/90 dark:bg-slate-800/45 p-3 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(8,_112,_184,_0.7)] rounded-full backdrop-blur-sm">
      {socialLinks.map(({ icon: Icon, href, label, color }) => (
        <div
          key={href}
          className="relative group"
          onMouseEnter={() => setActiveTooltip(href)}
          onMouseLeave={() => setActiveTooltip("")}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${color}`}
          >
            <Icon size={24} />
            <span className="absolute inset-0 rounded-full border-2 border-blue-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
  
          {activeTooltip === href && (
            <div className="absolute left-full ml-2 px-3 py-1 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded whitespace-nowrap">
              {label}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Sidebar;
