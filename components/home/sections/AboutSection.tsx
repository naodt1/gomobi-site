import React from "react";
import Image from 'next/image'; // Assuming you are using Next.js for Image optimization

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between lg:flex-row-reverse">
        {/* Text Content */}
        <div className="mb-12 lg:mb-0 lg:w-1/2 lg:pl-10">
          {/* Section Header */}
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-4xl  text-[#1d3c8f] mb-4">About <span className="font-bold">GoMobi</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
              At GoMobi, we’re driven by a single mission: to turn your mobile app ideas into reality. As a mobile app development agency, we focus on creating innovative, reliable, and user-friendly applications. We believe in the power of technology to solve real-world problems and enhance businesses, which is why we are dedicated to delivering solutions that have a lasting impact.
            </p>
          </div>

          {/* About Us Content */}
          <div className="text-center lg:text-left">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
              Our agency is built on the foundation of trust, collaboration, and dedication. As a passionate team of one, we prioritize building strong, meaningful relationships with our clients, ensuring we understand their vision and goals. We believe in quality over quantity, which is why we dedicate our time and expertise to each project, ensuring every app we build is a step towards success for our clients.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <Image
            src="/images/people-working.jpg"
            alt="People Working"
            width={500} // Adjust as needed
            height={400} // Adjust as needed
            className="rounded-lg shadow-md"
            priority // Optional: Use if this image is important for initial render
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;