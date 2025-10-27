"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
} from "@/lib/animations";

const courses = [
  {
    title: "SAP SD",
    category: "SAP",
    instructor: "John Smith",
    image: "/SD.png",
    students: 12450,
    course_duration: "6 months",
    level: "Beginner",
    url: "/courses/sales-distribution", 
  },
  {
    title: "Data Analytics",
    category: "Data Analytics",
    instructor: "Lisa Johnson",
    image: "/data-analytics.jpg",
    students: 9800,
    course_duration: "6 months",
    level: "Intermediate",
    url: "/courses/data-analytics",
  },
  {
    title: "Full Stack Web Development",
    category: "Development",
    instructor: "David Wilson",
    image: "/fullstack-development.jpg",
    students: 15000,
    course_duration: "6 months",
    level: "Advanced",
    url: "/courses/fullstack-development",
  },
];

export default function PopularCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
            POPULAR COURSES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore <span className="text-blue-900">Top Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn with the best instructors and industry-focused programs.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.title}
              variants={staggerItem}
              whileHover={cardHover}
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 cursor-pointer"
            >
              <Link href={course.url} className="block">
                {/* Course Image */}
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {course.title}
                    </h3>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-900 transition">
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Static Info Section */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-md bg-blue-900 text-white px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.course_duration}</span>
                    </div>
                    <span>{course.students.toLocaleString()} Students</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button>
            <Link
              href="/courses"
              className="bg-blue-900 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-900 transition"
            >
              View All Courses
            </Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
