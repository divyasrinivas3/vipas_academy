"use client";

import { useState } from "react";
import { Clock,  BookOpen, Star,  Share2, Check, Play, ChevronDown, Users,Download } from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";


interface Lesson {
  id: string;
  lesson_title: string;
  lesson_duration: string;
  lesson_order: number;
  is_preview: boolean;
}

interface CurriculumSection {
  id: string;
  section_title: string;
  section_order: number;
  lessons: Lesson[];
}

export default function ABAPCourseDetails() {
    const [showModal, setShowModal] = useState(false);

  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const course = {
    title: "SAP ABAP on HANA",
    description: "Learn SAP ABAP on HANA from basics to advanced topics, including programming, ALV, SmartForms, HANA optimizations, and more.",
    price: 499,
    duration: "120 hours",
    level: "Beginner to Advanced",
    lessons_count: 200,
    students_count: 1200,
    rating: 4.8,
    reviews_count: 350,
    category: "SAP",
    language: "English",
    image_url: "/images/sap-abap-course.jpg",
    instructor_name: "John Doe",
    instructor_title: "SAP ABAP Consultant",
    instructor_image: "/images/instructor.jpg",
  };

  const curriculum: CurriculumSection[] = [
    {
      id: "module1",
      section_title: "Module 1 — Basics of SAP & ABAP",
      section_order: 1,
      lessons: [
        { id: "m1l1", lesson_title: "Introduction to SAP — System, Applications and Products", lesson_duration: "30 min", lesson_order: 1, is_preview: true },
        { id: "m1l2", lesson_title: "Introduction to ABAP (Advanced Business Application Programming)", lesson_duration: "45 min", lesson_order: 2, is_preview: false },
        { id: "m1l3", lesson_title: "SAP system architecture & landscape", lesson_duration: "40 min", lesson_order: 3, is_preview: false },
        { id: "m1l4", lesson_title: "Application server architecture", lesson_duration: "30 min", lesson_order: 4, is_preview: false },
        { id: "m1l5", lesson_title: "Types of SAP GUI; installation & logon (SAP Logon Pad)", lesson_duration: "25 min", lesson_order: 5, is_preview: false },
        { id: "m1l6", lesson_title: "SAP GUI features and elements; theme settings", lesson_duration: "25 min", lesson_order: 6, is_preview: false },
        { id: "m1l7", lesson_title: "SAP Easy Access overview", lesson_duration: "20 min", lesson_order: 7, is_preview: false },
        { id: "m1l8", lesson_title: "ABAP Workbench and common transaction codes", lesson_duration: "40 min", lesson_order: 8, is_preview: false },
        { id: "m1l9", lesson_title: "Session management: logon, session details, logoff steps", lesson_duration: "25 min", lesson_order: 9, is_preview: false },
        { id: "m1l10", lesson_title: "F1 / F4 help in SAP", lesson_duration: "15 min", lesson_order: 10, is_preview: false },
        { id: "m1l11", lesson_title: "SAP-specific objects vs custom objects; introduction to RICEF/W", lesson_duration: "30 min", lesson_order: 11, is_preview: false },
        { id: "m1l12", lesson_title: "SAP Object Navigator, Packages and Transport Requests", lesson_duration: "30 min", lesson_order: 12, is_preview: false },
        { id: "m1l13", lesson_title: "Header-item table concepts and types of SAP projects", lesson_duration: "20 min", lesson_order: 13, is_preview: false },
      ],
    },
    {
      id: "module2",
      section_title: "Module 2 — ABAP Dictionary & Data Modeling",
      section_order: 2,
      lessons: [
        { id: "m2l1", lesson_title: "Domains and Data Elements — creation and usage", lesson_duration: "30 min", lesson_order: 1, is_preview: false },
        { id: "m2l2", lesson_title: "Table creation: header and item tables; primary & foreign keys", lesson_duration: "35 min", lesson_order: 2, is_preview: false },
        { id: "m2l3", lesson_title: "Delivery class, data browser / table view options", lesson_duration: "25 min", lesson_order: 3, is_preview: false },
        { id: "m2l4", lesson_title: "Types of SAP database tables and technical settings (data class, size category, DB properties)", lesson_duration: "40 min", lesson_order: 4, is_preview: false },
        { id: "m2l5", lesson_title: "Enhancement category; client (MANDT) field", lesson_duration: "20 min", lesson_order: 5, is_preview: false },
        { id: "m2l6", lesson_title: "Structures, INCLUDE and APPEND", lesson_duration: "25 min", lesson_order: 6, is_preview: false },
        { id: "m2l7", lesson_title: "Views: Database View, Projection View, Maintenance View, Help View", lesson_duration: "30 min", lesson_order: 7, is_preview: false },
        { id: "m2l8", lesson_title: "Indexes; buffering concepts", lesson_duration: "25 min", lesson_order: 8, is_preview: false },
        { id: "m2l9", lesson_title: "Search help and types", lesson_duration: "20 min", lesson_order: 9, is_preview: false },
        { id: "m2l10", lesson_title: "Lock objects: introduction, modes, creation, and use in programs", lesson_duration: "25 min", lesson_order: 10, is_preview: false },
        { id: "m2l11", lesson_title: "Table Maintenance Generator (TMG) and its events", lesson_duration: "25 min", lesson_order: 11, is_preview: false },
        { id: "m2l12", lesson_title: "Text tables and database utility functions", lesson_duration: "20 min", lesson_order: 12, is_preview: false },
      ],
    },
    // Continue adding modules 3 to 18 in the same format...
    // You can break lessons into multiple arrays if needed for readability.
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) newExpanded.delete(sectionId);
    else newExpanded.add(sectionId);
    setExpandedSections(newExpanded);
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: course.title },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-theme-green-light text-theme-green text-sm font-medium rounded-md">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{course.title}</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{course.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <span className="text-gray-900 font-semibold">{course.rating}</span>
                  <span className="text-gray-500">({course.reviews_count} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{course.students_count.toLocaleString()} students</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={course.instructor_image}
                  alt={course.instructor_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-semibold">{course.instructor_name}</p>
                  <p className="text-gray-500 text-sm">{course.instructor_title}</p>
                </div>
              </div>

              {/* Course Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img src={course.image_url} alt={course.title} className="w-full h-96 object-cover" />
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-2 font-semibold text-base transition-colors relative ${activeTab === "overview" ? "text-theme-green" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Course Info
                  {activeTab === "overview" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-green"></div>}
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 px-2 font-semibold text-base transition-colors relative ${activeTab === "curriculum" ? "text-theme-green" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Curriculum
                  {activeTab === "curriculum" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-green"></div>}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "overview" && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">What You&apos;ll Learn</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Master the fundamentals and advanced concepts",
                      "Build real-world projects from scratch",
                      "Learn industry best practices",
                      "Get hands-on experience with modern tools",
                      "Understand core principles and patterns",
                      "Prepare for professional certifications",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-theme-green mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Basic understanding of computers and internet</li>
                    <li>No prior experience required</li>
                    <li>A computer with internet connection</li>
                    <li>Willingness to learn and practice</li>
                  </ul>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                  <div className="space-y-4">
                    {curriculum.map((section) => (
                      <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full px-6 py-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <ChevronDown
                              className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections.has(section.id) ? "rotate-180" : ""}`}
                            />
                            <h4 className="font-semibold text-gray-900 text-left">{section.section_title}</h4>
                          </div>
                          <span className="text-sm text-gray-500">{section.lessons.length} lessons</span>
                        </button>
                        {expandedSections.has(section.id) && (
                          <div className="divide-y divide-gray-100">
                            {section.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-center gap-4">
                                  <Play className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-700">{lesson.lesson_title}</span>
                                  {lesson.is_preview && (
                                    <span className="px-2 py-1 bg-theme-green-light text-theme-green text-xs font-medium rounded">
                                      Preview
                                    </span>
                                  )}
                                </div>
                                <span className="text-sm text-gray-500">{lesson.lesson_duration}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                <span className="text-gray-500 text-sm">{course.duration}</span>
              </div>
              <button className="w-full py-3 px-6 bg-theme-green text-white font-semibold rounded-xl hover:bg-theme-green-dark transition">
                Enroll Now
              </button>
               <button
        className="bg-teal-500 hover:text-white hover:bg-blue-900 text-white px-8 w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
        onClick={() => setShowModal(true)}
      >
        <Download size={20} />
        Download Syllabus
      </button>

      {showModal && (
        <DownloadSyllabusModal
          onClose={() => setShowModal(false)}
          fileName="SAP-ABAP.pdf" // 👈 change this dynamically per course
          displayName="SAP_ABAP_Course.pdf" // optional pretty name
        />
      )}

              <div className="mt-6 space-y-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gray-500" />
                  <span>{course.lessons_count} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span>{course.students_count.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-gray-500">
                <Share2 className="w-5 h-5" />
                <span>Share this course</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
