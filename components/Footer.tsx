import { FaGithub, FaXTwitter } from "react-icons/fa6";

import React from "react";

const Footer = () => {
  return (
    <footer className="pt-10 pb-12 px-10 mt-20 border-t-1 border-zinc-800  ">
      <div className="container">
        <div
          className="text-zinc-400 my-6 font-bold text-xl flex justify-between
           w-full"
        >
          <div>Jorge Mejía</div>
          <div className="text-zinc-500 text-2xl">
            <a href="https://github.com/jorgemejia25">
              <FaGithub className="inline mr-3 border-zinc-500" />
            </a>
            <a href="https://x.com/jorge___mejia?mx=2">
              <FaXTwitter className="inline" />
            </a>
          </div>
        </div>
        <div className="text-zinc-400 mt-10">© 2024 Jorge Mejía</div>
      </div>
    </footer>
  );
};

export default Footer;
