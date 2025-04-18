import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={`overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
        xl:w-4/5 2xl:w-[68%] bg-[rgba(255,255,255,0.8)] backdrop-blur-md flex items-center 
        justify-between py-6 px-4 md:px-8 mx-6 ${className || ''}`}
    >
<Link href="/" className="cursor-pointer">
        <Image
          src="/logo/gomobi-trans.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-24"
        />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
        <Link
            href="/"
            className="hover:text-blue-500"
            tabIndex={0}
          >
            Home
          </Link>

          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-600 font-semibold"
            className="hover:text-blue-500"
            tabIndex={0}
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-600 font-semibold"
            className="hover:text-blue-500"
            tabIndex={0}
          >
            About Us
          </ScrollLink>

          <ScrollLink
            to="offer"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-600 font-semibold"
            className="hover:text-blue-500"
            tabIndex={0}
          >
            Solutions
          </ScrollLink>

          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-600 font-semibold"
            className="hover:text-blue-500"
            tabIndex={0}
          >
            Pricing
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-600 font-semibold"
            className="hover:text-blue-500"
            tabIndex={0}
          >
            Contact
          </ScrollLink>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <Link
          href="/meeting"
          className={`
            py-3 
            px-6
            text-lg 
            hover:bg-[#abcbff]
            rounded-[6px]
            border-2
            border-black
            text-white
            bg-[#121212]
            transition
            duration-200
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
            dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] 
          `}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
