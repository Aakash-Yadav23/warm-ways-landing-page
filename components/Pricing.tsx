'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$12',
      period: 'user/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Everything in starter plan',
        'Unlimited AI usage here',
        'Premium support',
        'Customer care on point',
        'Collaboration tools',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$17',
      period: 'user/month',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Pro plan',
        'Integrations with 3rd-party',
        'Advanced analytics',
        'Team performance tracking',
        'Top grade security',
        'Customizable Solutions',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$97',
      period: 'user/month',
      description: 'For large organizations',
      features: [
        'Dedicated account manager',
        'Custom reports & dashboards',
        'Most performance usage',
        'Enterprise-grade security',
        'Customizable Solutions',
        'Seamless Integration',
        'Dedicated account manager',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Flexible Plans for All
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose a plan that fits your goals and scale as you grow
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-background rounded-full p-1 border border-border inline-flex">
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-foreground/70 hover:text-foreground font-medium">
              Yearly
            </button>
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Save 20%
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}

              <div
                className={`bg-background rounded-2xl p-8 border-2 h-full ${
                  plan.popular
                    ? 'border-primary shadow-xl'
                    : 'border-border hover:border-primary/30'
                } transition-all duration-300 hover:shadow-lg`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-foreground/70 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-foreground/70">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-border text-foreground hover:bg-accent'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donation Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 text-lg">
            We donate 2% of your membership to pediatric wellbeing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
