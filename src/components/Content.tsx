"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_pycouza",
        "template_oc2aavk",
        formData,
        "Bb6mNSVsbyMC0KQOx"
      );

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    }

    setIsLoading(false);
  };
  return (
    <section  id="Contact" className="px-4 py-8 md:py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 capitalize">
        {/* Contact Info */}
        <div className="text-gray-800 dark:text-indigo-200 space-y-6 md:space-y-8">
          <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-12">
            contact me now
          </h3>
          <ul className="text-xl md:text-2xl lg:text-3xl space-y-4 md:space-y-8 font-semibold">
            <li className="break-words">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mahmoudsaeed0112074@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                <span>mail:</span> mahmoudsaeed0112074@gmail.com
              </a>
            </li>
            <li>
              <span>address:</span> Cairo, Egypt
            </li>
            <li>
              <span>phone:</span> +201120847850
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-900/70 text-gray-800 dark:text-indigo-200 p-4 md:p-6 rounded-lg shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-slate-800 rounded-lg bg-gray-100 dark:bg-transparent
                outline-none transition-all duration-150 focus:border-none
                focus:outline-4 shadow-lg focus:outline-indigo-800"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-slate-800 rounded-lg bg-gray-100 dark:bg-transparent
                outline-none transition-all duration-150 focus:border-none
                focus:outline-4 shadow-lg focus:outline-indigo-800"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-slate-800 rounded-lg bg-gray-100 dark:bg-transparent
                outline-none transition-all duration-150 focus:border-none
                focus:outline-4 shadow-lg focus:outline-indigo-800"
              required
            />
            <div className="flex justify-center md:justify-start">
              <button
                disabled={isLoading}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span className="w-full h-full
                 bg-gradient-to-br 
                from-[#ff8a05] via-[#ff5478] to-[#ff00c6] 
                  group-hover:from-[#ff00c6] 
                  group-hover:via-[#ff5478]
                   group-hover:to-[#ff8a05] absolute" />
                <span className="relative px-4 md:px-6 py-2 md:py-3 transition-all ease-out bg-gray-900 rounded-md 
                  group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white text-sm md:text-base">
                    {isLoading ? "sending.." : "Send Message"}
                  </span>
                </span>
              </button>
            </div>
            {isSent && (
              <p className="text-green-500 font-semibold text-center mt-2">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
