'use client';

import { motion } from 'framer-motion';
import {
  Book,
  Cloud,
  Zap,
  Users,
  BarChart3,
  GitBranch,
  Eye,
  TrendingUp,
  Shield,
  Handshake,
} from 'lucide-react';
import Image from 'next/image';

export default function AiMarketing() {
  const integrations = [
    'Slack',
    'HubSpot',
    'Mailchimp',
    'Salesforce',
    'Google Analytics',
    'Zapier',
    'Shopify',
    'WordPress',
    'Facebook Ads',
    'Google Ads',
    'LinkedIn',
    'Twitter',
  ];

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
    <section className="py-20 max-w-6xl mx-auto rounded-xl bg-[#d7dfe490] px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 items-center mx-auto bg-white w-fit p-1 rounded-full">
        <div className="flex gap-2 items-center border rounded-full w-fit p-1">
          <Cloud size={15} />
          <span className="text-sm">Effortless Deployment</span>
        </div>
      </div>
      <div className="mx-auto w-fit flex gap-3 flex-col my-8">
        <p className="text-6xl text-center">AI-Powered Marketing</p>
        <span className="text-center text-sm">
          Simplify deployment for unmatched scalability and impact
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <feature.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-10">
        <div className="h-px bg-black opacity-20 flex-1 border-t border-dashed border-border" />
        <p className="text-sm flex gap-2 items-center text-foreground/70 whitespace-nowrap">
          <Handshake /> Expert Collaboration
        </p>
        <div className="h-px bg-black opacity-20 flex-1 border-t border-dashed border-border" />
        <p className="text-sm flex gap-2 items-center text-foreground/70 whitespace-nowrap">
          <Handshake /> Expert Collaboration
        </p>
        <div className="h-px bg-black opacity-20 flex-1 border-t border-dashed border-border" />
        <p className="text-sm flex gap-2 items-center text-foreground/70 whitespace-nowrap">
          <Handshake /> Expert Collaboration
        </p>
        <div className="h-px flex-1 border-t border-dashed border-border" />
      </div>
    </section>
  );
}
