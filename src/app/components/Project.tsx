'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { useIntl } from "react-intl";

interface ProjectProps {
  title: string;
  imageUrl: string;
  description: string;
  slideDirection: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  imageUrl,
  description,
  slideDirection = "left",
}) => {
  const imageSlideVariant =
  slideDirection === "left" ? slideInFromLeft(0.8) : slideInFromRight(0.8);
  
  const desktopDescriptionVariant = slideDirection === "left" ? slideInFromRight(0.8) : slideInFromLeft(0.8);
  const { formatMessage } = useIntl();

  return (
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          className="flex flex-col w-full my-4 z-[50]">
      <motion.h1
        variants={slideInFromLeft(0.6)}
        className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 w-full text-center ${slideDirection === "left" ? "lg:text-start" : "lg:text-end"} text-2xl lg:text-3xl my-4`}
      >
        {title}
      </motion.h1>
      <div className="flex w-full gap-4">
        <motion.div
          variants={imageSlideVariant}
          className={`button-primary w-full rounded-xl p-2 flex flex-col gap-4 ${slideDirection == "left" ? "order-1" : "order-2"}`}
        >
          <Image
            src={imageUrl}
            alt={title}
            quality={100}
            width={800}
            height={600}
            className="object-cover rounded-xl"
          />
          <p className="text-white text-sm lg:hidden">{formatMessage({id: description})}</p>
        </motion.div>
            <motion.p 
            initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          variants={desktopDescriptionVariant} className={`hidden lg:flex text-white w-full text-xl ${slideDirection == "left" ? "order-2" : "order-1"}`}>{formatMessage({id: description})}</motion.p>
      </div>

    </motion.div>
  );
};

export default Project;
