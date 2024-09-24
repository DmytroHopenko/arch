"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Heritage = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const imgRef = useRef(null);
  const isTitleInView = useInView(titleRef, {once: true})
  const isParagraphInView = useInView(paragraphRef, { once: true})
  const isImgInView = useInView(imgRef, { once: true})

  return (
    <section className="wrapper py-[76px] md:py-[200px] flex justify-between gap-10">
      <div className="lg:max-w-[446px] flex flex-col lg:justify-between gap-10 md:gap-10 lg:gap-0">
        <div className="h-[1px] w-[65px] bg-[#C8CCD8]" />
        <motion.h1 className="title line-clamp-2 w-[250px] md:w-[270px]"
        ref={titleRef}
        initial={{ opacity: 0, x: -100}}
        animate={ isTitleInView ? { opacity: 1, x: 0} : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut'}}
        >Our Heritage</motion.h1>
        <motion.p className="paragraph"
        ref={paragraphRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isParagraphInView ? { opacity: 1, y: 0} : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut'}}
        >
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country. <br />
          <br />
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs. <br />
          <br />
          Our small team of world-class professionals provides input on every
          project.
        </motion.p>
      </div>
      <motion.div className="hidden lg:block w-[540px] h-[568px]"
      ref={imgRef}
      initial={{ opacity: 0, x: 100, scale: 1.1 }}
      animate={isImgInView ? { opacity: 1, x: 0, scale: 1} : {}}
      transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut'}}
      >
        <Image
          src="/assets/about/desktop/image-heritage.jpg"
          alt="heritage"
          width={540}
          height={568}
          className="object-cover h-[568px]"
        />
      </motion.div>
    </section>
  );
};
