"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

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
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/projects.json'); // Corrected path
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
        //  Handle error (e.g., show a message to the user)
        setProjects([]); // Or set to some default empty array
      }
    };
    fetchData();
  }, []);

  return (
    <section className={`py-16 ${className}`} id="portfolio">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Our Portfolio</h2>
        <p className="text-gray-600 dark:text-gray-400">Take a look at some of the projects we brought to life.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(item => <PortfolioItem key={item.id} {...item} />)}
      </div>
    </section>
  );
}
