"use client";

import { AnimatedShinyTextDemo } from "@/components/home/animated-shiny-text-demo";
import ProcessListings from "@/components/home/ProcessListing";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { ScrollBasedVelocityDemo } from "@/components/home/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/home/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { WhatWeoffer } from "@/components/home/sections/WhatWeOfferSection";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Navbar from "@/components/navbar";
import ServiceGrid from "@/components/home/ServiceGrid";
import StatsSection from "@/components/home/sections/StatsSection";
import ServicesSection from "@/components/home/sections/ServicesSection";
import AboutSection from "@/components/home/sections/AboutSection";
import { OurProcessSection } from "@/components/home/sections/OurProcessSection";
import { PortfolioSection } from "@/components/home/sections/PortfolioSection";
import Footer from "@/components/footer";
import PricingSection from "@/components/home/sections/PricingSection";
import { WhyUsSection } from "@/components/home/sections/Whyus";

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 space-y-20
 -z-10 h-full w-full bg-[#fafafa] 
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Navbar />
      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          {/* <AnimatedShinyTextDemo /> */}
          <HeroSection />
        </div>
      </main>

      <Element name="services">
        <ServicesSection />
      </Element>

      {/* <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section> */}

      <Element name="portfolio">
        <PortfolioSection />
      </Element>
{/* 
      <Element name="about">
        <AboutSection />
      </Element> */}

      {/* <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/logo.webp"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;We&apos;ve been working with Bird for over 2 years and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson <br />
              CEO, Atlas Massage
            </span>
          </div>
        </main>
      </section> */}

      <Element name="why-us">
          <WhyUsSection />
      </Element>

        <Element name="pricing">
        <PricingSection />
      </Element>


      <Element name="solutions">
        <WhatWeoffer />
      </Element>
      
      <Element name="process">
        <OurProcessSection />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}
