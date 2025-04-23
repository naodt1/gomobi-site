// app/not-found.tsx
'use client'; // Make sure this is a client component for Framer Motion

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaEnvelope, FaArrowLeft } from 'react-icons/fa'; // Example icons

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

const titleVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const subtitleVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
};

const navigationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
};

const linkVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const illustrationVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8 } },
};

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100 text-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Link href="/" className="mb-8"> {/* Make the logo clickable to go home */}
        <Image
          src="/logo/gomobi-trans.png"
          alt="GoMobi Logo"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
          className="w-48 h-auto " // Adjust className for styling
        />
      </Link>
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-red-500 mb-6"
        variants={titleVariants}
      >
        404!
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-8"
        variants={subtitleVariants}
      >
        Oops! It seems the page you were looking for has wandered off, perhaps in search of some delicious <span className="italic">injera</span> it couldn't resist.
      </motion.p>
      <motion.div
        className="mb-10"
        variants={navigationVariants}
      >
        <p className="font-semibold text-gray-700 mb-4">Don't worry, it happens to the best of us. Here are a few ways to get back on the right path:</p>
        <ul className="list-none p-0">
          <motion.li className="mb-3" variants={linkVariants}>
            <Link href="/" className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
              <FaHome className="mr-2" />
              Go back to the Homepage
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <button onClick={() => window.history.back()} className="inline-flex items-center bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
              <FaArrowLeft className="mr-2" />
              Go back to the previous page
            </button>
          </motion.li>
        </ul>
      </motion.div>
      <motion.div
        className="mt-8"
        variants={illustrationVariants}
      >
        {/* You can add another image here if you still want the hyena */}
        {/* <img src="/images/lost-hyena.png" alt="A cartoon hyena looking confused" className="max-w-sm h-auto rounded-lg shadow-md" /> */}
        <p className="italic text-gray-500 mt-2">Just a little detour!</p>
      </motion.div>
    </motion.div>
  );
}