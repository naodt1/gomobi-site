import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a 
        href="https://twitter.com/gomobi-dev" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#3c559a] transition"
        aria-label="Twitter"
      >
        <BsTwitterX className="w-5 h-5" />
      </a>
      <a 
        href="https://www.linkedin.com/company/gomobi/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#3c559a] transition"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] border-t py-10 px-6 md:px-0">
      <div className="xl:w-4/5 2xl:w-[68%] mx-auto flex flex-col gap-y-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-y-6">
          {/* Logo and Contact */}
          <div className="flex flex-col gap-y-2">
            <Image
              src="/logo/gomobi-trans.png"
              alt="GoMobi Studios"
              width={160}
              height={40}
              className="w-40"
            />
            <p className="text-gray-500 text-lg">info@gomobi.dev</p>
            <div className="mt-2 md:hidden">
              <SocialLinks />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 text-gray-700 text-sm md:text-base items-start md:items-end">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <Link href="#services" className="hover:text-black transition">Services</Link>
            <Link href="#portfolio" className="hover:text-black transition">Portfolio</Link>
            <Link href="#pricing" className="hover:text-black tPransition">Pricing</Link>
            <Link href="#testimonial" className="hover:text-black transition">Reviews</Link>
            <a href="mailto:info@gomobi.dev" className="hover:text-black transition">Contact</a>
            <Link href="/privacy" className="hover:text-black transition">Privacy Policy</Link>
            <Link href="/tos" className="hover:text-black transition">Terms of Service</Link>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 text-gray-600 text-sm">
          <p>© 2025 GoMobi. All Rights Reserved.</p>
          
          {/* Social Links - Hidden on mobile (shown above) */}
          <div className="hidden md:flex">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;