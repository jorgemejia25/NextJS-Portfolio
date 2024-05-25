"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./../styles/Header.module.css";

const Header = () => {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [buttonHover, setButtonHover] = useState(false);

  const mouseMove = (e: any) => {
    const { pageX: x, pageY: y } = e;
    setCursorXY({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <header className="relative cursor-none h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="z-40 text-center flex flex-col items-center justify-normal px-6 sm:px-12 ">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-8 text-zinc-500">
          Fullstack Development
        </h3>
        <h1
          className={`${styles.neon}  text-5xl sm:text-6xl md:text-8xl font-bold`}
        >
          Hi, {"I'm"} Jorge Mejia
        </h1>
        <h2 className="text-xl md:text-3xl mt-8 max-w-xl text-zinc-400 mx-auto">
          3 years of experience developing web applications and {"API's"} as a
          fullstack developer.
        </h2>

        <div className="flex gap-8">
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setButtonHover(true)}
              onHoverEnd={() => setButtonHover(false)}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-black cursor-none  font-semibold  sm:text-lg mt-12 px-4 sm:px-8 py-4 rounded-xl w-32sm:w-44"
            >
              Contact me
            </motion.button>
          </a>
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setButtonHover(true)}
              onHoverEnd={() => setButtonHover(false)}
              whileTap={{ scale: 0.9 }}
              className="border-1 border-zinc-700 text-white cursor-none  font-semibold sm:text-lg mt-12 sm:px-8 py-4 rounded-xl w-32 sm:w-44"
            >
              Projects
            </motion.button>
          </a>
        </div>
      </div>
      <div
        className="z-35 absolute bottom-0 h-full w-full
  bg-gradient-to-b from-transparent via-transparent to-black
  "
      ></div>
      <div className="z-30 absolute bottom-0 h-full w-full px-12 md:px-28 flex items-center gap-28">
        <div
          className="hidden lg:block bg-gradient-to-t from-zinc-900 to-transparent h-full opacity-40 border-x-1 border-zinc-800 w-full max-w-md"
          style={{
            backdropFilter: "blur(200px)",
          }}
        ></div>
        <div
          className="bg-gradient-to-t from-zinc-900 to-transparent h-full opacity-60 border-x-1 border-zinc-800 w-full"
          style={{
            backdropFilter: "blur(200px)",
          }}
        ></div>
        <div
          className="hidden lg:block bg-gradient-to-t from-zinc-900 to-transparent h-full opacity-40 border-x-1 border-zinc-800 w-full max-w-md"
          style={{
            backdropFilter: "blur(200px)",
          }}
        ></div>
      </div>
      <div
        className="z-20 absolute w-full h-full"
        style={{
          backdropFilter: "blur(400px)",
        }}
      ></div>
      <div className="absolute rounded-full top-1/2 h-full w-full max-w-96 max-h-96 bg-zinc-600 z-10"></div>
      <div
        style={{
          zIndex: 1000,
          position: "fixed",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          left: `${cursorXY.x}px`,
          top: `${cursorXY.y}px`,
        }}
      >
        <div
          className={` ${
            !buttonHover ? "bg-zinc-500 w-32 h-32" : "bg-white w-44 h-44"
          } opacity-15 rounded-full transition-all duration-300`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
