"use client"; // Keep this if it's a client component

import { Element } from "react-scroll";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion"; // Import motion

export const WhyUsSection = () => {
  // Define animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Define animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <Element name="why-us">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#024293' }}>
            Why Us?
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Agencies Column */}
          <motion.div
            className="border-2 rounded-xl p-8 bg-white"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // Animate when element is in view
            viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% visible
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Traditional Agencies
            </h3>
            <ul className="space-y-4">
              {agencyPainPoints.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1 }} // Stagger animation for each item
                >
                  <X className="text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Your Solution Column (GoMobi) */}
          <motion.div
            className="border-2 rounded-xl p-8 bg-white relative overflow-hidden"
            style={{ borderColor: '#024293' }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // Animate when element is in view
            viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% visible
          >
            {/* Highlight bar */}
            <div
              className="absolute top-0 left-0 h-full w-1"
              style={{ backgroundColor: '#024293' }}
            ></div>

            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#024293' }}>
              GoMobi
            </h3>
            <ul className="space-y-4">
              {yourAdvantages.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1 }} // Stagger animation for each item
                >
                  <Check className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

// Data matching your image
const agencyPainPoints = [
  "3+ month timelines",
  "$30k+ minimum budgets",
  "Hiring multiple dev teams",
  "Endless meetings",
  "Tech stack debates",
  "Legacy code issues",
  "Post-launch crashes",
  "Hidden fees",
  "Account manager layers"
];

const yourAdvantages = [
  "2-week MVPs",
  "From $1.5k",
  "One senior expert dev",
  "Zero bureaucracy",
  "Proven stack (React, Flutter)",
  "60fps performance",
  "Crash analytics",
  "All-inclusive rate",
  "Direct access"
];