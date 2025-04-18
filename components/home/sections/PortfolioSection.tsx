"use client";

import React from "react";
import Image from "next/image";

// Simplified portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Heelies Shoe Ecom",
    description: "Online shoe store offering footwear for men, women, and children.",
    imageUrl: "/images/heelies-app.jpg",
    link: "/project/heelies",
  },
  {
    id: 2,
    title: "FixMasters",
    description: "Connects users with handymen for services and bookings.",
    imageUrl: "/images/fixmasters.png",
    link: "/project/fixmasters",
  },
  {
    id: 3,
    title: "Convo Chat-App",
    description: "Messaging app for seamless communication across the globe.",
    imageUrl: "/images/convo-chat.jpg",
    link: "/project/web",
  },
//   {
//     id: 4,
//     title: "Keepr Password Manager",
//     description: "Password manager with encryption and multi-factor authentication.",
//     imageUrl: "/images/keepr-pass.jpg",
//     link: "/project/keepr",
//   },
];

// Portfolio Item Component
const PortfolioItem: React.FC<{ imageUrl: string; title: string; description: string; link?: string }> = ({ imageUrl, title, description, link }) => (
  <div className="relative rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
    <div className="aspect-w-16 aspect-h-9 p-40">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 hover:opacity-80 transition-opacity duration-300"></div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-sm mt-1 line-clamp-2">{description}</p>
      {link && <a href={link} className="text-indigo-300 hover:underline mt-2 block text-xs">View Project</a>}
    </div>
  </div>
);

// Portfolio Section Component
export function PortfolioSection({ className }: { className?: string }) {
  return (
    <section className={`py-16 ${className}`} id="portfolio">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Our Portfolio</h2>
        <p className="text-gray-600 dark:text-gray-400">Take a look at some of the projects we brought to life.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map(item => <PortfolioItem key={item.id} {...item} />)}
      </div>
    </section>
  );
}
