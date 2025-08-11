'use client';

import { motion } from 'framer-motion';
import { Bot, Users, TrendingUp, Shield, Zap, Clock } from 'lucide-react';

export default function AIFeatures() {
  const aiFeatures = [
    {
      icon: Bot,
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
      icon: TrendingUp,
      title: 'Data Optimization',
      description:
        'Analyze performance with detailed analytics to fine-tune campaigns and boost results',
    },
    {
      icon: Shield,
      title: 'Seamless Collaboration',
      description:
        'Seamlessly integrate with existing tools to enhance team productivity and coordination',
    },
    {
      icon: Zap,
      title: 'Real-Time Insights',
      description:
        'Monitor customer interactions and adapt strategies in real time for optimal engagement',
    },
    {
      icon: Clock,
      title: 'Future-Proof Solutions',
      description:
        'Stay ahead with continuous updates, and built-in adaptability for evolving needs',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            AI-Powered Marketing
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Simplify deployment for unmatched scalability and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-accent rounded-2xl p-8 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Expert Collaboration
              </h3>
              <p className="text-foreground/70">
                Work with industry experts to optimize your marketing strategies
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Seamless Integration
              </h3>
              <p className="text-foreground/70">
                Connect with your existing tools and workflows effortlessly
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Scalable Solutions
              </h3>
              <p className="text-foreground/70">
                Grow your marketing operations without technical limitations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
