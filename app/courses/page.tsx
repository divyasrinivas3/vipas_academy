'use client';

import { useState, useEffect } from 'react';
import { categories as allCategories, courses as allCourses } from '../lib/supabase'
import CategoryFilter from '@/app/components/CategoryFilter';
import CourseCard from '@/app/components/CourseCard';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    filterCourses();
  }, [selectedCategory, searchQuery]);

  const filterCourses = () => {
    let filtered = allCourses;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category_id === selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Navbar />
            </div>
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-900 text-white py-12 max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Explore Our Courses</h2>
          <p className="text-blue-100 text-lg">Discover the perfect course to advance your career</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Course Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Category Filter */}
          <aside className="lg:col-span-1">
            <CategoryFilter
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </aside>

          {/* Course Cards */}
          <main className="lg:col-span-3 max-w-full">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> {filteredCourses.length === 1 ? 'course' : 'courses'}
              </p>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-full">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No courses found matching your criteria</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
       <div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}
