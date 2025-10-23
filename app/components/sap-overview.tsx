'use client';

import { motion } from 'framer-motion';
import { Play, Users, Activity,Layers  } from 'lucide-react';
import { fadeInUp, fadeInLeft } from '@/lib/animations';
import Image from "next/image";

export default function SapOverview() {
  return (
    <section
      id="home"
      className="relative mb-10 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20"
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 mt-9 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-2 bg-blue-900 text-white rounded-full text-xl font-semibold mb-8">
                SAP Training Overview
              </span>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-900 mb-8 font-sans leading-relaxed"
            >
              At Vipas Academy, our SAP Training Program is designed to help students and professionals gain in-depth knowledge of real-time business processes using SAP ERP.
              We provide hands-on training across key modules like FICO, MM, SD, HCM, and ABAP, guided by certified SAP consultants.
              Through live projects and case studies, learners understand how SAP drives digital transformation in global enterprises.
              Our goal is to make you job-ready, confident in using SAP tools, and prepared for both implementation and support roles.
              Join us to build a rewarding career in the world of SAP consulting and enterprise solutions.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Activity className="w-6 h-6 text-blue-900 " />
                </div>
                <p className="text-sm text-gray-900 mt-5">Hands-On SAP Projects</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Layers className="w-6 h-6 text-teal-600" />
                </div>
                <p className="text-sm text-gray-900 mt-5">Industry-Oriented Learning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-800" />
                </div>
                <p className="text-sm text-gray-900 mt-5">Career Guidance & Mentorship</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center w-full"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/SAP-course.jpg"
                alt="Students learning SAP"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto max-w-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
