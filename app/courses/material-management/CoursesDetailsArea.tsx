"use client";

import { useState } from "react";
import {
  Clock,
  BarChart3,
  BookOpen,
  Star,
  ShoppingCart,
  CreditCard,
  Share2,
  Check,
  Play,
  ChevronDown,
  Users,
  PhoneCall,
  Download,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";

interface Lesson {
  id: string;
  lesson_title: string;
  lesson_duration?: string;
  lesson_order: number;
  is_preview?: boolean;
}

interface CurriculumSection {
  id: string;
  section_title: string;
  section_order: number;
  lessons: Lesson[];
}

interface Inclusion {
  id: string;
  inclusion_text: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  lessons_count: number;
  students_count: number;
  rating: number;
  reviews_count: number;
  category: string;
  language: string;
  image_url: string;
  instructor_name: string;
  instructor_title: string;
  instructor_image: string;
}

export default function SAPMMDetailsArea() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  // Hardcoded SAP MM course data
  const course: Course = {
    id: "2",
    title: "SAP MM (Material Management)",
    description:
      "Learn SAP MM to efficiently manage procurement, inventory, and material processes, with hands-on practical exercises and real-world scenarios.",
    price: 199,
    duration: "45h 30m",
    level: "Beginner to Advanced",
    lessons_count: 180,
    students_count: 1245,
    rating: 4.7,
    reviews_count: 198,
    category: "SAP",
    language: "English",
    image_url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Jane Doe",
    instructor_title: "SAP MM Consultant",
    instructor_image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const inclusions: Inclusion[] = [
    { id: "i1", inclusion_text: "Lifetime access to all lessons and updates" },
    { id: "i2", inclusion_text: "Downloadable exercises, sample data, and real-world scenarios" },
    { id: "i3", inclusion_text: "Shareable certificate of completion" },
    { id: "i4", inclusion_text: "100% online, self-paced learning with English subtitles" },
    { id: "i5", inclusion_text: "Practical tips, shortcuts, and best practices from SAP MM experts" },
  ];

  // SAP MM Curriculum
  const curriculum: CurriculumSection[] = [
    {
      id: "mod1",
      section_title: "Module 1: SAP Overview",
      section_order: 1,
      lessons: [
        { id: "l1", lesson_title: "Introduction to SAP", lesson_order: 1 },
        { id: "l2", lesson_title: "SAP related products", lesson_order: 2 },
        { id: "l3", lesson_title: "How SAP Helps in Business", lesson_order: 3 },
        { id: "l4", lesson_title: "Various Modules in SAP", lesson_order: 4 },
        { id: "l5", lesson_title: "Enterprise in the SAP R/3 System", lesson_order: 5 },
        { id: "l6", lesson_title: "Landscape SAP MM Introduction", lesson_order: 6 },
      ],
    },
    {
      id: "mod2",
      section_title: "Module 2: Basic Concepts of SAP MM",
      section_order: 2,
      lessons: [
        { id: "l7", lesson_title: "MM Enterprise Structure (Plant, Storage Location, Purchase Org, Purchase Groups)", lesson_order: 1 },
        { id: "l8", lesson_title: "Basics of MM", lesson_order: 2 },
        { id: "l9", lesson_title: "FI Enterprise Structure", lesson_order: 3 },
        { id: "l10", lesson_title: "Basics of FI SD", lesson_order: 4 },
        { id: "l11", lesson_title: "WM Enterprise Structure", lesson_order: 5 },
        { id: "l12", lesson_title: "Basics of WM", lesson_order: 6 },
      ],
    },
    {
      id: "mod3",
      section_title: "Module 3: Master Data",
      section_order: 3,
      lessons: [
        { id: "l13", lesson_title: "Material Master Record", lesson_order: 1 },
        { id: "l14", lesson_title: "Vendor Master Record", lesson_order: 2 },
        { id: "l15", lesson_title: "Purchase Info Record", lesson_order: 3 },
        { id: "l16", lesson_title: "Source list Record", lesson_order: 4 },
        { id: "l17", lesson_title: "Quota Arrangement Record", lesson_order: 5 },
        { id: "l18", lesson_title: "Batch Management", lesson_order: 6 },
        { id: "l19", lesson_title: "Condition master record", lesson_order: 7 },
        { id: "l20", lesson_title: "Service master", lesson_order: 8 },
      ],
    },
    {
      id: "mod4",
      section_title: "Module 4: Procurement Process",
      section_order: 4,
      lessons: [
        { id: "l21", lesson_title: "Purchase requisition", lesson_order: 1 },
        { id: "l22", lesson_title: "Creation of Request for quotation", lesson_order: 2 },
        { id: "l23", lesson_title: "Quotation maintenance", lesson_order: 3 },
        { id: "l24", lesson_title: "Price Comparison", lesson_order: 4 },
        { id: "l25", lesson_title: "Purchase order for stock", lesson_order: 5 },
        { id: "l26", lesson_title: "Purchase order for consumable materials", lesson_order: 6 },
        { id: "l27", lesson_title: "Purchase order for external services", lesson_order: 7 },
        { id: "l28", lesson_title: "Purchase order for asset PO", lesson_order: 8 },
        { id: "l29", lesson_title: "Purchase order project PO", lesson_order: 9 },
        { id: "l30", lesson_title: "Make to order PO process", lesson_order: 10 },
        { id: "l31", lesson_title: "Procurement of free goods", lesson_order: 11 },
        { id: "l32", lesson_title: "Return PO", lesson_order: 12 },
        { id: "l33", lesson_title: "Document Types", lesson_order: 13 },
        { id: "l34", lesson_title: "Define Number Ranges for Document Types", lesson_order: 14 },
        { id: "l35", lesson_title: "Define Screen Layout at the Document Level", lesson_order: 15 },
        { id: "l36", lesson_title: "Creation of Automatic PO", lesson_order: 16 },
      ],
    },
    // You can continue adding modules 5-18 similarly...
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
    <div className="min-h-screen mt-10 bg-white">
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
                    
                   
                  </div>
                  
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                 
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-8">
                <img src={course.instructor_image} alt={course.instructor_name} className="w-12 h-12 rounded-full object-cover" />
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
                  className={`pb-4 px-2 font-semibold text-base transition-colors relative ${
                    activeTab === "overview" ? "text-theme-green" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Info
                  {activeTab === "overview" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-green"></div>}
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 px-2 font-semibold text-base transition-colors relative ${
                    activeTab === "curriculum" ? "text-theme-green" : "text-gray-500 hover:text-gray-700"
                  }`}
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
                      "Understand the end-to-end material management process in SAP MM.",
                      "Manage procurement, inventory, and vendor data effectively.",
                      "Gain hands-on experience with purchase orders, goods receipts, and invoice verification.",
                      "Learn valuation, account determination, and stock transfers.",
                      "Understand SAP integration with FI, SD, and WM modules.",
                      "Prepare for SAP MM certification and practical job scenarios.",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-theme-green mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">This Course Includes</h4>
                  <div className="space-y-3">
                    {inclusions.map((inc) => (
                      <div key={inc.id} className="flex items-center gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-theme-green flex-shrink-0" />
                        <span>{inc.inclusion_text}</span>
                      </div>
                    ))}
                  </div>
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
                              className={`w-5 h-5 text-gray-600 transition-transform ${
                                expandedSections.has(section.id) ? "rotate-180" : ""
                              }`}
                            />
                            <h4 className="font-semibold text-gray-900 text-left">{section.section_title}</h4>
                          </div>
                          <span className="text-sm text-gray-500">{section.lessons.length} lessons</span>
                        </button>
                        {expandedSections.has(section.id) && (
                          <div className="divide-y divide-gray-100">
                            {section.lessons.map((lesson) => (
                              <div key={lesson.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                  <Play className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-700">{lesson.lesson_title}</span>
                                </div>
                                {lesson.lesson_duration && <span className="text-sm text-gray-500">{lesson.lesson_duration}</span>}
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
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Price Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">${course.price}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-900">
                      <Clock className="w-5 h-5 text-gray-900" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <BarChart3 className="w-5 h-5 text-gray-900" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <BookOpen className="w-5 h-5 text-gray-900" />
                      <span>{course.lessons_count} Modules</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-teal-600 hover:bg-blue-900 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <PhoneCall className="w-5 h-5" />
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
          fileName="SAP-MM.pdf" // 👈 change this dynamically per course
          displayName="SAP Material Management.pdf" // optional pretty name
        />
      )}
                </div>
              </div>

              {/* Share Course */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Share this course:</h3>
                <button className="w-full border-2 border-gray-300 hover:border-theme-green text-gray-900 hover:text-theme-green font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
