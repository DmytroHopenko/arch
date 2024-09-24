"use client";

import { personList } from "@/constants"
import { motion, stagger, useInView } from "framer-motion";
import Image from 'next/image'
import { useRef } from "react";

export const Leaders = () => {
    const titleRef = useRef(null);
    const imgRef = useRef(null);
    const isTitleInView = useInView(titleRef, {once: true})
    const isImgInView = useInView(imgRef, { once: true })
  
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      };

      const listItem = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      };

    return (
        <section className="wrapper flex flex-col min-[1220px]:flex-row gap-5 justify-between">
            <motion.h1 className="title line-clamp-2 w-[220px] md:w-[250px] lg:w-[270px] mb-8 md:mb-10 lg:mb-0"
            ref={titleRef}
            initial={{opacity: 0, x: -100}}
            animate={ isTitleInView ? {opacity: 1, x: 0} : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >The Leaders</motion.h1>
            <motion.div className="w-[311px] md:w-[572px] lg:w-[730px] lg:h-[861px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-5 gap-y-8 mb-[160px] mx-auto lg:mx-0"
            ref={imgRef}
            variants={container}
            initial="hidden" animate={isImgInView ? 'show' : ''}
            >
                {personList.map((person) => (
                    <motion.div className="flex flex-col" key={person.id} variants={listItem}>
                        <Image src={person.avatar} alt={person.name} width={350} height={320} className="mb-3"/>
                        <span className="text-[32px] leading-[40px] font-bold text-[#1B1D23]">{person.name}</span>
                        <span className="font-medium leading-[24px] text-[18px] text-[#1B1D23] opacity-75">{person.position}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}