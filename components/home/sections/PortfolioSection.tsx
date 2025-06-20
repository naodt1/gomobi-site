"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Botanik Plant Reminder",
    description: "A mobile app that helps users care for their plants with personalized watering schedules and care reminders. Developed end-to-end by GoMobi.",
    tags: ["Flutter", "Firebase", "API Integration"],
    image: "/images/botanik.png",
    results: [
      "4.9/5 App Store rating",
      "Delivered in 4 weeks",
    ],
    link: "https://play.google.com/store/apps/details?id=com.naodtadele.botanik_app",
    github: "",
    type: "mobile"
  },
  {
    id: 2,
    title: "FixMasters (Coming Soon)",
    description: "On-demand handyman service app with real-time booking and chat. Built by GoMobi to demonstrate complex marketplace functionality.",
    tags: ["Flutter", "Firebase", "Node.js", "Real-time Features"],
    image: "/images/fixmasters.png",
    results: [
      "Full MVP developed in 8 weeks",
      "Includes payment integration",
      "Ready for launch"
    ],
    comingSoon: true,
    type: "mobile"
  },
  {
    id: 3,
    title: "Heelies E-Commerce App",
    description: "Complete mobile shopping experience for footwear brand. GoMobi implemented the full stack from UI to checkout flow.",
    tags: ["React Native", "Node.js", "MySQL", "E-Commerce"],
    image: "/images/heelies-app.jpg",
    results: [
      "4.9/5 in beta testing",
      "Supports 500+ products",
      "Secure payment processing"
    ],
    github: "",
    type: "mobile"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#024293] dark:text-blue-400 mb-4">
            Our MVP Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we transform ideas into market-ready mobile apps in weeks, not months
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="bg-white px-4 py-2 rounded-lg font-medium text-sm">
                      Launching Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    {project.type === "mobile" ? (
                      <Smartphone className="text-[#024293] dark:text-blue-400 h-5 w-5" />
                    ) : (
                      <Globe className="text-[#024293] dark:text-blue-400 h-5 w-5" />
                    )}
                    <span className="text-xs text-gray-500">
                      {project.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    ACHIEVEMENTS:
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#024293] dark:text-blue-400 mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-[#024293]/10 text-[#024293] dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.link ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 text-[#024293] dark:text-blue-400 hover:underline text-sm"
                    >
                      {project.type === "mobile" ? "View App" : "Visit Site"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : project.comingSoon ? (
                    <span className="text-sm text-gray-500">
                      Case study coming soon
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">
                      Private project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#024293] text-white rounded-lg font-medium hover:bg-[#003366] transition-colors text-lg"
          >
            Build Your MVP
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Average delivery time: 3-4 weeks
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;