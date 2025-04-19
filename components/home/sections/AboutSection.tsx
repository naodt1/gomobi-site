import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const content = {
  sectionHeader: {
    title: "About GoMobi",
    highlight: "GoMobi",
    description: "",
  },
  aboutUsContent: {
    description: `My journey into mobile development started with a simple curiosity and grew into a true purpose. Over the years, I've built apps for a range of clients and startups, and one thing has always stood out: great ideas rarely fail because of technology — they fail because the launch process is often overwhelming, expensive, or lacks the right guidance. That’s where we come in.

Our focus is on building apps that matter — whether it’s a sleek, functional MVP that gets your idea into users’ hands quickly or a full-fledged app that’s designed to grow with you. We work closely with founders, helping them avoid the trap of bloated, “all-in-one” development packages. Instead, we focus on what matters: delivering a lean, impactful version of your app that proves your concept and sets the foundation for real growth.

Many developers want to build their dream app. I want to build yours. That’s why every project at GoMobi is rooted in collaboration, transparency, and a commitment to long-term success. Whether you’re a startup founder, a solo entrepreneur, or a small business with a big idea, we’re here to help you launch smarter, faster, and with purpose.

If you're looking for a partner who understands the grind, knows how to turn your ideas into a working app, and can help you navigate the complexities of launching — let's talk.`,
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.3 } },
};

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 bg-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">
        {/* Image */}
        <motion.div className="lg:w-1/2 mb-10 lg:mb-0" variants={imageVariants}>
          <div className="relative rounded-xl shadow-lg overflow-hidden aspect-w-16 aspect-h-10">
            <Image
              src="/images/people-working.jpg"
              alt="People Working"
              width={550}
             height={420}
             className="rounded-xl shadow-lg"
             priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div className="lg:w-1/2 space-y-8" variants={textVariants}>
          {/* Section Header */}
          <div>
            <h2 className="text-3xl md:text-4xl text-[#f4f4f4] mb-6 font-semibold leading-snug flex items-center gap-3">
              {content.sectionHeader.title.split(" ")[0]}
              <Image
                src="/logo/gomobi-trans.png"
                alt="GoMobi"
                width={120}
                height={48}
                className="inline-block"
              />
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {content.sectionHeader.description}
            </p>
          </div>

          {/* About Us Content */}
          <div className="space-y-6">
            {content.aboutUsContent.description
              .split("\n\n")
              .map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  className="text-lg text-white leading-relaxed max-w-2xl"
                  variants={paragraphVariants}
                  style={{ transitionDelay: `${0.4 + idx * 0.1}s` }}
                >
                  {paragraph}
                </motion.p>
              ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;