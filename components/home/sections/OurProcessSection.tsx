import Image from 'next/image'
import React from 'react'
import { ToolsUsed } from '../ToolsUsed'
import ProcessListings from '../ProcessListing'

export const OurProcessSection = () => {
  return (
    <main className="md:px-0 mx-6 md:mx-auto space-y-8">
    <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
      Our{" "}
      <span className="text-blue-500 flex gap-x-1 items-center">
        {" "}
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

    <p
      className="text-center 
    py-4 md:w-1/2 mx-auto 
    text-xl md:text-2xl text-gray-500"
    >
      We follow a straightforward approach to turn your ideas into reality, with clear steps and open communication every step of the way.
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        
        <ProcessListings />
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
        <ToolsUsed />
      </div>
    </div>
  </main>
  )
}
