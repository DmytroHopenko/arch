"use client";

import { featuredList } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Featured = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="wrapper relative py-16"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center mb-10">
        <h1 className="title">Featured</h1>
        <Link
          href="/portfolio"
          className="h-[72px] w-[169px] hidden md:flex items-center justify-center bg-[#1B1D23] gap-5 text-[#fff] text-[18px] leading-[25px] font-bold hover:bg-[#60636D] transition"
        >
          See All <FaArrowRightLong className="w-[26px] h-[20px] text-white" />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-5 lg:justify-between items-center lg:flex-row mb-5 md:mb-[100px]">
        {featuredList.map((featured) => (
          <div
            className="relative w-[311px] h-[240px] md:w-[573px] lg:w-[350px] lg:h-[560px]"
            key={featured.id}
          >
            <span className="absolute right-5 top-8 lg:right-[-10px] z-20 text-[250px] leading-[200px] text-[#fff] opacity-50 tracking-[-5px] font-bold hidden md:block">
              {featured.num}
            </span>
            <Image
              src={featured.mobileSrc}
              alt={featured.name}
              width={311}
              height={240}
              className="object-contain brightness-75 md:hidden"
            />
            <Image
              src={featured.tabletSrc}
              alt={featured.name}
              width={573}
              height={240}
              className="object-contain brightness-75 hidden md:block lg:hidden"
            />
            <Image
              src={featured.src}
              alt={featured.name}
              width={350}
              height={560}
              className="object-cover object-center lg:w-auto lg:h-[560px] brightness-75 hidden lg:block"
            />
            <div className="absolute flex flex-col bottom-5 left-6">
              <span className="font-bold text-[32px] leading-[40px] text-[#fff]">
                {featured.name}
              </span>
              <span className="text-[18px] leading-[24px] font-medium text-[#fff] opacity-75">
                View All Projects
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/portfolio"
        className="w-[311px] h-[72px] bg-[#1B1D23] hover:bg-[#60636D] transition flex items-center justify-center gap-5 text-[18px] leading-[25px] text-[#fff] font-bold mb-16 mx-auto md:hidden"
      >
        See All <FaArrowRightLong className="w-[26px] h-[20px] text-white" />
      </Link>
    </motion.section>
  );
};
