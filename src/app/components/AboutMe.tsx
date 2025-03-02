"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import { useIntl } from "react-intl";

const AboutMe = () => {
  const { formatMessage } = useIntl();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full flex flex-col items-start px-12 my-4 md:px-20"
    >
      <motion.h1
        variants={slideInFromRight(0.5)}
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 w-full text-center text-4xl my-4"
      >
        {formatMessage({ id: "aboutMe" })}
      </motion.h1>

      <motion.section
        variants={slideInFromRight(0.8)}
        className="h-full w-full button-primary p-6 rounded-xl mx-auto text-white mb-12"
        id="about-me"
      >
        <div className="text-lg">
          <div className="text-[#E4B1F0] text-xl">{"<h1>"}</div>
          <p className="ml-8 break-words text-balance">
            {formatMessage({ id: "myNameIs" })}
            <br />
            <span className="text-purple-500">{formatMessage({ id: "pedroFigueiredo" })}</span>
            <br />
            {formatMessage({ id: "aboutMeIntro" })}
          </p>
          <div className="text-[#E4B1F0] text-xl">{"</h1>"}</div>
        </div>

        <div className="text-lg">
          <div className="text-[#E4B1F0] text-xl">{"<p>"}</div>
          <p className="ml-8 text-pretty">
            {formatMessage({ id: "aboutMeExperience" })}
          </p>
          <div className="text-[#E4B1F0] text-xl">{"</p>"}</div>
        </div>

        <div className="text-lg">
          <div className="text-[#E4B1F0] text-xl">{"<p>"}</div>
          <p className="ml-8 text-pretty">
            {formatMessage({ id: "aboutMeSkills" })}
          </p>
          <div className="text-[#E4B1F0] text-xl">{"</p>"}</div>
        </div>

        <div className="text-lg">
          <div className="text-[#E4B1F0] text-xl">{"<p>"}</div>
          <p className="ml-8 text-pretty">
            {formatMessage({ id: "aboutMeGoal" })}
          </p>
          <div className="text-[#E4B1F0] text-xl">{"</p>"}</div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutMe;
