/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { MdKeyboardArrowDown, MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SwitchLanguage } from "@/utils/languages";
import { PopoverClose } from "@radix-ui/react-popover";
import { useLanguage } from "../../../public/contexts/LanguageContext";
import { useIntl } from "react-intl";
const TopContent = () => {
  const { language, setLanguage } = useLanguage();
  const { formatMessage } = useIntl();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row items-center justify-center px-12 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col md:gap-6 mt-16 text-5xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          {formatMessage({ id: "welcome", defaultMessage: "Bem-vindo(a)" })}
          <div className="md:flex-col">
            {formatMessage({ id: "toMy", defaultMessage: "ao meu" })}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {formatMessage({ id: "portfolio", defaultMessage: " portfólio" })}
            </span>
          </div>
        </motion.div>
        <motion.p
          className="text-lg text-gray-400 my-5 max-w-[600px]"
          variants={slideInFromLeft(0.8)}
        >
          {formatMessage({
            id: "description",
            defaultMessage:
              "Sou um Engenheiro de Software Fullstack com experiências em Websites e desenvolvimento de Softwares. Confira meus projetos e skills.",
          })}
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex items-center gap-2"
        >
          <a
            className="my-5 p-2 button-primary text-center text-gray-50 cursor-pointer rounded-lg w-full max-w-[230px] flex items-center gap-2 justify-center text-sm"
            href="/curriculo.pdf"
            download="curriculo-pedro-figueiredo.pdf"
          >
            <MdOutlineFileDownload className="text-gray-50" size={23} />
            {formatMessage({ id: "downloadResume", defaultMessage: "Baixar currículo" })}
          </a>
          <Popover>
            <PopoverTrigger className="card-primary w-20 h-10 rounded-lg flex items-center justify-center gap-2">
              <img
                src={language.flag}
                alt={language.location}
                className="w-12 p-1"
              />
              <MdKeyboardArrowDown size={20} color="white" className="hidden md:block" />
            </PopoverTrigger>
            <PopoverContent className="card-primary w-20 rounded-lg flex flex-col items-center gap-2 border-none">
              {SwitchLanguage.map((lang, index) => (
                <PopoverClose
                  onClick={() => setLanguage(lang)}
                  key={index}
                  className="w-full flex items-center"
                >
                  <img src={lang.flag} alt={lang.location} />
                </PopoverClose>
              ))}
            </PopoverContent>
          </Popover>
        </motion.div>
      </div>

      <motion.div
        className="hidden lg:block w-full h-full"
        variants={slideInFromRight(0.8)}
      >
        <Image src={"/mainIconsdark.svg"} alt="" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default TopContent;
