"use client";

import { useState } from "react";
import {
  Clock,
  BarChart3,
  BookOpen,
  Star,
  Check,
  Play,
  ChevronDown,
  Users,
  CheckCircle,
  PhoneCall,
  Download,
} from "lucide-react";
import Breadcrumb from "./breadcrumb";
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
export default function SAPSDDetailsArea() {
const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const pdfFile = "public/SAP-SD.pdf"; // ✅ Replace with your actual syllabus file path



  // Hardcoded Course Data
  const course: Course = {
    id: "1",
    title: "SAP SD (Sales & Distribution)",
    description:
      "Master SAP SD to efficiently manage sales, orders, and distribution processes in real-world business scenarios.",
    price: 199,
    duration: "40h 30m",
    level: "Beginner to Advanced",
    lessons_count: 120,
    students_count: 1534,
    rating: 4.8,
    reviews_count: 256,
    category: "SAP",
    language: "English",
    image_url:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "John Smith",
    instructor_title: "SAP Consultant",
    instructor_image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const inclusions: Inclusion[] = [
    { id: "i1", inclusion_text: "Lifetime access to all lessons and updates" },
    { id: "i2", inclusion_text: "Downloadable exercises, sample data, and real-world scenarios" },
    { id: "i3", inclusion_text: "Shareable certificate of completion to boost your career profile" },
    { id: "i4", inclusion_text: "100% online, self-paced learning with English subtitles" },
    { id: "i5", inclusion_text: "Practical tips, shortcuts, and best practices from SAP experts" },
  ];

  const curriculum: CurriculumSection[] = [
    {
      id: "mod1",
      section_title: "Module 1: Introduction to SAP & SAP SD",
      section_order: 1,
      lessons: [
        { id: "l1", lesson_title: "Overview of SAP ERP", lesson_order: 1 },
        { id: "l2", lesson_title: "SAP ECC vs S/4HANA", lesson_order: 2 },
        { id: "l3", lesson_title: "Introduction to SAP Sales & Distribution (SD)", lesson_order: 3 },
        { id: "l4", lesson_title: "Integration of SD with other modules (MM, FI, PP, WM)", lesson_order: 4 },
        { id: "l5", lesson_title: "Enterprise structure in SAP (client, company code, sales org, distribution channel, division)", lesson_order: 5 },
      ],
    },
    {
      id: "mod2",
      section_title: "Module 2: Enterprise Structure & Master Data",
      section_order: 2,
      lessons: [
        { id: "l6", lesson_title: "Creation of organizational elements (Sales Org, Dist. Channel, Divisions)", lesson_order: 1 },
        { id: "l7", lesson_title: "Assignment of enterprise structure in SD", lesson_order: 2 },
        { id: "l8", lesson_title: "Master Data overview: Customer Master, Material Master, Customer-Material Info Record, Condition Master Data (Pricing)", lesson_order: 3 },
      ],
    },
    {
      id: "mod3",
      section_title: "Module 3: Sales Documents & Transactions",
      section_order: 3,
      lessons: [
        { id: "l9", lesson_title: "Sales Document types (Inquiry, Quotation, Sales Order, Scheduling Agreement, Contracts)", lesson_order: 1 },
        { id: "l10", lesson_title: "Sales document configuration", lesson_order: 2 },
        { id: "l11", lesson_title: "Copy control between sales documents", lesson_order: 3 },
        { id: "l12", lesson_title: "Partner functions in sales process", lesson_order: 4 },
        { id: "l13", lesson_title: "Availability check (ATP) basics", lesson_order: 5 },
      ],
    },
    {
      id: "mod4",
      section_title: "Module 4: Pricing & Conditions",
      section_order: 4,
      lessons: [
        { id: "l14", lesson_title: "Condition technique in pricing", lesson_order: 1 },
        { id: "l15", lesson_title: "Condition tables, access sequence, condition types, pricing procedures", lesson_order: 2 },
        { id: "l16", lesson_title: "Pricing master data setup", lesson_order: 3 },
        { id: "l17", lesson_title: "Discounts, surcharges, freight, taxes", lesson_order: 4 },
        { id: "l18", lesson_title: "Free goods and rebates", lesson_order: 5 },
      ],
    },
    {
      id: "mod5",
      section_title: "Module 5: Shipping & Delivery",
      section_order: 5,
      lessons: [
        { id: "l19", lesson_title: "Overview of shipping process", lesson_order: 1 },
        { id: "l20", lesson_title: "Delivery document creation & configuration", lesson_order: 2 },
        { id: "l21", lesson_title: "Delivery types and item categories", lesson_order: 3 },
        { id: "l22", lesson_title: "Picking, packing, and goods issue", lesson_order: 4 },
        { id: "l23", lesson_title: "Route determination", lesson_order: 5 },
      ],
    },
    {
      id: "mod6",
      section_title: "Module 6: Billing & Invoicing",
      section_order: 6,
      lessons: [
        { id: "l24", lesson_title: "Billing types (Invoice, Credit memo, Debit memo, Proforma Invoice)", lesson_order: 1 },
        { id: "l25", lesson_title: "Billing document configuration", lesson_order: 2 },
        { id: "l26", lesson_title: "Copy control (Delivery → Billing, Order → Billing)", lesson_order: 3 },
        { id: "l27", lesson_title: "Integration with FI (account determination)", lesson_order: 4 },
        { id: "l28", lesson_title: "Revenue account determination", lesson_order: 5 },
      ],
    },
    {
      id: "mod7",
      section_title: "Module 7: Credit & Risk Management",
      section_order: 7,
      lessons: [
        { id: "l29", lesson_title: "Credit management process in SD", lesson_order: 1 },
        { id: "l30", lesson_title: "Types of credit checks", lesson_order: 2 },
        { id: "l31", lesson_title: "Integration with FI-AR (Accounts Receivable)", lesson_order: 3 },
      ],
    },
    {
      id: "mod8",
      section_title: "Module 8: Special Business Processes",
      section_order: 8,
      lessons: [
        { id: "l32", lesson_title: "Third-party sales", lesson_order: 1 },
        { id: "l33", lesson_title: "Intercompany sales", lesson_order: 2 },
        { id: "l34", lesson_title: "Consignment process", lesson_order: 3 },
        { id: "l35", lesson_title: "Return orders and credit memos", lesson_order: 4 },
        { id: "l36", lesson_title: "Make-to-order & drop shipment", lesson_order: 5 },
      ],
    },
    {
      id: "mod9",
      section_title: "Module 9: Output & Reports",
      section_order: 9,
      lessons: [
        { id: "l37", lesson_title: "Output determination (Print, EDI, IDoc, Email)", lesson_order: 1 },
        { id: "l38", lesson_title: "Standard SD reports (Sales info system, billing reports)", lesson_order: 2 },
        { id: "l39", lesson_title: "Analytical tools (SAP Query, LIS)", lesson_order: 3 },
      ],
    },
    {
      id: "mod10",
      section_title: "Module 10: Integration & Advanced Topics",
      section_order: 10,
      lessons: [
        { id: "l40", lesson_title: "SD–MM integration (procurement impact on sales)", lesson_order: 1 },
        { id: "l41", lesson_title: "SD–FI integration (pricing, taxes, billing to FI)", lesson_order: 2 },
        { id: "l42", lesson_title: "SD–PP integration (make-to-order)", lesson_order: 3 },
        { id: "l43", lesson_title: "SAP S/4HANA SD differences from ECC (Fiori apps, simplified data model)", lesson_order: 4 },
      ],
    },
    {
      id: "mod11",
      section_title: "Module 11: Real-time Scenarios & Projects",
      section_order: 11,
      lessons: [
        { id: "l44", lesson_title: "End-to-End Sales Cycle in SAP", lesson_order: 1 },
        { id: "l45", lesson_title: "Order-to-Cash (OTC) business process", lesson_order: 2 },
        { id: "l46", lesson_title: "Configuration and testing in a sandbox system", lesson_order: 3 },
        { id: "l47", lesson_title: "Mini project: Configure an end-to-end business scenario", lesson_order: 4 },
      ],
    },
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
    <div className="min-h-screen mt-9 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 p-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-9">
          {/* Main Content */}
          <div className="lg:col-span-2 p-8">
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
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
               
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{course.students_count.toLocaleString()} students</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-8">
                {/* <img src={course.instructor_image} alt={course.instructor_name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-gray-900 font-semibold">{course.instructor_name}</p>
                  <p className="text-gray-500 text-sm">{course.instructor_title}</p>
                </div> */}
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
                      "Master the complete sales process in SAP SD from quotation to billing.",
                      "Efficiently manage customer master data, pricing procedures, and discounts.",
                      "Process sales orders, deliveries, and billing documents accurately.",
                      "Gain hands-on experience with SAP SD transactions, reports, and system navigation.",
                      "Understand integration points with other SAP modules like MM and FICO.",
                      "Prepare for SAP SD certification and real-world job responsibilities.",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-theme-green mt-1 flex-shrink-0" />
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
                <img src={course.image_url} alt={course.title} width={"400"} height={400} className="w-full h-96 object-cover" />
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <BarChart3 className="w-5 h-5 text-gray-400" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <BookOpen className="w-5 h-5 text-gray-400" />
                      <span>{course.lessons_count} Lessons</span>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
<div className="space-y-3">
  <button className="w-full bg-blue-900 hover:bg-teal-600 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
    <PhoneCall className="w-5 h-5" />
    Enroll Now
  </button>
  {/* ✅ OTP Download Section */}
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
          fileName="SAP-SD.pdf" // 👈 change this dynamically per course
          displayName="SAP Sales & Distribution.pdf" // optional pretty name
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