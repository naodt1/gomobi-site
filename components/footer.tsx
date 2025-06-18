import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./socialLink";

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
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 text-gray-700 text-sm md:text-base items-start md:items-end">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <Link href="#services" className="hover:text-black transition">Services</Link>
            <Link href="#about" className="hover:text-black transition">About Us</Link>
            <Link href="#offer" className="hover:text-black transition">Solutions</Link>
            <Link href="#pricing" className="hover:text-black transition">Pricing</Link>
            <Link href="#contact" className="hover:text-black transition">Contact</Link>
            <Link href="/privacy" className="hover:text-black transition">Privacy Policy</Link>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 text-gray-600 text-sm">
          <p>© 2025 GoMobi Studio. All Rights Reserved.</p>

          {/* Social Links (Optional icons in `/public/icons`) */}
          <div className="flex gap-4">
            <SocialLinks/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
