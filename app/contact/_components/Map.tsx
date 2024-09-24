"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Map = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="wrapper relative h-[367px] md:h-[560px]"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 md:relative w-full h-[367px] md:h-[560px]">
        <Image
          src="/assets/contact/desktop/image-map.png"
          alt="map"
          className="hidden lg:block w-full h-[560px] object-cover"
          width={1110}
          height={560}
        />
        <Image
          src="/assets/contact/tablet/image-map.png"
          alt="map"
          className="hidden md:block lg:hidden mx-auto"
          width={572}
          height={560}
        />
        <Image
          src="/assets/contact/mobile/image-map.png"
          alt="map"
          className="block md:hidden w-full h-[367px] object-cover"
          width={375}
          height={367}
        />
      </div>
    </motion.section>
  );
};
