'use client';

import { motion } from 'framer-motion';
import { Zap, BarChart3, Settings, Eye } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Seamless Automation',
      description:
        'Streamline your marketing workflows with intelligent automation that saves time and increases efficiency.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Data Sync',
      description:
        'Keep your data synchronized across all platforms in real-time for accurate insights and decision making.',
    },
    {
      icon: Settings,
      title: 'Customizable Solutions',
      description:
        'Tailor the platform to your specific needs with flexible customization options and integrations.',
    },
    {
      icon: Eye,
      title: 'Live Oversight',
      description:
        'Monitor your campaigns and performance with comprehensive real-time dashboards and analytics.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Insights
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Track every campaign and customer interaction to refine engagement
            strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-accent rounded-2xl p-8 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
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

        {/* Additional Feature Lists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Real-Time Insights
            </h3>
            <p className="text-foreground/70 mb-6">
              Monitor your campaigns in real time to ensure maximum
              effectiveness and identify areas for improvement
            </p>
            <ul className="space-y-3">
              {[
                'Customer Retention',
                'Seamless Integrations',
                'Real-Time Reports',
                'Personalized Engagement',
              ].map((item) => (
                <li key={item} className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Actionable Data
            </h3>
            <p className="text-foreground/70 mb-6">
              Leverage analytics to enhance workflows, boost engagement, and
              make informed marketing decisions
            </p>
            <ul className="space-y-3">
              {[
                'Cost-Effective',
                'Smart Spending',
                'Data-Driven Decisions',
                'Increased Efficiency',
              ].map((item) => (
                <li key={item} className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
