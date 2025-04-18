import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Quick Turnaround",
    description:
      "We deliver high-quality mobile and web apps in record time. Most projects are completed within 1-2 weeks. Get in touch to learn more!",
  },
  {
    icon: "/icons/design.svg",
    title: "Custom Design & Development",
    description:
      "We create bespoke designs and develop with the latest technologies to bring your app or website to life.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Scalable Solutions",
    description: "We build apps and websites that grow with your business, ensuring easy scalability and long-term success.",
  },
  {
    icon: "/icons/team.svg",
    title: "Personalized Service",
    description:
      "Working directly with the founder ensures a more personalized experience. Your project is my priority, and I'm dedicated to delivering quality work.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Secure & Reliable",
    description:
      "I follow industry best practices to ensure your app or website is secure, protecting your data and your users.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "App Store Optimization (ASO)",
    description:
      "Enhance your app's visibility and downloads with our effective App Store Optimization (ASO) strategies, helping you rank higher and reach more users.",
  },
  
  {
    icon: "/icons/flexible.svg",
    title: "Flexible Solutions",
    description: "I offer dynamic, easy-to-manage websites and mobile apps tailored to your business needs.",
  },
  {
    icon: "/icons/support.svg",
    title: "Ongoing Support",
    description:
      "I provide support after the project is delivered to ensure everything runs smoothly and address any questions or issues.",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Quality development at competitive prices. I offer flexible pricing to fit any budget.",
  },
];


export function WhatWeoffer() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        What We Offer
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
