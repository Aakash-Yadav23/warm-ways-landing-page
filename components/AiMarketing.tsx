'use client';

import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Users,
  BarChart3,
  GitBranch,
  Eye,
  TrendingUp,
  Handshake,
} from 'lucide-react';

export default function AiMarketing() {
  const features = [
    {
      icon: Zap,
      title: 'Campaign Automation',
      description:
        'Create and execute campaigns with ease using AI-driven automation for maximum efficiency',
    },
    {
      icon: Users,
      title: 'Personalized Outreach',
      description:
        'Deliver tailored messages to each customer for more impactful and engaging communication',
    },
    {
      icon: BarChart3,
      title: 'Data Optimization',
      description:
        'Analyze performance with detailed analytics to fine-tune campaigns and boost results',
    },
    {
      icon: GitBranch,
      title: 'Seamless Collaboration',
      description:
        'Seamlessly integrate with existing tools to enhance team productivity and coordination',
    },
    {
      icon: Eye,
      title: 'Real-Time Insights',
      description:
        'Monitor customer interactions and adapt strategies in real time for optimal engagement',
    },
    {
      icon: TrendingUp,
      title: 'Future-Proof Solutions',
      description:
        'Stay ahead with continuous updates, and built-in adaptability for evolving needs',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 w-full max-w-7xl mx-auto rounded-xl bg-[#d7dfe490] ">
      <div className="flex gap-2 items-center mx-auto bg-white w-fit p-1 rounded-full">
        <div className="flex gap-2 items-center border rounded-full w-fit p-1">
          <Cloud size={15} />
          <span className="text-xs sm:text-sm">Effortless Deployment</span>
        </div>
      </div>
      <div className="mx-auto w-fit flex gap-2 sm:gap-3 flex-col my-6 sm:my-8">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-900">
          AI-Powered Marketing
        </p>
        <span className="text-center text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Simplify deployment for unmatched scalability and impact
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-3 sm:mb-4">
              <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10">
        <div className="h-px bg-black opacity-20 flex-1 border-t border-dashed border-border" />
        <p className="text-xs sm:text-sm flex gap-2 items-center text-foreground/70 whitespace-nowrap">
          <Handshake className="w-4 h-4" /> Expert Collaboration
        </p>
        <div className="h-px bg-black opacity-20 flex-1 border-t border-dashed border-border" />
        <p className="text-xs sm:text-sm flex gap-2 items-center text-foreground/70 whitespace-nowrap">
          <Handshake className="w-4 h-4" /> Expert Collaboration
        </p>
        <div className="h-px bg-black opacity-20 flex-1 border-t border-dashed border-border" />
        <p className="text-xs sm:text-sm flex gap-2 items-center text-foreground/70 whitespace-nowrap">
          <Handshake className="w-4 h-4" /> Expert Collaboration
        </p>
        <div className="h-px flex-1 border-t border-dashed border-border" />
      </div>
    </section>
  );
}
