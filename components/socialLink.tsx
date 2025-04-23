"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center p-3 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 transition-transform duration-200 hover:scale-110"
      whileHover={{ boxShadow: "0 2px 8px rgba(255, 255, 255, 0.1)" }}
    >
      <span className="text-xl text-white">{icon}</span>
    </motion.a>
  );
};

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <SocialLink
        href="YOUR_GITHUB_URL" // Replace with your actual GitHub URL
        icon={<FaGithub />}
      />
      <SocialLink
        href="YOUR_LINKEDIN_URL" // Replace with your actual LinkedIn URL
        icon={<FaLinkedinIn />}
      />
      <SocialLink
        href="YOUR_TWITTER_URL" // Replace with your actual Twitter URL
        icon={<FaTwitter />}
      />
      <SocialLink
        href="mailto:YOUR_EMAIL@ADDRESS.com" // Replace with your actual email address
        icon={<MdEmail />}
      />
      {/* Add more social media links as needed */}
    </div>
  );
}