"use client";

import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const setFromEvent = (e: any) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    const clickListener = () => setClicked(true);
    window.addEventListener("mousedown", clickListener);

    const clickAnimationEnd = () => setClicked(false);
    window.addEventListener("animationend", clickAnimationEnd);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      window.removeEventListener("mousedown", clickListener);
      window.removeEventListener("animationend", clickAnimationEnd);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 border-4 border-gray-400 rounded-full  -translate-y-1/2 pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      animate={{
        scale: clicked ? [1, 1.5, 1] : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};

export default CustomCursor;
