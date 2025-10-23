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
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";

export default function SAPBTPDetails() {
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
    title: "SAP BTP (Business Technology Platform)",
    description:
      "Master SAP BTP and become a certified cloud developer by learning database management, integration, analytics, Fiori development, CAP & RAP models, and real-time projects — all in one structured course.",
    price: 249.99,
    duration: "10 Weeks",
    level: "Advanced",
    lessons_count: 85,
    students_count: 2480,
    rating: 4.9,
    reviews_count: 320,
    category: "SAP Cloud",
    image_url:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "John Mathew",
    instructor_title: "SAP Certified BTP Architect",
    instructor_image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Introduction to SAP BTP",
      lessons: [
        "What is SAP BTP? Overview & architecture",
        "Key pillars: Database & Data Management, Analytics, App Dev, Integration",
        "Differences between BTP, SAP Cloud Platform, and On-Premises",
        "Global account, subaccounts, entitlements, quotas, environments",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: BTP Account Model & Security",
      lessons: [
        "BTP cockpit navigation",
        "Global Account, Subaccount, Spaces",
        "IAS & IPS Overview",
        "Role collections, authorizations, user management",
        "Connectivity & destinations",
        "📌 Hands-on: Set up a trial BTP subaccount with role assignments",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: SAP HANA Cloud & Data Management",
      lessons: [
        "Introduction to SAP HANA Cloud (DBaaS)",
        "Schema, tables, views, HDI containers",
        "Core Data Services (CDS)",
        "Calculation views",
        "Accessing HANA Cloud with BAS",
        "Data provisioning with SDI/SDQ",
        "📌 Mini Project: Create a database schema and query with CDS",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Application Development on BTP",
      lessons: [
        "SAP Business Application Studio (BAS) overview",
        "Cloud Foundry basics",
        "Node.js, Java, Python runtimes",
        "CAP (Cloud Application Programming) model fundamentals",
        "OData V2/V4 & REST APIs with CAP",
        "Multitarget Applications (MTA) deployment",
        "📌 Mini Project: Build a CAP-based service with OData API",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: ABAP Environment Basics",
      lessons: [
        "EML & RAP (RESTful Application Programming) model",
        "Entities, services, annotations, Draft Handling",
        "OData V2/V4 & REST APIs with RAP",
        "📌 Mini Project: Build a RAP-based service with OData API",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: SAP Fiori & UI Development on BTP",
      lessons: [
        "Introduction to Fiori Elements & SAPUI5",
        "Developing apps with BAS",
        "Freestyle vs Fiori Elements apps",
        "Consuming OData services in UI5 apps",
        "Launchpad service & app deployment",
        "📌 Mini Project: Create & deploy a Fiori Elements app on BTP",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Integration Suite",
      lessons: [
        "Overview of SAP Integration Suite",
        "Cloud Integration (iFlows, adapters, APIs)",
        "API Management (create, secure, publish APIs)",
        "Event Mesh (event-driven architecture)",
        "Connectivity with on-prem systems via Cloud Connector",
        "📌 Mini Project: Connect SAP S/4HANA with BTP via Integration Suite",
      ],
    },
    {
      id: 8,
      section_title: "Module 8: Analytics & Planning on BTP",
      lessons: [
        "SAP Analytics Cloud (SAC) overview",
        "Data modeling, visualizations, dashboards",
        "Live vs import connections",
        "Predictive analytics in SAC",
        "Integration with HANA Cloud",
        "📌 Mini Project: Create a sales dashboard in SAC using HANA Cloud data",
      ],
    },
    {
      id: 9,
      section_title: "Module 9: Extensions & Automation",
      lessons: [
        "Extending SAP S/4HANA with BTP",
        "Side-by-side vs in-app extensions",
        "Workflow Management & Business Rules",
        "SAP Process Automation (iRPA)",
        "📌 Mini Project: Automate a leave approval workflow",
      ],
    },
    {
      id: 10,
      section_title: "Module 10: Advanced Topics",
      lessons: [
        "Kyma runtime & Kubernetes basics",
        "Multi-cloud strategy (AWS, Azure, GCP integration)",
        "Event-driven applications with Kyma + Event Mesh",
        "Security best practices (XSUAA, OAuth2, JWT)",
        "DevOps on BTP: CI/CD with GitHub Actions & Jenkins",
      ],
    },
    {
      id: 11,
      section_title: "Module 11: Real-Time Scenarios & Capstone Project",
      lessons: [
        "End-to-End BTP project: CAP → Fiori → SAC → Launchpad",
        "Industry Scenarios (E-commerce, HR, IoT)",
        "Best practices & cost optimization",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "SAP BTP" },
  ];

  return (
    <div className="min-h-screen bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 p-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Left Section */}
          <div className="lg:col-span-2 ">
            {/* Header */}
            <div className="mb-8 p-10">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-md">
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
                  <span className="text-gray-500">
                    ({course.reviews_count} reviews)
                  </span>
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
                  <p className="font-semibold text-gray-900">
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

            {/* Tab Content */}
            {activeTab === "overview" ? (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This SAP BTP course takes you through every layer of the SAP
                  Business Technology Platform — from account setup to building,
                  deploying, and integrating intelligent enterprise apps.
                </p>

                <h4 className="text-xl font-bold mb-4 mt-8">What You’ll Learn</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Understand SAP BTP architecture and services",
                    "Develop cloud applications using CAP & RAP",
                    "Integrate systems using SAP Integration Suite",
                    "Build Fiori apps and deploy to Launchpad",
                    "Analyze data with SAP Analytics Cloud",
                    "Implement security and CI/CD on BTP",
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
                              expandedSections.has(section.id) ? "rotate-180" : ""
                            }`}
                          />
                          <h4 className="font-semibold text-gray-900">
                            {section.section_title}
                          </h4>
                        </div>
                        <span className="text-sm text-gray-500">
                          {section.lessons.length} lessons
                        </span>
                      </button>
                      {expandedSections.has(section.id) && (
                        <div className="divide-y divide-gray-100">
                          {section.lessons.map((lesson, i) => (
                            <div
                              key={i}
                              className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                            >
                              <div className="flex items-center gap-4">
                                <Play className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{lesson}</span>
                              </div>
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
          <div className="lg:col-span-1 ">
            <div className="sticky top-8 w-auto p-10">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                         <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={course.image_url}
                  alt={course.title}
                  className="w-full h-75 object-cover"
                />
              </div>
                    </span>
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
          fileName="SAP-BTP.pdf" // 👈 change this dynamically per course
          displayName="SAP Sales & Distribution.pdf" // optional pretty name
        />
      )}
                </div>
              </div>

              {/* Course Includes */}
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
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Share this course:
                </h3>
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
