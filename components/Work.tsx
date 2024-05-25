import Image from "next/image";
import React from "react";
import { Rufina } from "next/font/google";
import image1 from "../assets/image 5.webp";
import image2 from "../assets/image 6.webp";
import image3 from "../assets/image 7.webp";
import image4 from "../assets/image 8.webp";

const Work = () => {
  return (
    <section className="container mt-12" id="work">
      <h3 className="text-center mt-12 leading-loose">
        <strong className="text-6xl">About Me</strong>
        <br className="block md:hidden" />
        <span className="text-3xl ml-4 text-zinc-400 font-medium">
          My aptitudes and skills.
        </span>
      </h3>

      <div
        id="#work"
        className="flex items-center justify-center mt-16 flex-col md:flex-row gap-8"
      >
        <div className="border-1 border-zinc-700 rounded-xl p-7 w-full h-96">
          <p className="text-xs font-bold mt-6 text-zinc-300">AS</p>
          <h5 className="text-3xl  mt-3 font-bold">Web Developer</h5>

          <p className="mt-4 text-zinc-400 text-lg">
            As a web developer, I have assisted on a wide variety of projects
            with multiple companies, handling all the code on my own.
          </p>
        </div>
        <div className="border-1 border-zinc-700 rounded-xl p-7 w-full h-96">
          <p className="text-xs  font-bold mt-6 text-zinc-300">AS</p>
          <h5 className="text-3xl  mt-3 font-bold">API Developer</h5>

          <p className="mt-4 text-zinc-400 text-lg">
            As an API developer, I have created multiple APIs that facilitate
            message delivery through various channels such as WhatsApp and SMS.
            Throughout my career, I have primarily focused on solutions for call
            centers and web applications.
          </p>
        </div>
        <div className="border-1 border-zinc-700 rounded-xl p-7 w-full h-96">
          <p className="text-xs  font-bold mt-6 text-zinc-300">AS</p>
          <h5 className="text-3xl  mt-3 font-bold">Devops Engineer</h5>

          <p className="mt-4 text-zinc-400 text-lg">
            As a DevOps engineer, I have managed and coordinated various
            deployments using services such as AWS, DigitalOcean, and Google
            Cloud. My work has primarily focused on on-premises deployments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
