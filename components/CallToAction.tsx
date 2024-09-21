"use client";

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export const CallToAction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    return (
        <motion.section className="wrapper relative flex items-center h-[560px]"
        ref={ref}
        initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{delay: 0.3, duration: 1, ease: "easeOut" }}
        >
            <Image src='/assets/home/desktop/image-small-team.jpg' alt='small team' width={1110} height={560} className='h-[560px] w-full inset-0 absolute md:relative brightness-50 object-cover object-center'/>
            <div className="absolute flex flex-col gap-4 lg:gap-8 md:ml-16 lg:ml-[15%]">
                <h1 className='line-clamp-2 max-w-[300px] text-[48px] leading-[52px] text-[#fff] tracking-[-1.71px] font-bold md:text-[72px] md:leading-[64px] md:tracking-[-2px] md:max-w-[445px]'>Small team, big ideas</h1>
                <Link href='/about' className='h-[72px] w-[187px] flex justify-center items-center gap-8 bg-[#1B1D23] text-[18px] leading-[25px] text-[#fff] font-bold hover:bg-[#60636D] transition'>About Us <FaArrowRightLong  className="w-[26px] h-[20px] text-white"/></Link>
            </div>
        </motion.section>
    )
}