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
  CheckCircle,
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
  price: number;
  course_duration: string;
  level: string;
  students_count: number;
  rating: number;
  reviews_count: number;
  category: string;
  language: string;
  image_url: string;
  image_enroll: string;
  instructor_name: string;
  instructor_title: string;
  instructor_image: string;
  internship: string;
  Modules_count: number;
}

export default function SAPMMDetailsArea() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  // Hardcoded SAP MM course data
  const course: Course = {
    id: "2",
    title: "SAP MM (Material Management)",
    description:
      "Learn to control materials, inventory, and procurement efficiently. SAP MM empowers you to track stock, manage vendors, and maintain seamless supply chain operations. ",
    course_overview:
      "Master the end-to-end material management lifecycle. Apply practical exercises to manage procurement, inventory, vendor data, and stock transfers in realistic business contexts. ",
    price: 199,
    course_duration: "3 Months",
    level: "Beginner to Advanced",
    internship: "3 Months",
    Modules_count: 18,
    students_count: 1245,
    rating: 4.7,
    reviews_count: 198,
    category: "SAP",
    language: "English",
    image_url:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    image_enroll: "/Enroll-Now.png",
    instructor_name: "Jane Doe",
    instructor_title: "SAP MM Consultant",
    instructor_image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const inclusions: Inclusion[] = [
    { id: "i1", inclusion_text: "Lifetime access to all Modules and updates" },
    {
      id: "i2",
      inclusion_text:
        "Downloadable exercises, sample data, and real-world scenarios",
    },
    { id: "i3", inclusion_text: "Shareable certificate of completion" },
    {
      id: "i4",
      inclusion_text: "100% online, self-paced learning with English subtitles",
    },
    {
      id: "i5",
      inclusion_text:
        "Practical tips, shortcuts, and best practices from SAP MM experts",
    },
  ];

  // SAP MM Curriculum
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

  const curriculum: CurriculumSection[] = [
    {
      id: "mod1",
      section_title: "Module 1: SAP Overview",
      section_order: 1,
      Modules: [
        { id: "l1", lesson_title: "Introduction to SAP", lesson_order: 1 },
        { id: "l2", lesson_title: "SAP related products", lesson_order: 2 },
        {
          id: "l3",
          lesson_title: "How SAP Helps in Business",
          lesson_order: 3,
        },
        { id: "l4", lesson_title: "Various Modules in SAP", lesson_order: 4 },
        {
          id: "l5",
          lesson_title: "Enterprise in the SAP R/3 System",
          lesson_order: 5,
        },
        {
          id: "l6",
          lesson_title: "Landscape SAP MM Introduction",
          lesson_order: 6,
        },
      ],
    },
    {
      id: "mod2",
      section_title: "Module 2: Basic Concepts of SAP MM",
      section_order: 2,
      Modules: [
        {
          id: "l7",
          lesson_title:
            "MM Enterprise Structure (Creation of Plant, Storage Location, Purchase Organization, Purchase Groups)",
          lesson_order: 1,
        },
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
      Modules: [
        { id: "l13", lesson_title: "Material Master Record", lesson_order: 1 },
        { id: "l14", lesson_title: "Vendor Master Record", lesson_order: 2 },
        { id: "l15", lesson_title: "Purchase Info Record", lesson_order: 3 },
        { id: "l16", lesson_title: "Source list Record", lesson_order: 4 },
        {
          id: "l17",
          lesson_title: "Quota Arrangement Record",
          lesson_order: 5,
        },
        { id: "l18", lesson_title: "Batch Management", lesson_order: 6 },
        { id: "l19", lesson_title: "Condition master record", lesson_order: 7 },
        { id: "l20", lesson_title: "Service master", lesson_order: 8 },
      ],
    },
    {
      id: "mod4",
      section_title: "Module 4: Procurement Process",
      section_order: 4,
      Modules: [
        { id: "l21", lesson_title: "Purchase requisition", lesson_order: 1 },
        {
          id: "l22",
          lesson_title: "Creation of Request for quotation",
          lesson_order: 2,
        },
        { id: "l23", lesson_title: "Quotation maintenance", lesson_order: 3 },
        { id: "l24", lesson_title: "Price Comparison", lesson_order: 4 },
        {
          id: "l25",
          lesson_title: "Purchase order for stock",
          lesson_order: 5,
        },
        {
          id: "l26",
          lesson_title: "Purchase order for consumable materials",
          lesson_order: 6,
        },
        {
          id: "l27",
          lesson_title: "Purchase order for external services",
          lesson_order: 7,
        },
        {
          id: "l28",
          lesson_title: "Purchase order for asset PO",
          lesson_order: 8,
        },
        {
          id: "l29",
          lesson_title: "Purchase order project PO",
          lesson_order: 9,
        },
        {
          id: "l30",
          lesson_title: "Make to order PO process",
          lesson_order: 10,
        },
        {
          id: "l31",
          lesson_title: "Procurement of free goods",
          lesson_order: 11,
        },
        { id: "l32", lesson_title: "Return PO", lesson_order: 12 },
        { id: "l33", lesson_title: "Document Types", lesson_order: 13 },
        {
          id: "l34",
          lesson_title: "Define Number Ranges for Document Types",
          lesson_order: 14,
        },
        {
          id: "l35",
          lesson_title: "Define Screen Layout at the Document Level",
          lesson_order: 15,
        },
        {
          id: "l36",
          lesson_title: "Creation of Automatic PO",
          lesson_order: 16,
        },
      ],
    },
    {
      id: "mod5",
      section_title: "Module 5: Valuation and Account Determination",
      section_order: 5,
      Modules: [
        {
          id: "l37",
          lesson_title: "Valuation of material (Standard/Moving AVG Price)",
          lesson_order: 1,
        },
        { id: "l38", lesson_title: "Material Price change", lesson_order: 2 },
        { id: "l39", lesson_title: "Account Determination", lesson_order: 3 },
        { id: "l40", lesson_title: "FIMM Integration", lesson_order: 4 },
        { id: "l41", lesson_title: "Split valuation", lesson_order: 5 },
      ],
    },
    {
      id: "mod6",
      section_title: "Module 6: Inventory Management",
      section_order: 6,
      Modules: [
        { id: "l42", lesson_title: "Material movement type", lesson_order: 1 },
        {
          id: "l43",
          lesson_title: "The material document, accounting document",
          lesson_order: 2,
        },
        {
          id: "l44",
          lesson_title: "Valuated Goods Issue & various scenarios",
          lesson_order: 3,
        },
        {
          id: "l45",
          lesson_title: "Transfer Posting & various scenarios",
          lesson_order: 4,
        },
        { id: "l46", lesson_title: "Reservation", lesson_order: 5 },
        { id: "l47", lesson_title: "Physical Inventory", lesson_order: 6 },
        {
          id: "l48",
          lesson_title: "GR W.R.T Orders/Deliveries/Others",
          lesson_order: 7,
        },
        {
          id: "l49",
          lesson_title: "Different stock types for GR",
          lesson_order: 8,
        },
        { id: "l50", lesson_title: "Reversal of GR", lesson_order: 9 },
        { id: "l51", lesson_title: "Cancellation of GR", lesson_order: 10 },
      ],
    },
    {
      id: "mod7",
      section_title: "Module 7: Invoice Verification",
      section_order: 7,
      Modules: [
        {
          id: "l52",
          lesson_title:
            "How to post vendor invoice (LIV Logistics Invoice Verification)",
          lesson_order: 1,
        },
        {
          id: "l53",
          lesson_title: "Three Way invoice verification",
          lesson_order: 2,
        },
        {
          id: "l54",
          lesson_title: "Two Way invoice verification",
          lesson_order: 3,
        },
        { id: "l55", lesson_title: "Debit/Credit memo", lesson_order: 4 },
        { id: "l56", lesson_title: "Invoice Verification", lesson_order: 5 },
        { id: "l57", lesson_title: "Subsequent Debit", lesson_order: 6 },
        { id: "l58", lesson_title: "Subsequent Credit", lesson_order: 7 },
        {
          id: "l59",
          lesson_title: "Invoice for Planned Costs",
          lesson_order: 8,
        },
        {
          id: "l60",
          lesson_title: "Invoice for Unplanned Costs",
          lesson_order: 9,
        },
        { id: "l61", lesson_title: "Park Invoice", lesson_order: 10 },
        {
          id: "l62",
          lesson_title: "Blocking and Release of Invoices",
          lesson_order: 11,
        },
        { id: "l63", lesson_title: "ERS etc.", lesson_order: 12 },
      ],
    },
    {
      id: "mod8",
      section_title: "Module 8: Outline Agreements",
      section_order: 8,
      Modules: [
        {
          id: "l64",
          lesson_title: "Number Range for Contracts",
          lesson_order: 1,
        },
        { id: "l65", lesson_title: "Value Contract", lesson_order: 2 },
        { id: "l66", lesson_title: "Quantity Contract", lesson_order: 3 },
        {
          id: "l67",
          lesson_title: "Centrally Agreed Contract",
          lesson_order: 4,
        },
        { id: "l68", lesson_title: "Contract Release Order", lesson_order: 5 },
        {
          id: "l69",
          lesson_title: "Contracts with Reference purchase Organization",
          lesson_order: 6,
        },
        {
          id: "l70",
          lesson_title: "Number Range for Scheduling Agreements",
          lesson_order: 7,
        },
        {
          id: "l71",
          lesson_title: "Creation of Scheduling Agreements",
          lesson_order: 8,
        },
        { id: "l72", lesson_title: "Delivery Schedule", lesson_order: 9 },
      ],
    },
    {
      id: "mod9",
      section_title: "Module 9: Special Procurement",
      section_order: 9,
      Modules: [
        { id: "l73", lesson_title: "Consignment Procurement", lesson_order: 1 },
        { id: "l74", lesson_title: "Pipeline Procurement", lesson_order: 2 },
        { id: "l75", lesson_title: "Stock Transport Order", lesson_order: 3 },
        { id: "l76", lesson_title: "Subcontracting", lesson_order: 4 },
        { id: "l77", lesson_title: "RTP", lesson_order: 5 },
        { id: "l78", lesson_title: "Service Procurement", lesson_order: 6 },
        { id: "l79", lesson_title: "Import", lesson_order: 7 },
        { id: "l80", lesson_title: "Third Party processing", lesson_order: 8 },
      ],
    },
    {
      id: "mod10",
      section_title: "Module 10: Stock Transfer",
      section_order: 10,
      Modules: [
        {
          id: "l81",
          lesson_title: "Plant to Plant/Store to Store",
          lesson_order: 1,
        },
        { id: "l82", lesson_title: "One Step Stock transfer", lesson_order: 2 },
        { id: "l83", lesson_title: "Two Step Stock transfer", lesson_order: 3 },
      ],
    },
    {
      id: "mod11",
      section_title: "Module 11: Release Strategy",
      section_order: 11,
      Modules: [
        {
          id: "l84",
          lesson_title: "Concept of Release Procedure",
          lesson_order: 1,
        },
        {
          id: "l85",
          lesson_title: "Types of Release Procedure",
          lesson_order: 2,
        },
        { id: "l86", lesson_title: "Create Characteristics", lesson_order: 3 },
        { id: "l87", lesson_title: "Create Class", lesson_order: 4 },
        {
          id: "l88",
          lesson_title: "Define Release procedure",
          lesson_order: 5,
        },
      ],
    },
    {
      id: "mod12",
      section_title:
        "Module 12: PO Pricing procedure (Domestic, import and STO)",
      section_order: 12,
      Modules: [
        { id: "l89", lesson_title: "Calculation Schema", lesson_order: 1 },
        { id: "l90", lesson_title: "Pricing Procedure", lesson_order: 2 },
        { id: "l91", lesson_title: "Condition Type", lesson_order: 3 },
        { id: "l92", lesson_title: "Access sequence", lesson_order: 4 },
      ],
    },
    {
      id: "mod13",
      section_title: "Module 13: Split Valuation",
      section_order: 13,
      Modules: [
        {
          id: "l93",
          lesson_title: "Concept of Split Valuation",
          lesson_order: 1,
        },
        { id: "l94", lesson_title: "Valuation Types", lesson_order: 2 },
        { id: "l95", lesson_title: "Valuation Categories", lesson_order: 3 },
        {
          id: "l96",
          lesson_title: "Creation of Material w.r.t to Split valuation",
          lesson_order: 4,
        },
      ],
    },
    {
      id: "mod14",
      section_title: "Module 14: MRP",
      section_order: 14,
      Modules: [
        { id: "l97", lesson_title: "Concept of MRP", lesson_order: 1 },
        { id: "l98", lesson_title: "Plant Parameters", lesson_order: 2 },
        { id: "l99", lesson_title: "MRP Group", lesson_order: 3 },
        { id: "l100", lesson_title: "MRP Type", lesson_order: 4 },
        { id: "l101", lesson_title: "MRP Controllers", lesson_order: 5 },
        {
          id: "l102",
          lesson_title: "Creation of Material in MRP Views",
          lesson_order: 6,
        },
        {
          id: "l103",
          lesson_title: "Generating Planned Orders / Purchase Requisitions",
          lesson_order: 7,
        },
      ],
    },
    {
      id: "mod15",
      section_title: "Module 15: PO Output Determination",
      section_order: 15,
      Modules: [
        {
          id: "l104",
          lesson_title: "Output types (e.g., NEU)",
          lesson_order: 1,
        },
        {
          id: "l105",
          lesson_title: "Access sequences and condition tables",
          lesson_order: 2,
        },
        { id: "l106", lesson_title: "Condition records", lesson_order: 3 },
      ],
    },
    {
      id: "mod16",
      section_title: "Module 16: Vendor Partner Functions Determination",
      section_order: 16,
      Modules: [
        { id: "l107", lesson_title: "Define partner roles", lesson_order: 1 },
        {
          id: "l108",
          lesson_title: "Assign roles to account groups",
          lesson_order: 2,
        },
        {
          id: "l109",
          lesson_title: "Maintain partner functions in vendor master data",
          lesson_order: 3,
        },
      ],
    },
    {
      id: "mod17",
      section_title: "Module 17: Batch Management",
      section_order: 17,
      Modules: [
        { id: "l110", lesson_title: "Batch Number", lesson_order: 1 },
        { id: "l111", lesson_title: "Batch Class", lesson_order: 2 },
        { id: "l112", lesson_title: "Characteristics", lesson_order: 3 },
        { id: "l113", lesson_title: "Batch Classification", lesson_order: 4 },
        { id: "l114", lesson_title: "Batch Determination", lesson_order: 5 },
      ],
    },
    {
      id: "mod18",
      section_title: "Module 18: Technical Knowledge",
      section_order: 18,
      Modules: [
        { id: "l115", lesson_title: "Custom Reports", lesson_order: 1 },
        { id: "l116", lesson_title: "IDocs", lesson_order: 2 },
        { id: "l117", lesson_title: "Tables", lesson_order: 3 },
        { id: "l118", lesson_title: "Interfaces", lesson_order: 4 },
        { id: "l119", lesson_title: "Enhancements/RICEFW", lesson_order: 5 },
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
    <div className="min-h-screen mt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-theme-teal-light text-theme-teal text-sm font-medium rounded-md">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center"></div>
                </div>
                <div className="flex items-center gap-2 text-gray-600"></div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={course.instructor_image}
                  alt={course.instructor_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-semibold">
                    {course.instructor_name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {course.instructor_title}
                  </p>
                </div>
              </div>

              {/* Course Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img
                  src={course.image_url}
                  alt={course.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-2 font-semibold text-base transition-colors relative ${
                    activeTab === "overview"
                      ? "text-teal-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Info
                  {activeTab === "overview" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-teal"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 px-2 font-semibold text-base transition-colors relative ${
                    activeTab === "curriculum"
                      ? "text-teal-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Curriculum
                  {activeTab === "curriculum" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-teal"></div>
                  )}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "overview" && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Course Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.course_overview}
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    What You&apos;ll Learn
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Handle procurement cycles, purchase orders, and goods receipts ",
                      "Manage vendor master data and stock transfers ",
                      "Apply valuation and account determination methods ",
                      "Integrate MM with SD, FICO, and warehouse modules ",
                      "Gain hands-on experience in real-time inventory scenarios ",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-theme-teal mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    This Course Includes
                  </h4>
                  <div className="space-y-3">
                    {inclusions.map((inc) => (
                      <div
                        key={inc.id}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <Check className="w-5 h-5 text-theme-teal flex-shrink-0" />
                        <span>{inc.inclusion_text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Course Curriculum
                  </h3>
                  <div className="space-y-4">
                    {curriculum.map((section) => (
                      <div
                        key={section.id}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full px-6 py-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <ChevronDown
                              className={`w-5 h-5 text-gray-600 transition-transform ${
                                expandedSections.has(section.id)
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                            <h4 className="font-semibold text-gray-900 text-left">
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
                                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-center gap-4">
                                  <Play className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-700">
                                    {lesson.lesson_title}
                                  </span>
                                </div>
                                {/* {lesson.lesson_duration && <span className="text-sm text-gray-500">{lesson.lesson_duration}</span>} */}
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
                    <img
                      src={course.image_enroll}
                      alt={course.title}
                      width={"400"}
                      height={300}
                      className="w-full h-96 object-cover"
                    />
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-900">
                      <Clock className="w-5 h-5 text-gray-900" />
                      <span>{course.course_duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <BarChart3 className="w-5 h-5 text-gray-900" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <BookOpen className="w-5 h-5 text-gray-900" />
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Share this course:
                </h3>
                <button className="w-full border-2 border-gray-300 hover:border-theme-teal text-gray-900 hover:text-theme-teal font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
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
