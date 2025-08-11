import { motion } from 'framer-motion';
import { Book, ChartBar, GitGraph, HardDrive, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Insight() {
 

  return (
    <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto rounded-xl bg-[#d7dfe41e] px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 items-center mx-auto bg-white w-fit p-1 rounded-full">
        <div className="flex gap-2 items-center border rounded-full w-fit p-1">
          <Search size={15} />
          <span className="text-xs sm:text-sm">Live Oversight</span>
        </div>
      </div>
      <div className="mx-auto w-fit flex gap-2 sm:gap-3 flex-col my-6 sm:my-8">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-900">
          Comprehensive Insights
        </p>
        <span className="text-center text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Track every campaign and customer interaction to refine engagement
          strategies
        </span>
      </div>

      <div className="relative w-full flex flex-col lg:flex-row gap-4 sm:gap-5 items-center mx-auto">
        <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full lg:w-1/2">
          <Image
            src="/image/total-spent.svg"
            alt="Stats preview"
            width={600}
            height={600}
            className="w-full h-auto rounded-xl"
            priority
          />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <ChartBar className="text-blue-800 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Real-Time Insights
              </p>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Monitor your campaigns in real time to ensure maximum
              effectiveness and identify areas for improvement
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full lg:w-1/2">
          <Image
            src="/image/balance-check.avif"
            alt="Stats preview"
            width={600}
            height={600}
            className="w-full h-auto rounded-xl"
            priority
          />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <HardDrive className="text-blue-800 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Actionable Data
              </p>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Leverage analytics to enhance workflows, boost engagement, and
              make informed marketing decisions
            </p>
          </div>
        </div>
      </div>

    
    </section>
  );
}
