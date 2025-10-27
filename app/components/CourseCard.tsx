'use client';

import { Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { Course } from '../lib/supabase';
import Image from 'next/image';
export default function CourseCard({ course }: { course: Course }) {
    const defaultImage =
    "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800";

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md border border-gray-100">
      {/* Course Image */}
            <div className="relative w-full h-64">
        <Image
          src={course.image || defaultImage}
          alt={course.title}
          width={1600}
          height={400}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Category and Level */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm bg-blue-900 text-white px-3 py-1 rounded-full">
            {course.category}
          </span>
          <span className="text-gray-500 text-sm">Beginner</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[48px]">
          {course.title}
        </h3>

        {/* Duration + Students */}
        <div className="flex items-center justify-between text-gray-600 text-sm mb-5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            
          </div>
        </div>

        {/* Enroll Button */}
        <Link
                    href={course.url}
                    className="inline-block w-full text-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-medium py-2.5 rounded-full hover:scale-[1.02] transition-all"
                  >
                    Enroll Now
                  </Link>
      </div>
    </div>
  );
}
