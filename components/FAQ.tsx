'use client';

import { motion } from 'framer-motion';
import { ChevronUp, CircleQuestionMark, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is Alter ?',
      answer:
        'Alter is a Framer template designed to help you build professional, enterprise-ready AI agent websites quickly and efficiently.',
    },
    {
      question: 'Is Alter optimized for SEO ?',
      answer:
        'Yes, Alter is built with SEO-friendly practices to help your website rank better on search engines.',
    },
    {
      question: 'Do I need coding skills to use Alter ?',
      answer:
        "No! Alter is built for designers and non-technical users. Framer's intuitive interface allows you to customize without writing code.",
    },
    {
      question: 'Can I customize Alter to fit my brand ?',
      answer:
        'Absolutely. Alter offers flexible customization options, including fonts, colors, layouts, and more, to match your brand identity.',
    },
    {
      question: 'Does Alter include mobile responsiveness ?',
      answer:
        'Yes! Alter is fully responsive and optimized for all devices, ensuring a seamless user experience across desktops, tablets, and mobile phones.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto rounded-xl bg-[#d7dfe469] px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 items-center mx-auto bg-white w-fit p-1 rounded-full mb-8">
        <div className="flex gap-2 items-center border rounded-full w-fit p-1">
          <CircleQuestionMark size={15} />
          <span className="text-sm">Your Queries, Simplified</span>
        </div>
      </div>

      <div className="mx-auto w-fit flex gap-3 flex-col my-8">
        <p className="text-6xl text-center text-gray-900">
          Questions? Answers!
        </p>
        <span className="text-center text-lg text-gray-600">
          Find quick answers to the most common questions about our platform
        </span>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left focus:outline-none group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                {faq.question}
              </h3>
              <div
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronUp className="w-5 h-5 text-gray-500" />
              </div>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="flex w-full justify-center items-center gap-5 mx-auto pt-10">
        <Mail /> Feel free to mail us for any enquiries : alter@support.com
      </div>
    </section>
  );
}
