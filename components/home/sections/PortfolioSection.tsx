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

const PortfolioItem: React.FC<{ imageUrl: string; title: string; description: string; link?: string }> = ({
  imageUrl,
  title,
  description,
  link,
}) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300 ease-in-out">
    <div className="relative w-full h-80"> {/* Increased from h-60 to h-80 */}
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/60 transition duration-300" />
    <div className="absolute bottom-0 p-6 text-white z-10"> {/* More padding */}
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="text-sm mt-1 line-clamp-2">{description}</p>
      {/* {link && (
        <a
          href={"/projects/" + link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 hover:text-indigo-400 hover:underline mt-2 block text-sm"
        >
          View Project
        </a>
      )} */}
    </div>
  </div>
);


export function PortfolioSection({ className }: { className?: string }) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/projects.json");
        if (!response.ok) throw new Error(`Failed to fetch projects: ${response.status}`);
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setProjects([]);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={`py-20 px-4 md:px-8 lg:px-16 ${className}`} id="portfolio">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-3">Our Portfolio</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base">Take a look at some of the projects we brought to life.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(item => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
