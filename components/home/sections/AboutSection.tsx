import React from "react";
import Image from "next/image";

const content = {
  sectionHeader: {
    title: "About GoMobi",
    highlight: "GoMobi",
    description:
      ""
  },
  aboutUsContent: {
    description: `Hi, I’m Naod, the founder and lead developer at GoMobi — a mobile app agency built on passion, experience, and a deep understanding of what early-stage businesses actually need to succeed in the app world.

My journey into mobile development started out of pure curiosity and quickly turned into a purpose. After building apps for a variety of clients and startups, one thing became clear: most great ideas don’t fail because of the tech — they fail because the launch process is overwhelming, expensive, or poorly guided. That’s where GoMobi comes in.

I specialize in building Minimum Viable Products (MVPs) — the simplest, cleanest version of your app that gets your idea in users’ hands fast, without draining your time or budget. Instead of offering bloated “all-in-one” development packages, I work closely with founders to launch only what matters most: a strong, lean version of your app that proves your concept and paves the way for real growth.

A lot of developers want to build their dream app. I want to build yours. That’s why every project at GoMobi is rooted in collaboration, transparency, and long-term thinking. Whether you're a startup founder, a solo entrepreneur, or a small business with a big idea — I’m here to help you launch smarter.

If you're looking for a partner who gets the grind, understands MVP strategy, and knows how to turn a napkin sketch into a working app, let's talk.`
  }
};


const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-32 px-4 md:px-12 bg-primary"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/images/people-working.jpg"
            alt="People Working"
            width={550}
            height={420}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 space-y-8">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl md:text-4xl text-[#1d3c8f] mb-4 font-semibold leading-snug flex items-center gap-2">
              {content.sectionHeader.title.split(" ")[0]}
              <Image
                src="/logo/gomobi-trans.png"
                alt="GoMobi"
                width={100}
                height={40}
                className="inline-block"
              />
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              {content.sectionHeader.description}
            </p>
          </div>

          {/* About Us Content */}
          <div className="space-y-5">
            {content.aboutUsContent.description
              .split("\n\n")
              .map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base md:text-lg text-white leading-relaxed max-w-2xl"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
