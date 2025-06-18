import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  github?: string;
  tags?: string[];
}

const PortfolioItem = ({ imageUrl, title, description, link, github, tags = [] }: Project) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 ease-in-out bg-white dark:bg-gray-800"
  >
    <div className="relative w-full h-96">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3c559a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="absolute bottom-0 p-8 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-sm opacity-90 line-clamp-3 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-[#3c559a]/20 text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[#3c559a] transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[#3c559a] transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export function PortfolioSection({ className }: { className?: string }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>("all");

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
    <section className={`py-24 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 ${className}`} id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-[#3c559a] mb-4">Our Portfolio</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Discover our innovative solutions and creative projects that showcase our expertise and commitment to excellence.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto mb-12 flex justify-center gap-4">
        {["all", "web", "mobile", "design"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${filter === category 
                ? "bg-[#3c559a] text-white shadow-lg shadow-[#3c559a]/20"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-[#3c559a]/10"
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(item => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}