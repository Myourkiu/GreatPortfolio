"use client";
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import { MdOutlineFileDownload } from 'react-icons/md';
const TopContent = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className='flex flex-col md:flex-row items-center justify-center px-12 md:px-20 mt-40 w-full z-[20]'>
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col md:gap-6 mt-16 text-5xl text-bold text-white max-w-[600px] w-auto h-auto'>
                Bem-vindo(a)
                <div className="md:flex-col">
                ao meu
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> portfólio</span>
                </div>
            </motion.div>
            <motion.p className='text-lg text-gray-400 my-5 max-w-[600px]'
            variants={slideInFromLeft(0.8)}>
                Sou um Engenheiro de Software Fullstack com experiências em Websites e desenvolvimento de Softwares. Confira meus projetos e skills.
            </motion.p>
            <motion.button variants={slideInFromLeft(1)}
            className='my-5 p-2 button-primary text-center text-gray-50 cursor-pointer rounded-lg max-w-[200px] flex items-center gap-2 justify-center'>
                <MdOutlineFileDownload className='text-gray-50' size={23}/>
                Baixar currículo
            </motion.button>
        </div>

{/* <div className="w-full h-full relative">
        <motion.div className='w-full h-full' 
        variants={slideInFromRight(0.8)}>
            <motion.div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute'>
                <Image src={"/photo.png"} priority quality={100} fill alt='' className='object-cover'/>
            </motion.div>
            <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] z-[100]" 
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg">
                <motion.circle 
                cx="253" 
                cy="253" 
                r="250" 
                stroke="#7042f88b"
                strokeWidth={4} 
                strokeLinecap={"round"} 
                strokeLinejoin={"round"} 
                initial={{strokeDasharray: "24 10 0 0"}} 
                animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360]}}
                transition=
                {{duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}/>
            </motion.svg>

            
        </motion.div>
</div> */}

    </motion.div>
  )
}

export default TopContent