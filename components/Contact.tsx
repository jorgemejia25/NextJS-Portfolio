import React from "react";

const Contact = () => {
  return (
    <section className="container mt-14" id="contact">
      <div className="flex items-start justify-center mt-6 flex-col md:flex-row gap-12">
        <div className="w-full">
          <h3 className={`mt-12 text-3xl font-bold`}>More Info</h3>
          <div className="w-12 h-0.5 my-3 bg-zinc-400"></div>
          <div className="text-zinc-400 mt-8">
            As an API developer, I have created multiple APIs that facilitate
            message delivery through various channels such as WhatsApp and SMS.
            Throughout my career, I have primarily focused on solutions for call
            centers and web applications.
          </div>
        </div>
        <div className="w-full">
          <h3 className={`mt-12 text-3xl font-bold`}>Contact Me</h3>
          <div className="w-12 h-0.5 my-3 bg-zinc-400"></div>
          <div className="text-zinc-400 mt-8 leading-loose">
            Jorge Mejía
            <br />
            Based in Guatemala
            <br />
            <strong>Phone</strong>
            <br />
            (502) 3157 3100
            <br />
            <strong>Mail me</strong>
            <br />
            devjorgemejia@gmail.com
          </div>
        </div>
        <div className="w-full">
          <h3 className={`mt-12 text-3xl font-bold`}>My Skills</h3>
          <div className="w-12 h-0.5 my-3 bg-zinc-400"></div>
          <div className="text-zinc-500 mt-6 px-3">
            <ul className={`text-zinc-400 list-disc list-inside leading-loose`}>
              <li>Fullstack web development</li>
              <li>API development</li>
              <li>Frontend development</li>
              <li>Backend development</li>
              <li>Mobile development</li>
              <li>Database management</li>
              <li>UI/UX design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
