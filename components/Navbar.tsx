"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { Rufina } from "next/font/google";

const rufina = Rufina({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full py-6 px-12  z-50
         text-white
        border-b-1 border-zinc-800  
        transition-colors duration-300
      `}
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="w-full flex items-center justify-between flex-wrap container">
          <div className={`text-3xl font-semibold tracking-wider`}>j</div>

          <div className="flex sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <motion.svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </motion.svg>
            </button>
          </div>
          <div className="hidden sm:flex">
            <ul className="flex space-x-8 items-center justify-center capitalize text-md`">
              <li>
                <a href="#work" className="transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors duration-300">
                  contact
                </a>
              </li>
              <li>
                <a href="#projects">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white  text-black font-semibold text-lg px-8 py-2 rounded-xl"
                  >
                    Projects
                  </motion.button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="sm:hidden pt-12 pb-5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col text-xl space-y-4">
                <a href="#work">about</a>
                <a href="#contact">contact</a>
                <a href="#projects">projects</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
export default Navbar;
