'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BadgeQuestionMark } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative hero-bg pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <div className="bg-white w-[90px] shadow-xl  mx-auto rounded-2xl border-1 p-2">
            <div className="bg-[#0E1C29] w-full h-[70px] flex items-center justify-center rounded-md border-1 p-4 shadow-md">
              <Image
                src={'/logo.png'}
                alt="alter"
                height={50}
                width={50}
                className="drop-shadow-md"
              />
            </div>
          </div>

          <h1 className="text-4xl mt-3 sm:text-5xl lg:text-7xl font- tracking-tight text-foreground mb-6 leading-tight">
            Automate. Engage. Convert.
            <br />
            <span className="t">Powered by AI.</span>
          </h1>

          <p className="text-sm sm:text- text-foreground/70 mb-8 max-w-3xl mx-auto">
            Your journey to AI-powered marketing starts here
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button className="bg-[#774BE5] cursor-pointer text-primary-foreground py-3 px-4 flex items-center gap-2  rounded-md font-semibold text-sm hover:bg-[#774BE5]/90 transition-colors duration-200 shadow-lg">
              Get Started <ArrowRight />
            </motion.button>

            <motion.button className="border bg-[#202B47] cursor-pointer text-white border-border flex items-center gap-2 p-4 rounded-md font-semibold text-sm  duration-200">
              <BadgeQuestionMark />
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div>
          <div className="relative w-full max-w-7xl mx-auto">
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
