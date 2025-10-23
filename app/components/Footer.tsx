'use client';

import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: 'about' },
    { name: 'Courses', href: 'courses' },
    { name: 'Categories', href: 'topcategories' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ];

  const courses = [
    { name: 'Web Development', href: 'courses/fullstack-development' },
    { name: 'Data Science', href: 'courses/data-analytics' },
    { name: 'Sales and Distribution', href: 'courses/sales-distribution' },
  
  ];

  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/vipasacademy?s=21', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/vipas_academy?igsh=cTlyeDFkYXBmNWpq', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vipas-academy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-900 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Vipas Academy</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering learners worldwide with high-quality online education. Transform your career and achieve your goals with our expert-led courses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <span>info@vipasacademy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <span>+91 99666 52099</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center ">
                  <MapPin className="w-10 h-5 text-blue-500" />
                </div>
                <span className='flex items-start'>Door no. 19-8-112/d, Second floor, kora towers, Hathiramji colony, near annamiah circle, air by pass road, tirupati, 517501</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="text-white text-lg font-bold mb-4">Top Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="hover:text-blue-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="text-white text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-blue-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Vipas Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
