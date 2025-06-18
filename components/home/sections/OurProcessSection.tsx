import Image from 'next/image'
import React from 'react'
import { ToolsUsed } from '../ToolsUsed'
import ProcessListings from '../ProcessListing'
import { ArrowRight } from 'lucide-react'

export const OurProcessSection = () => {
  return (
    <main className="md:px-0 mx-6 md:mx-auto space-y-8">
      <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
        <span className="text-blue-500 flex gap-x-1 items-center">
          <Image
            src={"/icons/squiggle.svg"}
            width={10000}
            height={10000}
            className="w-6"
            alt="image"
          />
          Process
          <Image
            src={"/icons/star.svg"}
            width={10000}
            height={10000}
            className="w-6 mb-8"
            alt="image"
          />
        </span>{" "}
      </h1>

      <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        From idea to App Store in weeks, not months. Here's how we make it happen:
      </p>

      {/* Progress Visualizer */}
      <div className="flex items-center justify-between w-full max-w-md mx-auto mt-8 mb-12">
        {["Plan", "Design", "Build", "Ship"].map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${i < 2 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              {i + 1}
            </div>
            <span className="text-xs mt-2">{step}</span>
          </div>
        ))}
      </div>
<div className="flex flex-col md:flex-row items-start justify-between w-full max-w-4xl mx-auto gap-12 md:gap-16 px-4 md:px-0">
  {/* Process Listings - Slightly narrower on desktop */}
  <div className="w-full md:w-[45%]">
    <ProcessListings />
  </div>

  {/* Vertical divider - Hidden on mobile */}
  <div className="hidden md:block w-px h-auto bg-gray-200 mx-4" />

  {/* Tools Used - Slightly wider on desktop with top padding */}
  <div className="w-full md:w-[45%] pt-8 md:pt-0">
    <ToolsUsed />
  </div>
</div>
    </main>
  )
}