import { motion } from 'framer-motion';
import { Book, ChartBar, GitGraph, HardDrive, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Insight() {
  const leftScrollTexts = [
    'Personalized Engagement',
    'Customer Retention',
    'Seamless Integrations',
    'Real-Time Reports',
    'Personalized Engagement',
    'Customer Retention',
    'Seamless Integrations',
    'Real-Time Reports',
  ];

  const rightScrollTexts = [
    'Personalized Engagement',
    'Cost-Effective',
    'Smart Spending',
    'Data-Driven Decisions',
    'Increased Efficiency',
    'Cost-Effective',
    'Smart Spending',
    'Data-Driven Decisions',
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto rounded-xl bg-[#d7dfe41e] px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 items-center mx-auto bg-white w-fit p-1 rounded-full">
        <div className="flex gap-2 items-center border rounded-full w-fit p-1">
          <Search size={15} />
          <span className="text-sm">Live Oversight</span>
        </div>
      </div>
      <div className="mx-auto w-fit flex gap-3 flex-col my-8">
        <p className="text-6xl text-center">Comprehensive Insights</p>
        <span className="text-center text-sm">
          Track every campaign and customer interaction to refine engagement
          strategies
        </span>
      </div>

      <div className="relative w-full flex gap-5 items-center  mx-auto">
        <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-2xl p-6">
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
              <ChartBar className="text-blue-800" />
              <p className="text-2xl">Real-Time Insights</p>
            </div>
            <p>
              Monitor your campaigns in real time to ensure maximum
              effectiveness and identify areas for improvement
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-2xl p-6">
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
              <HardDrive className="text-blue-800" />
              <p className="text-2xl">Actionable Data</p>
            </div>
            <p>
              Leverage analytics to enhance workflows, boost engagement, and
              make informed marketing decisions
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-6">
        <div className="flex flex-col gap-4">
          {/* Top row scrolls left */}
          <div className="logo-marquee">
            <div className="logo-marquee-track left">
              <div className="logo-marquee-group">
                {leftScrollTexts.map((text, index) => (
                  <div
                    key={`top-a-${index}`}
                    className="px-4 bg-gray-100 py-3 rounded-full"
                  >
                    <span className="text-lg font-medium text-gray-700 whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="logo-marquee-group" aria-hidden>
                {leftScrollTexts.map((text, index) => (
                  <div
                    key={`top-b-${index}`}
                    className="px-4 bg-gray-100 py-3 rounded-full"
                  >
                    <span className="text-lg font-medium text-gray-700 whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row scrolls right */}
          <div className="logo-marquee">
            <div className="logo-marquee-track right">
              <div className="logo-marquee-group">
                {rightScrollTexts.map((text, index) => (
                  <div
                    key={`bottom-a-${index}`}
                    className="px-4 bg-gray-100 py-3 rounded-full"
                  >
                    <span className="text-lg font-medium text-gray-700 whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="logo-marquee-group" aria-hidden>
                {rightScrollTexts.map((text, index) => (
                  <div
                    key={`bottom-b-${index}`}
                    className="px-4 bg-gray-100 py-3 rounded-full"
                  >
                    <span className="text-lg font-medium text-gray-700 whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
