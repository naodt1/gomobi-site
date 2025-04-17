import React from "react";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
      <div className="w-full md:w-1/2">
        <h1
          className="text-3xl md:text-6xl font-semibold max-w-7xl mx-auto md:text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
        >
          We Build Beautiful <br /> <Cover>Blazing-Fast Mobile Apps</Cover>
        </h1>

        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
          GoMobi is a mobile-first development studio helping startups and brands
          turn ideas into high-performing mobile experiences.
        </p>

        <div className="flex md:justify-center items-center gap-x-4">
          <Link
            href="/meeting"
            className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Get Started
          </Link>
          <Link
            href={"/showcase"}
            className="bg-white py-3 px-10 md:px-16 md:text-xl border-4 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Image section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src="./images/hero-image.png" // replace with the actual image path
          alt="Hero Image"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
