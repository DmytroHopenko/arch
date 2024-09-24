"use client";

import { motion, useInView } from 'framer-motion';
import Image from 'next/image'
import { useRef } from 'react';

interface CustomHeroProps{
    title: string;
    subTitle: string;
    description: string;
    img: string;
    mobileImg: string;
    alt: string;
}

export const CustomHero = ({ title, subTitle,description, img, mobileImg, alt}: CustomHeroProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section className="wrapper relative min-h-[529px] md:h-auto"
        ref={ref}
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Image src={mobileImg} alt={alt} width={375} height={240} className='md:hidden absolute inset-0 w-full h-[240px] object-cover brightness-75'/>
            <div className="absolute w-[343px] h-[45px] top-[196px] left-0 bg-[#fff] md:hidden" />
            <div className="w-full h-auto md:h-[720px] relative top-[240px] md:top-0">
                    <Image src={img} alt={alt} width={635} height={720} className='hidden md:block brightness-75 md:w-[573px] md:h-[720px] lg:w-[635px] lg:h-[720px] object-cover'/>
                    <div className="relative md:absolute w-full h-auto md:w-[572px] md:h-[431px] lg:w-[793px] lg:h-[503px] md:right-[-50px] lg:right-[-164px] md:bottom-0 bg-[#fff] flex flex-col md:justify-end md:items-center">
                        <motion.span className='hidden md:block absolute text-[120px] leading-[200px] tracking-[-3px] lg:text-[15.625rem] lg:tracking-[-5px] font-bold text-[#EEEFF4] right-0 lg:right-[164px] top-[-80px]'
                        initial={{ scale: 0}}
                        animate={{scale: 1}}
                        transition={{ duration: 0.5, delay: 0.3}}
                        >{title}</motion.span>
                        <div className='w-[65px] h-[1px] bg-[#C8CCD8] hidden md:block relative top-[-80px] lg:top-[-60px] left-[-195px]' />
                        <motion.h1 className='title mt-4 md:mt-0 mb-5 w-[311px] md:w-[456px] lg:w-[446px] md:mb-10 lg:mb-16'
                        initial={{ opacity: 0, y: 30}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut"}}
                        >{subTitle}</motion.h1>
                        <motion.p className='paragraph w-[311px] md:w-[445px] lg:w-[446px]'
                        initial={{ opacity: 0, y: 30}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut"}}
                        >{description}</motion.p>
                    </div>
            </div>
        </motion.section>
    )
}