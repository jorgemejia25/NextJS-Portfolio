"use client";

import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import React from "react";
import image1 from "./../assets/image1.webp";
import image2 from "./../assets/image2.webp";
import image3 from "./../assets/image3.webp";

const Projects = () => {
  const refCard1 = React.useRef(null);
  const { scrollYProgress: scrollYProgressCard1 } = useScroll({
    target: refCard1,
    offset: ["end end", "start start"],
  });

  const rightCard1 = useTransform(scrollYProgressCard1, [0, 2], [0, -700]);
  const opacityCard1 = useTransform(scrollYProgressCard1, [0, 0.5], [1, 0]);

  const refCard2 = React.useRef(null);
  const { scrollYProgress: scrollYProgressCard2 } = useScroll({
    target: refCard2,
    offset: ["end end", "start start"],
  });

  const rightCard2 = useTransform(scrollYProgressCard2, [0, 2], [0, -700]);
  const opacityCard2 = useTransform(scrollYProgressCard2, [0, 0.5], [1, 0]);

  return (
    <div
      className="relative container pt-24"
      style={{ minHeight: "200vh" }}
      id="projects"
    >
      <h3 className="font-bold text-5xl my-8 ">Public Projects</h3>
      <p className="max-w-3xl text-xl text-zinc-400 ">
        Throughout my career, I have primarily focused on solutions for call
        centers and web applications. Orade has been one of my supports as a
        Company, where I have been able to develop my skills and knowledge in
        the field of software development.
      </p>
      <div className="relative flex flex-col md:flex-row">
        <div className="mt-16 flex md:w-1/2 justify-start items-start">
          <div>
            <div className="mt-24 mt:m-0 md:h-screen flex flex-col md:justify-center relative">
              <a
                href="https://pollobrujo.com.gt/"
                className="font-bold block text-4xl mt-12 mb-8
                        transition duration-300 ease-in-out
                        "
              >
                Pollo Brujo
              </a>
              <p className="max-w-3xl text-xl text-zinc-400">
                Pollo Brujo is a fast food restaurant chain in Guatemala. I
                developed their website and their API for online orders using
                Angular and NestJS, with the support of Orade.
              </p>
              <div>
                <a href="https://pollobrujo.com.gt/">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white mt-12  text-black font-semibold text-lg px-8 py-4 rounded-xl"
                  >
                    Visit Website
                    <MdArrowOutward className="inline ml-2" />
                  </motion.button>
                </a>
              </div>

              <div className="md:hidden mt-16">
                <Image
                  src={image1}
                  alt="image 1"
                  width={900}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="mt-24 mt:m-0 md:h-screen flex flex-col md:justify-center relative">
              <a
                href="http://bodaelsaydavid.com"
                className="font-bold block text-4xl mt-12 mb-8
                        transition duration-300 ease-in-out
                        "
                ref={refCard1}
              >
                Nextjs Wedding
              </a>
              <p className="max-w-3xl text-xl text-zinc-400">
                This is a wedding website that I developed for a Wedding
                Planner. I used React and NextJS for the frontend and Firebase
                for the backend, including the database and hosting.
              </p>

              <div>
                <a href="http://bodaelsaydavid.com">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white mt-12  text-black font-semibold text-lg px-8 py-4 rounded-xl"
                  >
                    Visit Website
                    <MdArrowOutward className="inline ml-2" />
                  </motion.button>
                </a>
              </div>

              <div className="md:hidden mt-16">
                <Image
                  src={image2}
                  alt="image 1"
                  width={900}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="mt-24 mt:m-0 md:h-screen flex flex-col md:justify-center relative">
              <a
                href="https://gorgonaskulls.com"
                className="font-bold block text-4xl mt-12 mb-8
                transition duration-300 ease-in-out
                        "
                ref={refCard2}
              >
                Gorgona Skulls
              </a>
              <p className="max-w-3xl text-lg text-zinc-400">
                Gorgona Skulls is a company that sells handmade jewelry. I
                developed their website using Angular and Firebase. This was one
                of my first projects as a developer, developed in 2020.
              </p>
              <div>
                <a href="https://gorgonaskulls.com">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white mt-12  text-black font-semibold text-lg px-8 py-4 rounded-xl"
                  >
                    Visit Website
                    <MdArrowOutward className="inline ml-2" />
                  </motion.button>
                </a>
              </div>
              <div className="md:hidden mt-16">
                <Image
                  src={image3}
                  alt="image 3"
                  width={900}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className=" h-screen w-1/2 py-32 px-20 hidden md:flex md:sticky top-0 overflow-hidden
        "
        >
          <div className="h-full w-full p-24 pt-32 absolute top-0 z-10 right-0">
            <div
              className="relative card rounded-lg py-20 pl-20 overflow-hidden w-full h-full 
              shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]
            "
            >
              <motion.div
                className="h-full w-full p-24 absolute top-0
                  bg-cover  bg-no-repeat
                  rounded-lg
                  z-30
                "
                style={{
                  right: rightCard1,
                  opacity: opacityCard1,
                  backgroundImage: `url(${image1.src})`,
                }}
              ></motion.div>

              <motion.div
                className="h-full w-full p-24 absolute top-0 right-0
                  bg-cover  bg-no-repeat bg-center
                  rounded-lg z-20
                "
                style={{
                  left: rightCard2,
                  opacity: opacityCard2,
                  backgroundImage: `url(${image2.src})`,
                }}
              ></motion.div>

              <div
                className="h-full w-full p-24 absolute top-0 right-0
                  bg-cover  bg-no-repeat bg-center
                  rounded-lg
                "
                style={{
                  backgroundImage: `url(${image3.src})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
