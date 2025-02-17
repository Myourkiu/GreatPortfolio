"use client";
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { MdOutlineFileDownload } from 'react-icons/md';
import Image from 'next/image';
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
            <motion.a variants={slideInFromLeft(1)}
            className='my-5 p-2 button-primary text-center text-gray-50 cursor-pointer rounded-lg max-w-[200px] flex items-center gap-2 justify-center' 
            href='/curriculo.pdf' download="curriculo-pedro-figueiredo.pdf">
                <MdOutlineFileDownload className='text-gray-50' size={23} />
                Baixar currículo
            </motion.a>
        </div>

        <motion.div className='hidden lg:block w-full h-full' 
        variants={slideInFromRight(0.8)}>
            <Image
            src={"/mainIconsdark.svg"}
            alt=''
            height={650}
            width={650}/>
        </motion.div>

    </motion.div>
  )
}

export default TopContent