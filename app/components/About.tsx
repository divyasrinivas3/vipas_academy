'use client';

import { motion } from 'framer-motion';
import { Users, Headphones, Award,Briefcase, CheckCircle } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

const features = [
  {
    icon: Users,
    title: 'Online & Offline Courses',
    description: 'Interactive classroom & live sessions with expert instructors for personalized learning experience.',
    color: 'from-blue-900 to-blue-900',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our dedicated support team whenever you need help.',
    color: 'from-teal-900 to-green-600',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn recognized certificates upon course completion to boost your career prospects.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Briefcase,
    title: 'Internship & Capstone Project',
    description: 'Gain real-world exposure through hands-on projects.',
    color: 'from-orange-400 to-orange-600',
  },
];

const benefits = [
  'Expert Mentors',
  'Online/Offline Courses',
  'Real-World Training',
  'Certification Preparation',
  'Capstone Project',
  'Career Preparation',
  'Placement Assistance',
  'Internship & Certification'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-gray-900 mb-6 leading-tight">
              Transform Your Best Practice with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800">
                Our Online Course
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We provide a comprehensive learning platform designed to help you achieve your educational and career goals. Our courses are crafted by industry experts and tailored to meet the demands of the modern workforce.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-900 to-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Learn More About Us
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-900 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
