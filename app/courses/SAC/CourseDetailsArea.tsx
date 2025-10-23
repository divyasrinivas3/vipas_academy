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
  PhoneCall,
  Download,
  Share2,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";

export default function SACSAPPlanningDetails() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());

  const toggleSection = (sectionId: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) newExpanded.delete(sectionId);
    else newExpanded.add(sectionId);
    setExpandedSections(newExpanded);
  };

  const course = {
    title: "SAC SAP Analytics Cloud (SAC) - Planning Course",
    description:
      "Learn SAP Analytics Cloud Planning for budgeting, forecasting, financial planning, driver-based planning, and integration with SAP ERP/BPC. Master SAC Planning workflows, models, data actions, predictive planning, dashboards, and enterprise-level security with hands-on exercises.",
    price: 179.99,
    duration: "12 Weeks",
    level: "Intermediate",
    lessons_count: 70,
    students_count: 1200,
    rating: 4.9,
    reviews_count: 180,
    category: "SAP Analytics Cloud",
    image_url:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Alexander Moore",
    instructor_title: "SAP Certified SAC Consultant",
    instructor_image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Introduction to SAC",
      lessons: [
        "Overview of SAP Analytics Cloud (BI, Planning, Predictive, Augmented Analytics)",
        "SAC architecture & deployment on SAP BTP",
        "Key use cases (finance, sales, HR, supply chain)",
        "Navigation & user interface overview",
        "SAC terminology: Stories, Models, Dimensions, Measures",
        "Understanding tenants, roles, and licenses",
        "Overview of data sources (SAP & non-SAP)",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: SAC Core Cloud Components",
      lessons: [
        "Business Intelligence (BI) – Data connections (live vs import)",
        "Data modeling in SAC",
        "Creating & managing models (dimensions, measures, hierarchies)",
        "Stories: visualizations, dashboards, filters, charts, geo maps",
        "Calculations & restricted measures",
        "Data blending & wrangling",
        "Planning models & versions",
        "Data entry, forecasting, driver-based planning",
        "Allocations, spreading, distribution",
        "Value driver trees",
        "Integration with SAP BPC and S/4HANA for planning",
        "Predictive Analytics – Predictive scenarios, Smart Predict, automated forecasting",
        "Integration with SAP AI Core & external ML",
        "Augmented Analytics – Smart Insights, Smart Discovery, Search to Insight, Explainable AI",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: Introduction to SAC Planning",
      lessons: [
        "Overview of SAC Planning vs SAC BI",
        "SAC Planning architecture",
        "Planning workflows and use cases (finance, sales, HR, supply chain)",
        "Roles in SAC Planning (planners, reviewers, administrators)",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Data Connections & Integration",
      lessons: [
        "Import vs Live connections for planning",
        "Data acquisition from SAP & non-SAP sources",
        "Integration with SAP S/4HANA, SAP BW/4HANA, SAP Datasphere",
        "Integration with SAP BPC (Business Planning & Consolidation)",
        "Flat file data uploads (Excel/CSV)",
        "Hands-on: Load financial data into a planning model",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Planning Models",
      lessons: [
        "Creating planning models (dimensions, measures, hierarchies, attributes)",
        "Time dimensions & granularity (year, quarter, month, day)",
        "Currency conversion & exchange rates",
        "Version management (actuals, plan, forecast, rolling forecast)",
        "Managing public vs private versions",
        "Hands-on: Create a financial planning model with multiple versions",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Data Entry & Spreading",
      lessons: [
        "Manual data entry in stories",
        "Spreading data across time & entities",
        "Data-driven distribution rules",
        "Allocations & driver-based calculations",
        "Value driver trees (VDT)",
        "Hands-on: Build a value driver tree for revenue planning",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Planning Functions",
      lessons: [
        "Data actions (copy, allocate, forecast, custom logic)",
        "Multi-step data actions & process automation",
        "Predictive forecasting (Smart Predict integration)",
        "Advanced formula scripting in planning models",
        "Hands-on: Automate forecast generation with data actions",
      ],
    },
    {
      id: 8,
      section_title: "Module 8: Collaboration & Workflow",
      lessons: [
        "Assignments, tasks, and input forms",
        "Review & approval workflows",
        "Commenting, discussions & collaboration features",
        "Integration with Microsoft Teams for planning collaboration",
        "Hands-on: Create a workflow for budget submission & approval",
      ],
    },
    {
      id: 9,
      section_title: "Module 9: Forecasting & Predictive Planning",
      lessons: [
        "Rolling forecasts vs static budgets",
        "Predictive planning scenarios (time series forecasting)",
        "Integration with Smart Predict for demand & sales forecasting",
        "Integration with ML models (Python/R) for advanced forecasting",
        "Hands-on: Create a rolling forecast for sales using predictive planning",
      ],
    },
    {
      id: 10,
      section_title: "Module 10: Reporting & Analysis for Planning",
      lessons: [
        "Building planning stories & dashboards",
        "Combining actuals, plan, and forecast data",
        "Variance analysis & version comparison (Actual vs Plan vs Forecast)",
        "KPI dashboards for financial planning",
        "Hands-on: Create a CFO dashboard showing Actual vs Plan",
      ],
    },
    {
      id: 11,
      section_title: "Module 11: Security & Administration",
      lessons: [
        "User roles for planning (input providers, reviewers, admins)",
        "Data access control & data locking",
        "Managing public/private versions securely",
        "Tenant administration in SAC",
        "Hands-on: Implement region-level planning security",
      ],
    },
    {
      id: 12,
      section_title: "Module 12: Advanced Topics",
      lessons: [
        "Multi-model planning (cross-model calculations)",
        "Hybrid planning with SAC + BPC",
        "Integration with SAP Datasphere for enterprise planning",
        "Best practices for large-scale enterprise planning",
      ],
    },
    {
      id: 13,
      section_title: "Module 13: Capstone Project",
      lessons: [
        "End-to-end financial planning scenario",
        "Load actuals from SAP S/4HANA",
        "Create planning model with versions (Actual, Plan, Forecast)",
        "Build a value driver tree for revenue planning",
        "Set up workflows for planners & approvers",
        "Create a forecast using predictive planning",
        "Build a final CFO dashboard for management reporting",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "SAC Planning" },
  ];

  return (
    <div className="min-h-screen mt-9 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <div className="mb-8 p-10">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-md">
                  {course.category}
                </span>
              </div>
              <h1 className="text-5xl font-sans font-bold text-gray-900 mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-600 text-lg font-sora mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(course.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{course.rating}</span>
                </div>
              </div>

              <div className="mb-8 rounded-2xl overflow-hidden">
                <img
                  src={course.image_url}
                  alt={course.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-2 font-semibold text-base ${
                    activeTab === "overview"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Info
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 px-2 font-semibold text-base ${
                    activeTab === "curriculum"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Curriculum
                </button>
              </div>
            </div>

            {activeTab === "overview" ? (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>

                <h4 className="text-xl font-bold mb-4 mt-8">What You’ll Learn</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Configure planning models, dimensions, measures, hierarchies, and versions",
                    "Perform budgeting, forecasting, and driver-based planning",
                    "Implement predictive planning using Smart Predict",
                    "Build dashboards, variance analysis, and KPI stories",
                    "Integrate SAC Planning with SAP ERP/BPC/S4HANA",
                    "Execute hands-on capstone project for enterprise planning scenarios",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                <div className="space-y-4">
                  {curriculum.map((section) => (
                    <div
                      key={section.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full px-6 py-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100"
                      >
                        <div className="flex items-center gap-4">
                          <ChevronDown
                            className={`w-5 h-5 text-gray-600 transition-transform ${
                              expandedSections.has(section.id) ? "rotate-180" : ""
                            }`}
                          />
                          <h4 className="font-semibold text-gray-900">{section.section_title}</h4>
                        </div>
                        <span className="text-sm text-gray-500">{section.lessons.length} lessons</span>
                      </button>
                      {expandedSections.has(section.id) && (
                        <div className="divide-y divide-gray-100">
                          {section.lessons.map((lesson, i) => (
                            <div
                              key={i}
                              className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50"
                            >
                              <Play className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-700">{lesson}</span>
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 w-auto p-10">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                <div className="mb-6">
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

                <div className="space-y-3">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
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
          fileName="SAC-Course.pdf" // 👈 change this dynamically per course
          displayName="SAP_SAC Course.pdf" // optional pretty name
        />
      )}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">This Course Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Lifetime access",
                    "30-day money-back guarantee",
                    "Downloadable resources",
                    "Certificate of completion",
                    "Access on mobile and desktop",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Share this course:</h3>
                <button className="w-full border-2 border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
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
