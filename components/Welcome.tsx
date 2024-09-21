"use client";
import { motion, useInView } from 'framer-motion';
import Image from 'next/image'
import { useRef } from 'react';

export const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section className="wrapper relative flex flex-col lg:flex-row py-[76px] md:py-[200px] lg:justify-end lg:gap-x-[120px]"
    ref={ref}
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.span ref={ref}  className="hidden md:block absolute text-[120px] leading-[200px] tracking-[-3px] lg:text-[15.625rem] lg:tracking-[-5px] font-bold text-[#EEEFF4] top-[40px] lg:top-[130px] lg:hidden min-[1280px]:block min-[1280px]:right-[22%]"
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >Welcome</motion.span>
      <div className='lg:self-end'>
        <div className="w-[65px] h-[1px] block md:hidden bg-[#C8CCD8] mb-16 md:mb-0"/>
        <h1 className="title line-clamp-2 max-w-[311px] md:max-w-[446px] mb-4 md:mb-8 lg:mb-10">Welcome to Arch Studio</h1>
        <p className="paragraph max-w-[310px] md:max-w-[572px] lg:max-w-[445px]">
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results. <br /><br />
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight. <br /><br />
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>
      <div className="hidden lg:block w-[350px] h-[568px]">
        <Image src='/assets/home/desktop/image-welcome.jpg' alt='welcome' width={350} height={568} className='w-[350px] h-[568px] object-cover'/>
      </div>
    </motion.section>
  );
};
