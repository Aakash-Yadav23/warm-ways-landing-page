'use client';

import { motion } from 'framer-motion';
import { Book, PanelsTopLeft, Users } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'An absolute standout! This platform delivers robust tools, effortless connectivity, and usability',
      author: 'Brendan',
      role: 'owner of plantio',
      avatar: '/image/avatars/brendan.jpg',
    },
    {
      quote:
        'A remarkable solution! It provides top-tier features, intuitive interfaces, and reliability',
      author: 'Wilson',
      role: 'owner of saan',
      avatar: '/image/avatars/wilson.jpg',
    },
    {
      quote:
        'A genuine innovation! Experience advanced tools, smooth workflows, and high utility',
      author: 'mayak',
      role: 'owner of deconec',
      avatar: '/image/avatars/mayak.jpg',
    },
    {
      quote:
        'A revolutionary platform! Packed with cutting-edge tools, integration ease, and functionality',
      author: 'jacychan',
      role: 'owner of canacio',
      avatar: '/image/avatars/jacychan.jpg',
    },
    {
      quote:
        'A real breakthrough! Unlock next-gen features, seamless compatibility, and efficiency',
      author: 'jamesli',
      role: 'owner of gito',
      avatar: '/image/avatars/jamesli.jpg',
    },
    {
      quote:
        'A standout choice! Combining advanced features, smooth syncing, and practicality',
      author: 'janney',
      role: 'owner of ioptp',
      avatar: '/image/avatars/janney.jpg',
    },
  ];

  const trustedAvatars = [
    '/image/avatars/brendan.jpg',
    '/image/avatars/wilson.jpg',
    '/image/avatars/mayak.jpg',
    '/image/avatars/jacychan.jpg',
    // '/image/avatars/jamesli.jpg',
    // '/image/avatars/janney.jpg',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses who've transformed their workflows with our
            solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <p className="text-gray-700 text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                  <div className="w-full h-full  flex items-center justify-center text-white font-semibold text-sm">
                    <Image
                      src={testimonial.avatar}
                      width={30}
                      height={30}
                      className="w-full h-full rounded-full object-cover"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex -space-x-2">
              {trustedAvatars.map((avatar, index) => (
                <div
                  key={index}
                  className="w-[30px] h-[30px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold"
                >
                  <Image
                    src={avatar}
                    width={30}
                    height={30}
                    className="w-full h-full rounded-full object-cover"
                    alt="avatar"
                  />
                </div>
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              Trusted by 5,000+ innovators worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
