"use client";

import { portfolioList } from "@/constants";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10 md:pt-0 pb-[200px]"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {portfolioList.map((portfolio, index) => (
        <motion.div className="relative mx-auto lg:mx-0" key={portfolio.id}
        initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,  
            ease: "easeOut",
            delay: index * 0.3,
          }}>
          <Image
            src={portfolio.mobileSrc}
            alt={portfolio.name}
            width={311}
            height={240}
            className="object-contain brightness-75 md:hidden hover:brightness-125 transition"
          />
          <Image
            src={portfolio.tabletSrc}
            alt={portfolio.name}
            width={573}
            height={240}
            className="object-contain brightness-75 hidden md:block lg:hidden hover:brightness-125 transition"
          />
          <Image
            src={portfolio.src}
            alt={portfolio.name}
            width={350}
            height={560}
            className="object-cover object-center lg:w-auto lg:h-[560px] brightness-75 hidden lg:block hover:brightness-125 transition"
          />
          <div className="absolute flex flex-col bottom-5 left-6">
            <span className="font-bold text-[32px] leading-[40px] text-[#fff]">
              {portfolio.name}
            </span>
            <span className="text-[18px] leading-[24px] font-medium text-[#fff] opacity-75">
              {portfolio.date}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};
