'use client';

import { motion } from 'framer-motion';
import {
  Check,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3,
  Settings,
  Handshake,
  Crown,
  Flame,
} from 'lucide-react';
import { useState } from 'react';

export default function Plans() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 12,
      yearlyPrice: 115,
      description: 'Perfect for individuals and small teams',
      features: [
        'Everything in starter plan',
        'Unlimited AI usage here',
        'Premium support',
        'Customer care on point',
        'Collaboration tools',
      ],
      popular: false,
      icon: Zap,
    },
    {
      name: 'Pro',
      monthlyPrice: 17,
      yearlyPrice: 163,
      description: 'Ideal for growing businesses and teams',
      features: [
        'Everything in Pro plan',
        'Integrations with 3rd-party',
        'Advanced analytics',
        'Team performance tracking',
        'Top grade security',
        'Customizable Solutions',
      ],
      popular: true,
      icon: Star,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 97,
      yearlyPrice: 931,
      description: 'For large organizations with complex needs',
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
      icon: Shield,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto rounded-xl">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Flexible Plans for All
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Choose a plan that fits your goals and scale as you grow
        </p>

        {/* Billing Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                !isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
            </button>
          </div>
          {isYearly && (
            <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
              Save 20%
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
              plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2">
                  <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
                  Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {plan.description}
              </p>

              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm sm:text-base text-gray-600 ml-2">
                  {isYearly ? 'user/year' : 'user/month'}
                </span>
              </div>

              <button
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                }`}
              >
                <Crown className="w-4 h-4" />
                Get Started
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
