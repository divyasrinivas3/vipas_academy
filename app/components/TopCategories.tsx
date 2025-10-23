"use client";
import { motion } from "framer-motion";
import { Code, Briefcase, BarChart2} from "lucide-react";
import ContactModal from "@/app/components/contactmodal";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
} from "@/lib/animations";

const categories = [
  { name: "Development", icon: Code, courses: 3, color: "from-blue-900 to-blue-900" },
  { name: "SAP", icon: Briefcase, courses: 13, color: "from-teal-900 to-teal-600" },
  { name: "Data Analytics", icon: BarChart2 , courses: 2, color: "from-blue-900 to-blue-600" },
];

export default function TopCategories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
            TOP CATEGORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-900">
              You want to Learn
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most popular course categories and find the perfect
            learning path for your goals.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 "
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={staggerItem}
                whileHover={cardHover}
                className="group relative align-middle bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.courses} Courses Available</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-sm font-bold">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* MODAL BUTTON */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <ContactModal />
        </motion.div>
      </div>
    </section>
  );
}
