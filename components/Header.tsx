"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItems } from "./NavItems";
import { useEffect, useState } from "react";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const toggleMenu = () => {
    window.scrollTo(0, 0);
    setVisible(!isVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  return (
    <header className="wrapper h-[96px] md:h-[152px] flex items-center relative">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={97}
          height={40}
          priority
        />
      </Link>
      <nav className="hidden md:block md:ml-[79px] lg:ml-[94px]">
        <NavItems />
      </nav>
      <div className="block md:hidden ml-auto">
        {isVisible ? (
          <Image
            src="/assets/icons/icon-close.svg"
            alt="close"
            width={20}
            height={21}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <Image
            src="/assets/icons/icon-hamburger.svg"
            alt="hamburger"
            width={24}
            height={17}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        )}
        <MobileNav isVisible={isVisible} />
      </div>
    </header>
  );
};
