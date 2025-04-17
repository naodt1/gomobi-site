import React from "react";
import Image from "next/image";
import { WordPullUpDemo } from "../word-pull-up-demo";

const services = [
  {
    icon: "/images/s_6.png",
    title: "MVP Mobile App Development",
    description:
      "We help you quickly bring your mobile app ideas to life, focusing on core features to launch your MVP and gather real user feedback.",
  },
  {
    icon: "/images/s_3.png",
    title: "UI/UX Design for Mobile Apps",
    description:
      "We create intuitive, mobile-first designs that prioritize user experience, ensuring your app looks and works seamlessly across all devices.",
  },
  {
    icon: "/images/s_5.png",
    title: "Cross-Platform Mobile Development",
    description:
      "Our development team builds cross-platform apps using tools like Flutter and React Native, allowing you to reach both iOS and Android users with a single codebase.",
  },
  {
    icon: "/images/s_1.png",
    title: "App Store Optimization (ASO)",
    description:
      "We enhance your app’s visibility on the App Store and Google Play with tailored ASO strategies that increase downloads and user engagement.",
  },
  {
    icon: "/images/s_2.png",
    title: "App Prototyping & Concept Validation",
    description:
      "Test your app ideas before committing to full development with interactive prototypes that help validate your concept and attract investors.",
  },
  {
    icon: "/images/s_4.png",
    title: "Post-Launch Support & Maintenance",
    description:
      "We provide ongoing support after your app launches, including bug fixes, feature updates, and performance optimizations to ensure long-term success.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
      <h1>
        <WordPullUpDemo />
      </h1>
      <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        We build MVPs that launch
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
          >
            <Image
              src={service.icon}
              width={10000}
              height={10000}
              className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
              alt="image"
            />
            <h1 className="text-xl font-medium">{service.title}</h1>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
