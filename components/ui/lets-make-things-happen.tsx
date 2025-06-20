import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function LetsMakeThingsHappenSection() {
  return (
    <section className="my-10 md:py-20 max-w-6xl mx-auto bg-[#024293] rounded-[45px] p-8 md:p-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Adjusted background pattern to be more subtle and cover better */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-cover bg-center" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 md:pr-[22rem] text-center md:text-left" // Centered text on small screens, left-aligned on medium+
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }} // Ensures animation plays once when 30% in view
      >
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
  Ready to Build Your MVP?
</h2>

<p className="my-6 md:my-8 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto md:mx-0"> {/* mx-auto for center, md:mx-0 for left */}
  Let&apos;s turn your app idea into reality in weeks, not months. Schedule a free 15m call to discuss your project.
</p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block" // Ensures hover effect applies correctly to the Link
        >
          <Link
            href="/meeting"
            className="inline-flex items-center py-3 px-8 md:px-12 text-lg font-medium rounded-lg bg-white text-[#024293] hover:bg-blue-100 transition-colors duration-300 shadow-lg"
          >
            Book Free Strategy Call
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Illustration */}
      <motion.div
        className="absolute bottom-0 right-1/2 translate-x-1/2 md:translate-x-0 md:-bottom-4 md:right-4 w-48 h-48 md:w-64 md:h-64 mt-8 md:mt-0" /* Adjusted positioning for mobile */
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* <Image
          src="/images/mobile-dev-illustration.png" // Replace with your actual image path
          alt="Mobile app development illustration"
          fill
          className="object-contain"
        /> */}
      </motion.div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;