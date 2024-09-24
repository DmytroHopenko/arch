"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Places = () => {
  const titleRef = useRef(null);
  const placesRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true })
  const isPlacesInView = useInView(placesRef, { once: true })

  return (
    <section className="wrapper relative py-[76px] md:py-[200px] flex flex-col">
      <div className="h-[1px] w-[65px] bg-[#C8CCD8] mb-16" />
      <div className="relative flex flex-col lg:flex-row">
        <motion.h1 className="title w-[250px] mb:w-[270px] mb-10"
        ref={titleRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut'}}
        >Contact Details</motion.h1>
        <motion.div className="relative md:w-full lg:w-auto mb-10 lg:mb-0 lg:ml-20"
        ref={placesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut'}}
        >
            <span className="font-bold text-[18px] leading-[35px] text-[#60636D] mb-5 lg:mb-10">Main Office</span>
          <p className="paragraph mb-10">
            Mail : archone@mail.com
            <br />
            Address : 1892 Chenoweth Drive TN
            <br />
            Phone : 123-456-3451
            <br />
          </p>
          <Link href='https://www.google.com.ua/maps/place/%D0%9D%D0%B0%D1%88%D0%B2%D0%B8%D0%BB%D0%BB,+%D0%A2%D0%B5%D0%BD%D0%BD%D0%B5%D1%81%D1%81%D0%B8,+%D0%A1%D0%A8%D0%90/@35.9085779,-84.2697628,9.97z/data=!4m6!3m5!1s0x8864ec3213eb903d:0x7d3fb9d0a1e9daa0!8m2!3d36.1626638!4d-86.7816016!16zL20vMDVqYm4?hl=ru&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D' className="w-[151px] h-[25px] flex justify-between items-center font-bold text-[18px] leading-[25px text-[#1B1D23] md:absolute md:right-0 md:top-[50%] lg:top-0 lg:relative">View on map <FaArrowRightLong  className="w-[26px] h-[20px] text-[#1B1D23]"/></Link>
        </motion.div>
        <motion.div className="relative md:w-full lg:w-auto lg:ml-16"
        ref={placesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut'}}
        >
            <span className="font-bold text-[18px] leading-[35px] text-[#60636D] mb-5 lg:mb-8">Office II</span>
          <p className="paragraph mb-10">
            Mail : archtwo@mail.com
            <br />
            Address : 3399 Wines Lane TX
            <br />
            Phone : 832-123-4321
            <br />
          </p>
          <Link href='https://www.google.com.ua/maps/place/%D0%9D%D0%B0%D1%88%D0%B2%D0%B8%D0%BB%D0%BB,+%D0%A2%D0%B5%D0%BD%D0%BD%D0%B5%D1%81%D1%81%D0%B8,+%D0%A1%D0%A8%D0%90/@35.2077801,-88.5097428,6.76z/data=!4m6!3m5!1s0x8864ec3213eb903d:0x7d3fb9d0a1e9daa0!8m2!3d36.1626638!4d-86.7816016!16zL20vMDVqYm4?hl=ru&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D' className="w-[151px] h-[25px] flex justify-between items-center font-bold text-[18px] leading-[25px text-[#1B1D23] md:absolute md:right-0 md:top-[50%] lg:top-0 lg:relative">View on map <FaArrowRightLong  className="w-[26px] h-[20px] text-[#1B1D23]"/></Link>
        </motion.div>
      </div>
    </section>
  );
};
