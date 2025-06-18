"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-between px-6 py-12"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="w-full md:w-1/2">
        <motion.h1
          className="text-3xl md:text-6xl font-semibold max-w-7xl mx-auto md:text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          variants={item}
        >
          We Build MVPs <br /> 
          <motion.span 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            For Breakfast!
          </motion.span>
        </motion.h1>

        <motion.p 
          className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          variants={item}
        >
          Your idea, turned into a working mobile app in weeks, without the agency fluff
        </motion.p>

        <motion.div 
          className="flex md:justify-center items-center gap-x-4"
          variants={item}
        >
          <Link
            href="/meeting"
            className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Image section */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <motion.img
          src="./images/hero-image.png"
          alt="Hero Image"
          className="max-w-full h-auto rounded-lg shadow-lg"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        />
      </motion.div>
    </motion.div>
  );
}