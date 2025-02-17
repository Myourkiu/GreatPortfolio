"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const AboutMe = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex flex-col items-start px-12 my-4 md:px-20"
    >
      <motion.h1
        variants={slideInFromRight(0.5)}
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 w-full text-center text-4xl my-4"
      >
        Sobre mim
      </motion.h1>

      <motion.section
        variants={slideInFromRight(0.8)}
        className="h-full w-full button-primary p-6 rounded-xl mx-auto text-white mb-12"
        id="about-me"
      >
        <div className="text-lg">
          <div className="text-[#E4B1F0] text-xl">{"<h1>"}</div>
          <p className="ml-8 break-words text-balance">
            Meu nome é <br />
            <span className="text-purple-500">Pedro Figueiredo,</span>
            <br />
            sou Desenvolvedor Fullstack especializado no desenvolvimento de
            aplicações web e sistemas escaláveis.
          </p>
          <div className="text-[#E4B1F0] text-xl">{"</h1>"}</div>
        </div>

        <div className="text-lg">
          <div className="text-[#E4B1F0] text-xl">{"<p>"}</div>
          <p className="ml-8 text-pretty">
            Tenho experiência em criar soluções robustas e eficientes, focando
            em código limpo, manutenível e escalável. Minha stack inclui
            tecnologias modernas como{" "}
            <span className="text-purple-500">
              React, Next.js, TypeScript, TailwindCSS
            </span>{" "}
            no Front-End, além de um sólido conhecimento em{" "}
            <span className="text-purple-500">
              C#/.NET, PostgreSQL, Microsoft SQL Server e MySQL
            </span>{" "}
            para o Back-End.
          </p>
          <div className="text-[#E4B1F0] text-xl">{"</p>"}</div>
        </div>

        <div className="text-lg">
          <div className="text-[#E4B1F0] text-xl">{"<p>"}</div>
          <p className="ml-8 text-pretty">
            Tenho experiência em desenvolvimento de APIs, microsserviços e
            integração com serviços externos, utilizando{" "}
            <span className="text-purple-500">
             JWT, SignalR, WebHooks e Middleware
            </span>
            .
            
          </p>
          <div className="text-[#E4B1F0] text-xl">{"</p>"}</div>
        </div>

        <div className="text-lg">
          <div className="text-[#E4B1F0] text-xl">{"<p>"}</div>
          <p className="ml-8 text-pretty">
            Meu objetivo é entregar soluções eficientes e inovadoras, garantindo
            alta performance e uma experiência fluida para os usuários. Estou
            sempre em busca de novos desafios e oportunidades para aprimorar
            minhas habilidades e contribuir para projetos impactantes.
          </p>
          <div className="text-[#E4B1F0] text-xl">{"</p>"}</div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutMe;
