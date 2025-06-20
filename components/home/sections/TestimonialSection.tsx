"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "toni77_deal",
    content: "Very useful app. Helps me track my plants perfectly.",
    rating: 5
  },
  {
    id: 2,
    name: "Sami A.",
    content: "Absolutely love this app! It's become my daily companion.",
    rating: 5
  },
  {
    id: 3,
    name: "Karim-Singh",
    content: "Best app ever. I truly recommend everyone try it.",
    rating: 5
  },
  {
    id: 4,
    name: "Adrian B.",
    content: "Simple and intuitive. Never forget to water my plants now.",
    rating: 5
  },
  {
    id: 5,
    name: "Ali R.",
    content: "Great product to schedule on Reddit, grow that Karma and an audience", // Assuming there was an unintended quote here
    rating: 5
  },
  {
    id: 6,
    name: "dino_xi_12",
    content: "I highly recommend using this for promoting your products. It is a huge time saver.",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3; // Number of cards to show at once

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + 1) % (testimonials.length - visibleCards + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setStartIndex(prev => (prev + 1) % (testimonials.length - visibleCards + 1));
  };

  const goPrev = () => {
    setStartIndex(prev => 
      (prev - 1 + (testimonials.length - visibleCards + 1)) % 
      (testimonials.length - visibleCards + 1)
    );
  };

  return (
    <section className="py-12 bg-[#024293]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
<p className="text-xl text-gray-300">
  We don&apos;t have many reviews yet, but{" "} {/* Changed don't to don&apos;t */}
  <a href="/reviews" className="text-blue-300 hover:underline">
    here&apos;s what users say about our apps {/* Changed here's to here&apos;s */}
  </a>
  .
</p>
        </div>

        <div className="relative h-64">
          <div className="flex space-x-4 overflow-hidden">
            {testimonials.slice(startIndex, startIndex + visibleCards).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-full md:w-1/3 bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <span className="text-gray-700 font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

// Star icon component (same as before)
const Star = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default TestimonialCarousel;