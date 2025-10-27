'use client';

import { motion } from 'framer-motion';
import { Play, Users, BookOpen, Award } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function Hero() {
    const router = useRouter();

  return (
    <section id="home" className="relative mb-10 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 mt-9 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-2 bg-blue-900 text-white rounded-2xl text-sm font-semibold mb-4">
                WELCOME TO VIPAS ACADEMY
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Shape 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-900">
                What&apos;s Next
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-800 mb-8 leading-relaxed"
            >
              At Vipas Academy, we don&apos;t just teach technology - we transform learners into innovators. 
            </motion.p>
             <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-800 mb-8 leading-relaxed text-justify"
            >
              Our training is powered by expert mentors, hands-on projects, and career-driven learning paths. 
              Whether you&apos;re beginning your journey in IT or upgrading your skills for the next leap, 
              we help you Shape What&apos;s Next in the world of technology. 
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
      onClick={() => router.push("/courses")}
      className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
    >
      Explore Courses
      <Play className="w-5 h-5" />
    </button>
              <button
  onClick={() => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold border-2 border-blue-900 hover:border-blue-900 hover:text-white transition-all duration-300"
>
  Enroll Now
</button>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
            
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-900 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                  width={800}
                  height={700}
                  alt="Online learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">450K+</p>
                  <p className="text-sm text-gray-600">Happy Students</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
