"use client";

import { useState } from "react";
import {
  Clock,
  BarChart3,
  BookOpen,
  Star,
  Users,
  Check,
  Play,
  ChevronDown,
  PhoneCall,
  Download,
  Share2,
  Award,
  CheckCircle,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";
import { useRouter } from "next/navigation";

export default function SAPPSDetails() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set()
  );

  const toggleSection = (sectionId: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) newExpanded.delete(sectionId);
    else newExpanded.add(sectionId);
    setExpandedSections(newExpanded);
  };

  const course = {
    title: "SAP Project Systems",
    description:
      "Plan, execute, and monitor projects with SAP PS. Learn WBS structures, networks, budgeting, and billing to ensure projects meet deadlines and budgets efficiently. ",
    course_overview:
      "Master SAP PS to manage project lifecycles end-to-end. Gain practical experience in planning, budgeting, procurement, and integrating with other SAP modules to optimize project performance.",
    course_duration: "3 Months Course",
    level: "Beginner to Advanced",
    Modules_count: 12,
    students_count: 1800,
    rating: 4.7,
    reviews_count: 320,
    category: "SAP PS",
    image_url:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "John Smith",
    instructor_title: "SAP Certified PS Consultant",
    instructor_image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    internship: "3 Months",
    image_enroll: "/Enroll-Now.png",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Introduction to Project Systems",
      Modules: [
        "Overview of SAP ERP & integration of SAP PS with other modules (FI, CO, MM, SD, HR, PP)",
        "Project System basics – Structures, Master Data, Transactions",
        "Role of PS in Project Management (planning, execution, monitoring, controlling)",
        "Navigation in SAP PS",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: Organizational Structure in SAP PS",
      Modules: [
        "Enterprise structure for PS",
        "Company code, controlling area, project profile",
        "Assignment of organizational elements",
        "Integration with controlling & financials",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: Work Breakdown Structure (WBS)",
      Modules: [
        "Creating & structuring WBS",
        "WBS elements – definition, attributes, statuses",
        "Coding mask & operative indicators",
        "WBS planning (dates, costs, resources, revenues)",
        "Budgeting at WBS level",
        "📌 Hands-on: Create a sample WBS for a real project",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Networks & Activities",
      Modules: [
        "Network types & structures",
        "Network activities: relationships, constraints, milestones",
        "Activity scheduling & capacity planning",
        "Resource assignment to activities",
        "Confirmations & progress tracking",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Project Planning",
      Modules: [
        "Planning types: cost planning, resource planning, material planning",
        "Cost estimation at WBS and activity level",
        "Project budgeting & availability control",
        "Simulation versions for planning scenarios",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Project Execution & Monitoring",
      Modules: [
        "Project release & status management",
        "Actual cost posting from other modules (MM, SD, PP)",
        "Progress analysis & earned value management (EVM)",
        "Forecasting in SAP PS",
        "Reporting & analytics in SAP PS (standard reports, report painter)",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Project Procurement & Material Management",
      Modules: [
        "Material components in network activities",
        "Project stock vs non-stock materials",
        "External procurement for projects (MM integration)",
        "Services procurement in PS",
      ],
    },
    {
      id: 8,
      section_title: "Module 8: Project Billing & Revenue",
      Modules: [
        "Revenue planning in PS",
        "Integration with SD for billing",
        "Resource-related billing (Dynamic Item Processor - DIP)",
        "Results analysis in PS",
        "Settlement to CO/FI",
      ],
    },
    {
      id: 9,
      section_title: "Module 9: Integration with Other SAP Modules",
      Modules: [
        "PS–FI/CO (budgeting, settlement, overhead costing)",
        "PS–MM (procurement)",
        "PS–SD (project-based billing)",
        "PS–PP (production orders)",
        "PS–HR (workforce planning, time confirmation)",
      ],
    },
    {
      id: 10,
      section_title: "Module 10: Advanced Topics",
      Modules: [
        "Milestone billing",
        "Funds & availability control",
        "PS workflow automation",
        "Project versions & simulations",
        "CProjects (Collaboration Projects) & integration",
      ],
    },
    {
      id: 11,
      section_title: "Module 11: SAP PS in S/4HANA",
      Modules: [
        "Differences between ECC PS and S/4HANA PS",
        "Fiori apps for project management",
        "Simplifications & new functionalities in S/4HANA",
        "Roadmap for SAP Enterprise Portfolio & Project Management (EPPM)",
      ],
    },
    {
      id: 12,
      section_title: "Module 12: Real-Time Scenarios & Project",
      Modules: [
        "End-to-End project lifecycle in SAP PS (from WBS creation to settlement)",
        "Real-life industry use cases (construction, IT, engineering, manufacturing)",
        "Mini project: Configure and execute a complete customer project with WBS, networks, budgeting, and billing",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "SAP PS" },
  ];

  return (
    <div className="min-h-screen mt-9 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumb items={breadcrumbItems} />
    
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2">

            <div className="mb-8 p-10">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded-md">
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
                  <span className="font-semibold text-gray-900">
                    {course.rating}
                  </span>
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
            <div className="max-w-9xl mx-auto border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-2 font-semibold text-base ${
                    activeTab === "overview"
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Info
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 px-2 font-semibold text-base ${
                    activeTab === "curriculum"
                      ? "text-teal-600 border-b-2 border-teal-600"
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
                <p className="text-gray-600 leading-relaxed mb-6">
                  {course.course_overview}
                </p>

                <h4 className="text-xl font-bold mb-4 mt-8">
                  What You’ll Learn
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Create and manage WBS, networks, and activities ",
                    "Execute project planning, scheduling, and monitoring ",
                    "Handle procurement, billing, and revenue recognition ",
                    "Integrate PS with FI, CO, MM, SD, PP, and HR ",
                    "Apply real-world project scenarios and mini-projects ",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
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
                        className="w-full px-6 py-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100"
                      >
                        <div className="flex items-center gap-4">
                          <ChevronDown
                            className={`w-5 h-5 text-gray-600 transition-transform ${
                              expandedSections.has(section.id)
                                ? "rotate-180"
                                : ""
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
                          {section.Modules.map((lesson, i) => (
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
                    className="bg-teal-500 hover:text-white hover:bg-blue-900 text-white px-8 w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => setShowModal(true)}
                  >
                    <Download size={20} />
                    Download Syllabus
                  </button>

                  {showModal && (
                    <DownloadSyllabusModal
                      onClose={() => setShowModal(false)}
                      fileName="SAPPS-Course.pdf" // 👈 change this dynamically per course
                      displayName="SAP_Project_Systems.pdf" // optional pretty name
                    />
                  )}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  This Course Includes:
                </h3>
                <div className="space-y-3">
                  {[
                    "Lifetime access",
                    "30-day money-back guarantee",
                    "Downloadable resources",
                    "Certificate of completion",
                    "Access on mobile and desktop",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Share this course:
                </h3>
                <button className="w-full border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
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
