"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { navItems } from "@/utils/constants";
import Button from "@/components/ui/button";

import Logo from "@/assets/svg/logo.svg";
import MenuIcon from "@/assets/svg/menu.svg";
import CloseIcon from "@/assets/svg/close.svg";
import ChevronDown from "@/assets/svg/chevron-down.svg";

const Navbar = () => {
  // Initial State of header while scrolling
  const [scrolled, setScrolled] = useState(false);
  // Initial state of hamburger menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // function to handle the state of header while scrolling
  const handleScroll = () => {
    const offset = window.scrollY;
    // Handle the window resize event
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <section
        className={`${
          scrolled
            ? "bg-[#F6F7F9] w-full text-black duration-150 fixed top-0 transition ease-in shadow-md sm:px-10 px-6"
            : "text-gray-500 absolute rounded-[100px] -translate-x-1/2 lg:px-6 px-[21px] border border-gray-300 left-1/2 bg-gray-100 lg:w-[90%] w-[95%] mt-7"
        } z-20 lg:py-4 py-[22px]`}
      >
        <div className="flex justify-between w-full place-items-center">
          {/* Logo */}
          <Link href="/" aria-label="Home" title="Home Page">
            <Image src={Logo} priority alt="Clear-Link Home" />
          </Link>
          {/* Logo ends */}

          {/* Desktop Nav Links */}
          <nav className="lg:flex hidden justify-between place-items-center xl:w-[72%] w-[76%]">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="xl:text-base flex gap-2 items-center text-sm font-semibold font-mPlus leading-[22px] transition-all hover:pl-[14px] ease-in-out hover:text-flipeet_yellow hover:-translate-x-2"
              >
                {item.text}
                {item.text !== "Pricing" && (
                  <Image src={ChevronDown} priority alt="Chevron Down" />
                )}
              </Link>
            ))}

            <div className="lg:flex items-center w-[45%] justify-end gap-2">
              <Button className="transition-all lg:w-36 h-[52px] w-full ease-in-out hover:scale-95 hover:border-none">
                Talk to sales
              </Button>
              <Button
                primary
                className="transition-all ease-in-out hover:scale-95 hover:border-none lg:w-[167px] w-full h-[52px]"
              >
                Sign up for free
              </Button>
            </div>
          </nav>

          {/* Mobile hamburger menu */}
          <div
            role="button"
            onClick={() => setMenuOpen(true)}
            className="block lg:hidden"
          >
            <Image src={MenuIcon} width={24} height={24} alt="Menu" />
          </div>
        </div>
      </section>

      {/* Mobile Nav Items */}
      {isMenuOpen && (
        <div className="bg-white w-full h-full overflow-y-scroll fixed top-1 left-0 right-0 z-20 pt-[30px] rounded-[17px] shadow-[0px_12px_20px_3px_rgba(0,0,0,0.15)]">
          <div
            role="button"
            className="flex justify-end pr-6 mb-6"
            onClick={() => setMenuOpen(false)}
          >
            <Image src={CloseIcon} width={28} height={28} alt="Close" />
          </div>
          {/* Nav Links */}
          <nav className="flex flex-col justify-start mx-6 lg:hidden">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-gray-500 font-mPlus leading-[22px] mb-12"
              >
                {item.text}
              </Link>
            ))}
            <Button className="lg:w-36 h-[52px] w-full">Talk to sales</Button>
            <Button primary className="mt-10 w-full h-[52px]">
              Sign up for free
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
