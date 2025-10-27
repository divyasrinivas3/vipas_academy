"use client";

import { useState } from "react";
import {
  Clock,
  BarChart3,
  BookOpen,
  Check,
  Download,
  PhoneCall,
  ChevronDown,
  Play,
  CheckCircle,
  Award,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";

interface Lesson {
  id: string;
  lesson_title: string;
  lesson_order: number;
}

interface CurriculumSection {
  id: string;
  section_title: string;
  section_order: number;
  Modules: Lesson[];
}

interface Inclusion {
  id: string;
  inclusion_text: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  course_overview: string;
  course_duration: string;
  level: string;
  Modules_count: number;
  students_count: number;
  rating: number;
  reviews_count: number;
  category: string;
  language: string;
  image_url: string;
  instructor_name: string;
  instructor_title: string;
  instructor_image: string;
  internship: string;
  image_enroll: string;
}

export default function SAPABAPDetailsArea() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (id: string) => {
    const newSet = new Set(expandedSections);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setExpandedSections(newSet);
  };

  // ABAP Course Info
  const course: Course = {
    id: "4",
    title: "SAP ABAP",
    description:"Learn to code and optimize applications on the SAP HANA platform. SAP ABAP on HANA helps you build efficient, scalable, and intelligent business applications. ",
    course_overview:"Master ABAP on HANA with hands-on coding exercises. Learn CDS views, AMDP, and advanced ABAP techniques to create optimized applications for real business scenarios.",
    course_duration: "3 Months Course",
    level: "Beginner to Advanced",
    Modules_count: 11,
    students_count: 1720,
    rating: 4.9,
    reviews_count: 310,
    internship: "3 Months ",
    category: "SAP",
    language: "English",
    image_url:
      "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Emma Johnson",
    instructor_title: "Senior SAP ABAP Consultant",
    instructor_image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
    image_enroll: "/Enroll-Now.png",
  };

  const inclusions: Inclusion[] = [
    { id: "i1", inclusion_text: "Lifetime access to all Modules and updates" },
    { id: "i2", inclusion_text: "Hands-on coding in SAP GUI & HANA Studio" },
    { id: "i3", inclusion_text: "Certificate of completion" },
    { id: "i4", inclusion_text: "Self-paced, 100% online learning" },
    { id: "i5", inclusion_text: "Access to SAP sandbox environment" },
  ];

  // ABAP Curriculum
  const curriculum: CurriculumSection[] = [
    {
      id: "mod1",
      section_title: "Module 1 — Basics of SAP & ABAP",
      section_order: 1,
      Modules: [
        { id: "l1", lesson_title: "Introduction to SAP — System, Applications, and Products", lesson_order: 1 },
        { id: "l2", lesson_title: "Introduction to ABAP (Advanced Business Application Programming)", lesson_order: 2 },
        { id: "l3", lesson_title: "SAP system architecture & landscape", lesson_order: 3 },
        { id: "l4", lesson_title: "Application server architecture", lesson_order: 4 },
        { id: "l5", lesson_title: "Types of SAP GUI; installation & logon", lesson_order: 5 },
        { id: "l6", lesson_title: "ABAP Workbench and common transaction codes", lesson_order: 6 },
        { id: "l7", lesson_title: "Object Navigator, Packages and Transport Requests", lesson_order: 7 },
        { id: "l8", lesson_title: "Header-item table concepts and project types", lesson_order: 8 },
      ],
    },
    {
      id: "mod2",
      section_title: "Module 2 — ABAP Dictionary & Data Modeling",
      section_order: 2,
      Modules: [
        { id: "l9", lesson_title: "Domains and Data Elements creation", lesson_order: 1 },
        { id: "l10", lesson_title: "Table creation: header & item tables, primary & foreign keys", lesson_order: 2 },
        { id: "l11", lesson_title: "Views: Database, Projection, Maintenance, Help", lesson_order: 3 },
        { id: "l12", lesson_title: "Indexes, buffering & search help", lesson_order: 4 },
        { id: "l13", lesson_title: "Lock objects and Table Maintenance Generator (TMG)", lesson_order: 5 },
      ],
    },
    {
      id: "mod3",
      section_title: "Module 3 — ABAP Programming Fundamentals",
      section_order: 3,
      Modules: [
        { id: "l14", lesson_title: "ABAP Editor introduction & program creation", lesson_order: 1 },
        { id: "l15", lesson_title: "Data types, variables, and control statements", lesson_order: 2 },
        { id: "l16", lesson_title: "Internal tables, work areas & operations", lesson_order: 3 },
        { id: "l17", lesson_title: "Selection screen programming", lesson_order: 4 },
        { id: "l18", lesson_title: "Field symbols and usage in loops", lesson_order: 5 },
      ],
    },
    {
      id: "mod4",
      section_title: "Module 4 — Reporting (Classical, Interactive, ALV)",
      section_order: 4,
      Modules: [
        { id: "l19", lesson_title: "Classical & interactive reports, report events", lesson_order: 1 },
        { id: "l20", lesson_title: "Joins, control break statements, variants", lesson_order: 2 },
        { id: "l21", lesson_title: "ALV list, grid & hierarchical reports", lesson_order: 3 },
        { id: "l22", lesson_title: "Field catalog, sorting, filtering & events", lesson_order: 4 },
        { id: "l23", lesson_title: "ALV using classes (CL_GUI_ALV_GRID, CL_SALV_TABLE)", lesson_order: 5 },
      ],
    },
    {
      id: "mod5",
      section_title: "Module 5 — Debugging & Tools",
      section_order: 5,
      Modules: [
        { id: "l24", lesson_title: "Debugging fundamentals & breakpoints", lesson_order: 1 },
        { id: "l25", lesson_title: "Watchpoints & memory analysis", lesson_order: 2 },
        { id: "l26", lesson_title: "Desktop management & update debugging", lesson_order: 3 },
      ],
    },
    {
      id: "mod6",
      section_title: "Module 6 — Modularization & Reuse",
      section_order: 6,
      Modules: [
        { id: "l27", lesson_title: "Includes, Subroutines & Function Modules", lesson_order: 1 },
        { id: "l28", lesson_title: "Function groups & best practices", lesson_order: 2 },
      ],
    },
    {
      id: "mod7",
      section_title: "Module 7 — File Handling & Archiving",
      section_order: 7,
      Modules: [
        { id: "l29", lesson_title: "File upload/download on presentation & app servers", lesson_order: 1 },
        { id: "l30", lesson_title: "Basics of file archiving", lesson_order: 2 },
      ],
    },
    {
      id: "mod8",
      section_title: "Module 8 — Data Migration & Interfaces",
      section_order: 8,
      Modules: [
        { id: "l31", lesson_title: "BDC, CALL TRANSACTION & SESSION methods", lesson_order: 1 },
        { id: "l32", lesson_title: "LSMW basics and recordings", lesson_order: 2 },
        { id: "l33", lesson_title: "BAPI & RFC integration", lesson_order: 3 },
        { id: "l34", lesson_title: "IDoc architecture, testing & reprocessing", lesson_order: 4 },
      ],
    },
    {
      id: "mod9",
      section_title: "Module 9 — Enhancements & Exits",
      section_order: 9,
      Modules: [
        { id: "l35", lesson_title: "Implicit/Explicit enhancements", lesson_order: 1 },
        { id: "l36", lesson_title: "Customer exits & BAdI implementations", lesson_order: 2 },
        { id: "l37", lesson_title: "User-exits & BTE comparisons", lesson_order: 3 },
      ],
    },
    {
      id: "mod10",
      section_title: "Module 10 — Forms (SmartForms & Adobe Forms)",
      section_order: 10,
      Modules: [
        { id: "l38", lesson_title: "SmartForms creation, windows & texts", lesson_order: 1 },
        { id: "l39", lesson_title: "Calling SmartForms, debugging & PDF output", lesson_order: 2 },
        { id: "l40", lesson_title: "Adobe Forms design & execution", lesson_order: 3 },
      ],
    },
    {
      id: "mod11",
      section_title: "Module 11 — Transport Organizer & Version Management",
      section_order: 11,
      Modules: [
        { id: "l41", lesson_title: "Workbench requests & transport statuses", lesson_order: 1 },
        { id: "l42", lesson_title: "Version management & transport of copies", lesson_order: 2 },
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: course.title },
  ];

  return (
    <div className="min-h-screen mt-9 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{course.description}</p>
              <img
                src={course.image_url}
                alt={course.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8 flex gap-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-4 font-semibold text-base ${
                  activeTab === "overview" ? "text-teal-600" : "text-gray-500"
                }`}
              >
                Course Info
              </button>
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`pb-4 font-semibold text-base ${
                  activeTab === "curriculum" ? "text-theme-teal" : "text-gray-500"
                }`}
              >
                Curriculum
              </button>
            </div>

            {/* Tabs Content */}
            {activeTab === "overview" ? (
              <div>
                <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
                <p className="text-gray-600 mb-6">{course.course_overview}</p>

                <h4 className="text-xl font-bold mb-4">What You&apos;ll Learn</h4>
                <div className="space-y-2">
                  {[
                    "Write ABAP programs optimized for HANA ",
                    "Develop CDS views, AMDP procedures, and reports ",
                    "Implement advanced data modeling and analytics ",
                    "Apply hands-on exercises simulating real enterprise projects",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-theme-teal mt-1" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold mb-4 mt-8">This Course Includes</h4>
                {inclusions.map((inc) => (
                  <div key={inc.id} className="flex items-center gap-3 mb-2">
                    <Check className="w-5 h-5 text-teal-600" />
                    <span>{inc.inclusion_text}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold mb-6">Course Curriculum</h3>
                {curriculum.map((section) => (
                  <div
                    key={section.id}
                    className="border border-gray-200 rounded-lg mb-4"
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronDown
                          className={`w-5 h-5 text-gray-600 transition-transform ${
                            expandedSections.has(section.id) ? "rotate-180" : ""
                          }`}
                        />
                        <h4 className="font-semibold text-gray-900">
                          {section.section_title}
                        </h4>
                      </div>
                      <span className="text-sm text-gray-500">
                        {section.Modules.length} Modules
                      </span>
                    </button>

                    {expandedSections.has(section.id) && (
                      <div className="divide-y divide-gray-100">
                        {section.Modules.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="p-4 flex items-center gap-3 hover:bg-gray-50"
                          >
                            <Play className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700">
                              {lesson.lesson_title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                <div className="mb-6">
                  <img
                    src={course.image_enroll}
                    alt={course.title}
                    className="w-full h-70 object-cover rounded-lg"
                  />
                  <div className="space-y-3 mb-6 mt-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span>{course.course_duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Award className="w-5 h-5 text-gray-400" />
                      <span>{course.internship} Internship</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <BarChart3 className="w-5 h-5 text-gray-400" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <BookOpen className="w-5 h-5 text-gray-400" />
                      <span>{course.Modules_count} Modules</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-teal-600 hover:bg-blue-900 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <PhoneCall className="w-5 h-5" />
                    Enroll Now
                  </button>
                  <button
                    className="bg-teal-600 hover:text-white hover:bg-blue-900 text-white px-8 w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => setShowModal(true)}
                  >
                    <Download size={20} />
                    Download Syllabus
                  </button>

                  {showModal && (
                    <DownloadSyllabusModal
                      onClose={() => setShowModal(false)}
                      fileName="SAP-ABAP.pdf"
                      displayName="SAP ABAP on HANA Course.pdf"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
