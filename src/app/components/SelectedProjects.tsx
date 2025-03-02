"use client";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import React from "react";
import Project from "./Project";
import { projects } from "@/utils/projects";
import { useIntl } from "react-intl";

const SelectedProjects = () => {
    const { formatMessage } = useIntl();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full flex flex-col gap-3 items-start px-12 my-4 md:px-20"
    >
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 w-full text-center text-4xl my-4"
      >
        {formatMessage({ id: "selectedProjects" })}
      </motion.h1>

      {projects.map((project, index) => (
      <Project key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} slideDirection={project.slideDirection}/>
    ))}
    </motion.div>
  );
};

export default SelectedProjects;
