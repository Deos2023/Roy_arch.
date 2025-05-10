'use client'

import React from 'react'
import Image from 'next/image'

const Ourlatest = () => {
  return (
    <section className="w-full px-4 md:px-12 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-serif text-black">
          <span className="font-bold">Our latest</span> and greatest
        </h2>
        <button className="mt-4 md:mt-0 bg-sky-200 text-sm px-4 py-2 text-black">
          check out all projects
        </button>
      </div>

      {/* Project Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-[60vh]">
          <Image
            src="/hero.jpeg"
            alt="Our Projects"
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <div className="bg-green-900 text-white px-3 py-1 text-sm font-bold">wm</div>
            <div className="bg-white text-black px-3 py-1 text-sm shadow-md">for TKH</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[29vh]">
            <Image
              src="/hero.jpeg"
              alt="Side Project 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[29vh]">
            <Image
              src="/hero.jpeg"
              alt="Side Project 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ourlatest
