'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BadgeQuestionMark } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative hero-bg pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 sm:mt-8 md:mt-10"
        >
          <div className="bg-white w-[70px] sm:w-[80px] md:w-[90px] shadow-xl mx-auto rounded-2xl border-1 p-2">
            <div className="bg-[#0E1C29] w-full h-[60px] sm:h-[65px] md:h-[70px] flex items-center justify-center rounded-md border-1 p-3 sm:p-4 shadow-md">
              <Image
                src={'/logo.png'}
                alt="alter"
                height={40}
                width={40}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 drop-shadow-md"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Automate. Engage. Convert.
            <br />
            <span className="text-primary">Powered by AI.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto px-4">
            Your journey to AI-powered marketing starts here
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <motion.button className="bg-[#774BE5] cursor-pointer text-primary-foreground py-3 px-4 sm:px-6 flex items-center justify-center gap-2 rounded-md font-semibold text-sm sm:text-base hover:bg-[#774BE5]/90 transition-colors duration-200 shadow-lg w-full sm:w-auto">
              Get Started <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            <motion.button className="border bg-[#202B47] cursor-pointer text-white border-border flex items-center justify-center gap-2 p-3 sm:p-4 rounded-md font-semibold text-sm sm:text-base hover:bg-[#202B47]/90 transition-colors duration-200 w-full sm:w-auto">
              <BadgeQuestionMark className="w-4 h-4 sm:w-5 sm:h-5" />
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="mt-8 sm:mt-12 md:mt-16">
          <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4">
            <Image
              src="/image/stats.png"
              alt="Stats preview"
              width={1600}
              height={900}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
