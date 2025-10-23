"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Rocket } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <h4 className="text-sky-600 font-semibold text-lg mb-2 relative inline-block">
            Why Choose Us
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-sky-600 translate-y-2"></span>
          </h4>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mt-4">
            Master New Skills <br />
            With Our Engaging <br />
            And Interactive Learning
          </h2>
        </div>

        {/* Curve Line */}
        <svg
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 50 350 C 400 300, 800 100, 1150 200"
            stroke="#2563EB"
            strokeWidth="2.5"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            markerEnd="url(#arrow)"
          />
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#2563EB" />
            </marker>
          </defs>
        </svg>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 z-10 mt-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white w-28 h-28 rounded-full flex items-center justify-center shadow-lg mb-6">
              <GraduationCap size={48} />
            </div>
            <p className="text-gray-600 text-lg">Build Skills</p>
            <h3 className="text-4xl font-bold text-gray-900 mt-2"></h3>
            <p className="text-gray-500 text-sm mt-2">
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center mt-20">
            <div className="bg-yellow-400 text-gray-900 w-28 h-28 rounded-full flex items-center justify-center shadow-lg mb-6">
              <Award size={48} />
            </div>
            <p className="text-gray-600 text-lg">Get Certified</p>
            <h3 className="text-4xl font-bold text-gray-900 mt-2"></h3>
            <p className="text-gray-500 text-sm mt-2">
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center -mt-10">
            <div className="bg-teal-400 text-gray-900 w-28 h-28 rounded-full flex items-center justify-center shadow-lg mb-6">
              <Rocket size={48} />
            </div>
            <p className="text-gray-600 text-lg">Launch Career</p>
            <h3 className="text-4xl font-bold text-gray-900 mt-2"></h3>
            <p className="text-gray-500 text-sm mt-2">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
