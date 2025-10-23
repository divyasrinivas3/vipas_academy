'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, cardHover } from '@/lib/animations';

const bestSellingCourses = [
  {
    id: 1,
    title: 'The Complete JavaScript Course 2024',
    category: 'Development',
    instructor: 'Robert Brown',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    students: 45230,
    duration: '52 hours',
    price: 99.99,
    bestseller: true,
  },
  {
    id: 2,
    title: 'Advanced React & Redux Masterclass',
    category: 'Development',
    instructor: 'Jennifer Lee',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    students: 38765,
    duration: '48 hours',
    price: 94.99,
    bestseller: true,
  },
  {
    id: 3,
    title: 'Python for Data Science & AI',
    category: 'Technology',
    instructor: 'Dr. James Wilson',
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    students: 52100,
    duration: '64 hours',
    price: 119.99,
    bestseller: true,
  },
];

export default function BestSellingCourses() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
            BEST SELLING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Most Popular
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800">
              Courses
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with these top-rated courses.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {bestSellingCourses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={staggerItem}
              whileHover={cardHover}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Bestseller
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">By {course.instructor}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-900">
                    ${course.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join over 450,000 students worldwide and access our premium courses today.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Browse All Courses
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
