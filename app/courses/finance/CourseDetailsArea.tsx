"use client";

import { useState } from "react";
import {
  Clock,
  BarChart3,
  BookOpen,
  Star,
  Download,
  Share2,
  Check,
  Play,
  ChevronDown,
  Users,
  PhoneCall,
  CheckCircle,
  Award,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";
import { useRouter } from "next/navigation";

interface Lesson {
  id: string;
  lesson_title: string;
  lesson_duration?: string;
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

export default function SAPFICODetailsArea() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  // SAP FICO Course Info
  const course: Course = {
    id: "3",
    title: "SAP FICO (Financial Accounting & Controlling)",
    description:
      "Take charge of your organization’s financial data with SAP FICO. Learn ledger management, asset accounting, cost centers, and reporting to make informed financial decisions. ",
    course_overview:
      "Master SAP FICO to perform financial accounting, controlling, and reporting tasks. Learn to manage ledgers, cost centers, and assets while linking FI and CO processes across business functions.",
    course_duration: "3 Months",
    level: "Beginner to Advanced",
    Modules_count: 19,
    students_count: 1890,
    rating: 4.8,
    reviews_count: 254,
    image_enroll: "/Enroll-Now.png",
    category: "SAP",
    internship: "3 Months",
    language: "English",
    image_url:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "John Smith",
    instructor_title: "Senior SAP FICO Consultant",
    instructor_image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const inclusions: Inclusion[] = [
    { id: "i1", inclusion_text: "Lifetime access to all Modules and updates" },
    { id: "i2", inclusion_text: "Hands-on exercises with real business data" },
    { id: "i3", inclusion_text: "Certificate of completion" },
    { id: "i4", inclusion_text: "Self-paced, 100% online learning" },
    { id: "i5", inclusion_text: "Access to SAP sandbox environment" },
  ];

  // SAP FICO Curriculum (Modules)
  const curriculum: CurriculumSection[] = [
    {
      id: "mod1",
      section_title: "Module 1: Introduction to SAP & FICO",
      section_order: 1,
      Modules: [
        {
          id: "l1",
          lesson_title: "Overview of SAP ERP & SAP S/4HANA",
          lesson_order: 1,
        },
        {
          id: "l2",
          lesson_title: "Introduction to SAP FICO (FI + CO integration)",
          lesson_order: 2,
        },
        {
          id: "l3",
          lesson_title: "Organizational structure in SAP",
          lesson_order: 3,
        },
        {
          id: "l4",
          lesson_title: "Navigation in SAP GUI / Fiori",
          lesson_order: 4,
        },
      ],
    },
    {
      id: "mod2",
      section_title:
        "Module 2: SAP FI Enterprise Structure and Global Settings",
      section_order: 2,
      Modules: [
        {
          id: "l5",
          lesson_title: "Creation and assignment of company and company code",
          lesson_order: 1,
        },
        {
          id: "l6",
          lesson_title: "Creation of business area and fiscal year variant",
          lesson_order: 2,
        },
        {
          id: "l7",
          lesson_title: "Defining open/close posting periods",
          lesson_order: 3,
        },
        {
          id: "l8",
          lesson_title: "Taxes, tolerance groups, and chart of accounts",
          lesson_order: 4,
        },
      ],
    },
    {
      id: "mod3",
      section_title: "Module 3: Financial Accounting (FI) – General Ledger",
      section_order: 3,
      Modules: [
        {
          id: "l9",
          lesson_title: "GL master data & account groups",
          lesson_order: 1,
        },
        {
          id: "l10",
          lesson_title: "Posting in General Ledger",
          lesson_order: 2,
        },
        {
          id: "l11",
          lesson_title: "Document types, recurring entries, and reversals",
          lesson_order: 3,
        },
        {
          id: "l12",
          lesson_title: "Trial balance & financial statements",
          lesson_order: 4,
        },
      ],
    },
    {
      id: "mod4",
      section_title: "Module 4: SAP FI Accounts Payable",
      section_order: 4,
      Modules: [
        {
          id: "l13",
          lesson_title: "Vendor master data creation",
          lesson_order: 1,
        },
        {
          id: "l14",
          lesson_title:
            "Posting vendor transactions (invoices, payments, credit memos)",
          lesson_order: 2,
        },
        {
          id: "l15",
          lesson_title: "Advance payments & automatic payment program (APP)",
          lesson_order: 3,
        },
        {
          id: "l16",
          lesson_title: "Vendor reports & correspondence",
          lesson_order: 4,
        },
      ],
    },
    {
      id: "mod5",
      section_title: "Module 5: SAP FI Accounts Receivable",
      section_order: 5,
      Modules: [
        {
          id: "l17",
          lesson_title: "Customer master creation",
          lesson_order: 1,
        },
        {
          id: "l18",
          lesson_title: "Customer transactions & Dunning configuration",
          lesson_order: 2,
        },
        {
          id: "l19",
          lesson_title: "Credit management & customer aging reports",
          lesson_order: 3,
        },
      ],
    },
    {
      id: "mod6",
      section_title: "Module 6: SAP FI Asset Accounting",
      section_order: 6,
      Modules: [
        {
          id: "l20",
          lesson_title: "Chart of depreciation and asset classes",
          lesson_order: 1,
        },
        {
          id: "l21",
          lesson_title: "Asset acquisition, transfer, and retirement",
          lesson_order: 2,
        },
        {
          id: "l22",
          lesson_title: "Depreciation run and reporting",
          lesson_order: 3,
        },
      ],
    },
    {
      id: "mod7",
      section_title: "Module 7: SAP FI Reports",
      section_order: 7,
      Modules: [
        {
          id: "l23",
          lesson_title: "Financial Statement Versions (FSV)",
          lesson_order: 1,
        },
        {
          id: "l24",
          lesson_title: "Accounts payable & receivable reports",
          lesson_order: 2,
        },
      ],
    },
    {
      id: "mod8",
      section_title: "Module 8: Bank Accounting",
      section_order: 8,
      Modules: [
        {
          id: "l25",
          lesson_title: "House bank & bank accounts",
          lesson_order: 1,
        },
        {
          id: "l26",
          lesson_title: "Electronic Bank Statement (EBS)",
          lesson_order: 2,
        },
        {
          id: "l27",
          lesson_title: "Cash journal configuration",
          lesson_order: 3,
        },
      ],
    },
    {
      id: "mod9",
      section_title: "Module 9: SAP CO – Basic Settings & Cost Elements",
      section_order: 9,
      Modules: [
        {
          id: "l28",
          lesson_title: "Introduction to Controlling (CO)",
          lesson_order: 1,
        },
        {
          id: "l29",
          lesson_title: "Defining Controlling Area & cost elements",
          lesson_order: 2,
        },
      ],
    },
    {
      id: "mod10",
      section_title: "Module 10: SAP CO Cost Center Accounting",
      section_order: 10,
      Modules: [
        {
          id: "l30",
          lesson_title: "Cost centers creation & planning",
          lesson_order: 1,
        },
        {
          id: "l31",
          lesson_title: "Distribution & assessment cycles",
          lesson_order: 2,
        },
      ],
    },
    {
      id: "mod11",
      section_title: "Module 11: SAP CO Internal Orders",
      section_order: 11,
      Modules: [
        {
          id: "l32",
          lesson_title: "Internal order creation, budgeting & settlement",
          lesson_order: 1,
        },
      ],
    },
    {
      id: "mod12",
      section_title: "Module 12: SAP CO Profit Center Accounting",
      section_order: 12,
      Modules: [
        {
          id: "l33",
          lesson_title: "Profit centers creation, assignment & reporting",
          lesson_order: 1,
        },
      ],
    },
    {
      id: "mod13",
      section_title: "Module 13: SAP CO-PA Reporting",
      section_order: 13,
      Modules: [
        {
          id: "l34",
          lesson_title: "Profitability analysis (CO-PA) configuration",
          lesson_order: 1,
        },
      ],
    },
    {
      id: "mod14",
      section_title: "Module 14: SAP FI Integration with MM",
      section_order: 14,
      Modules: [
        {
          id: "l35",
          lesson_title: "Procurement cycle integration with MM",
          lesson_order: 1,
        },
        {
          id: "l36",
          lesson_title: "Account determination & valuation configuration",
          lesson_order: 2,
        },
      ],
    },
    {
      id: "mod15",
      section_title: "Module 15: SAP FI Integration with SD",
      section_order: 15,
      Modules: [
        {
          id: "l37",
          lesson_title: "Sales process integration & VKOA setup",
          lesson_order: 1,
        },
      ],
    },
    {
      id: "mod16",
      section_title: "Module 16: Petty Cash Management",
      section_order: 16,
      Modules: [
        {
          id: "l38",
          lesson_title: "Cash journal, GL integration, fund replenishment",
          lesson_order: 1,
        },
      ],
    },
    {
      id: "mod17",
      section_title: "Module 17: Month-end & Year-end Closing Activities",
      section_order: 17,
      Modules: [
        {
          id: "l39",
          lesson_title: "Posting periods, accruals, reconciliations & reports",
          lesson_order: 1,
        },
      ],
    },
    {
      id: "mod18",
      section_title: "Module 18: SAP FICO in S/4HANA",
      section_order: 18,
      Modules: [
        {
          id: "l40",
          lesson_title:
            "Universal Journal, New Asset Accounting & Central Finance",
          lesson_order: 1,
        },
      ],
    },
    {
      id: "mod19",
      section_title: "Module 19: Capstone Project",
      section_order: 19,
      Modules: [
        {
          id: "l41",
          lesson_title: "End-to-end SAP FICO practical scenario",
          lesson_order: 1,
        },
      ],
    },
  ];

  const toggleSection = (id: string) => {
    const newSet = new Set(expandedSections);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setExpandedSections(newSet);
  };

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
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-gray-600 text-lg mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2"></div>
                <div className="flex items-center gap-2 text-gray-600"></div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                {/* <img
                  src={course.instructor_image}
                  alt={course.instructor_name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {course.instructor_name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {course.instructor_title}
                  </p> */}
                {/* </div> */}
              </div>

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
                  activeTab === "curriculum"
                    ? "text-theme-teal"
                    : "text-gray-500"
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

                <h4 className="text-xl font-bold mb-4">You’ll Learn</h4>
                <div className="space-y-2">
                  {[
                    "Configure general ledger, accounts payable, and receivable ",
                    "Manage cost centers, internal orders, and asset accounting ",
                    "Integrate with MM, SD, and HR modules ",
                    "Apply hands-on exercises reflecting real-world finance scenarios ",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-theme-teal mt-1" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold mb-4 mt-8">
                  This Course Includes
                </h4>
                {inclusions.map((inc) => (
                  <div key={inc.id} className="flex items-center gap-3 mb-2">
                    <Check className="w-5 h-5 text-theme-teal" />
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
              {/* Price Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      <img
                        src={course.image_enroll}
                        alt={course.title}
                        width={"400"}
                        height={300}
                        className="w-full h-96 object-cover"
                      />
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
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
                  <button
                    onClick={() => router.push("/contact")}
                    className="w-full bg-teal-600 hover:bg-blue-900 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
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
                      fileName="SAP-FICO.pdf" // 👈 change this dynamically per course
                      displayName="SAP FICO Course.pdf" // optional pretty name
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
