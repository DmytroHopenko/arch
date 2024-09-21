"use client";

import { heroSlide } from "@/constants";
import { useCallback, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion, stagger } from "framer-motion";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlide.length - 1 ? 0 : prev + 1));
  }, [heroSlide.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlide.length - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [currentSlide, nextSlide, prevSlide])

  return (
      <AnimatePresence>
    <section className="wrapper relative h-[560px] lg:h-[720px] overflow-hidden" {...handlers}>
        {heroSlide.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                className={`${
                  index === currentSlide ? "flex" : "hidden"
                } w-full h-[560px] lg:h-[720px]`}
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Image
                  src={slide.src}
                  className="w-full object-cover lg:block hidden brightness-50"
                  height={720}
                  width={1110}
                  alt={slide.alt}
                  priority
                />
                <Image
                  src={slide.srcTablet}
                  className="w-full object-cover hidden md:block lg:hidden brightness-50"
                  height={720}
                  width={573}
                  alt={slide.alt}
                  priority
                />
                <Image
                  src={slide.srcMobile}
                  className="w-full absolute left-0 object-cover block md:hidden brightness-50"
                  height={720}
                  width={573}
                  alt={slide.alt}
                  priority
                />
                <motion.div className="absolute top-[116px] md:left-[158px] lg:left-[27%] lg:top-[186px]"
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ delay: 0.3}}
                >
                  <span className="text-[48px] md:text-[96px] tracking-[-1.2px] md:tracking-[-2px] text-white leading-[48px] md:leading-[80px] line-clamp-2 font-bold max-w-[311px] md:max-w-[457px] lg:max-w-[544px] mb-5">{slide.title}</span>
                  <p className="font-medium text-[18px] leading-[24px] max-w-[311px] md:max-w-[445px] text-[#fff] mb-16 md:mb-8">{slide.description}</p>
                  <Link href='/portfolio' className="w-[252px] h-[72px] flex justify-center items-center bg-[#1B1D23] hover:bg-[#60636D] text-[#fff] text-[18px] leading-[25px] font-bold gap-5 transition-colors">See Our Portfolio <FaArrowRightLong  className="w-[26px] h-[20px] text-white"/></Link>
                </motion.div>
              </motion.div>
            )
        )}
        <div className="hidden lg:flex flex-row absolute bottom-0 left-[84px]">
        {heroSlide.map((switcher, index) => (
          <div key={switcher.id} className={`flex justify-center items-center size-[80px] cursor-pointer text-[18px] leading-[24px] font-bold ${index === currentSlide ? 'bg-[#1B1D23] text-[#fff]' : 'bg-[#fff] text-[#7D828F]'}`} onClick={() => setCurrentSlide(index)}>
            {switcher.num}
        </div>
        ))}
        </div>
    </section>
    </AnimatePresence>
  );
};
