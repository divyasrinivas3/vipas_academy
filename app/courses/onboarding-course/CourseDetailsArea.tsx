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

export default function SAPONBDetails() {
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
    title: "SAP SuccessFactors Onboarding 2.0 (ONB)",
    description:
      "Master SAP SuccessFactors Onboarding 2.0 to enhance new hire experiences. Learn architecture, configuration, workflows, integrations, reporting, and hands-on practice with real-time scenarios.",
    price: 159.99,
    course_duration: "10 Weeks",
    level: "Intermediate",
    Modules_count: 60,
    students_count: 1000,
    rating: 4.8,
    reviews_count: 150,
    category: "SAP SuccessFactors",
    image_url:
      "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Michael Lee",
    instructor_title: "SAP Certified SuccessFactors Consultant",
    instructor_image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Introduction to Onboarding 2.0",
      Modules: [
        "Overview of SuccessFactors HXM Suite",
        "Evolution from Onboarding 1.0 to Onboarding 2.0",
        "Role of Onboarding in Employee Lifecycle",
        "User Roles: New Hire, Hiring Manager, HR Admin, IT, Buddy",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: Architecture & Key Features",
      Modules: [
        "Onboarding 2.0 Architecture & Data Flow",
        "Core Capabilities (New Hire Portal, NHDR, Compliance, E-Signatures)",
        "Integration with Recruiting & Employee Central",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: System Configuration",
      Modules: [
        "Provisioning Setup for Onboarding 2.0",
        "Role-Based Permissions (RBP) for Onboarding",
        "Configuring New Hire Data Review (NHDR)",
        "Setting up Document Management & E-Signatures (DocuSign / Adobe Sign)",
        "Compliance Forms (Country-Specific)",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Onboarding Process Walkthrough",
      Modules: [
        "Pre-Day One Activities",
        "Hiring Manager Dashboard & Tasks",
        "New Hire Portal Experience (branding, customization)",
        "Assigning Mentors / Buddies",
        "Forms & Data Collection",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Advanced Configurations",
      Modules: [
        "Custom Data Collection Steps",
        "Configuring Business Rules in Onboarding",
        "Custom Tiles & Branding for Portal",
        "Notifications & Workflow Automation",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Cross-Module Integrations",
      Modules: [
        "Integration with Recruiting → Onboarding",
        "Integration with Employee Central (data sync)",
        "Integration with Payroll & Benefits",
        "Intelligent Services Center (ISC) Triggers",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Reporting & Analytics",
      Modules: [
        "Standard Reports for Onboarding",
        "Story Reports in People Analytics",
        "Monitoring New Hire Engagement",
        "Compliance & Audit Reports",
      ],
    },
    {
      id: 8,
      section_title: "Module 8: Administration & Troubleshooting",
      Modules: [
        "Admin Tools in Onboarding",
        "Common Configuration Issues & Fixes",
        "Permission Errors",
        "Document Management Issues",
      ],
    },
    {
      id: 9,
      section_title: "Module 9: Case Studies & Best Practices",
      Modules: [
        "End-to-End Onboarding Case Study",
        "Best Practices for Enhancing New Hire Experience",
        "Change Management for Adoption",
      ],
    },
    {
      id: 10,
      section_title: "Module 10: Hands-On & Certification Prep",
      Modules: [
        "Hands-On Workshop in Demo System",
        "Configuring Complete Onboarding Flow",
        "Simulating New Hire Journeys",
        "Certification Guidance: C_THR97 (SAP Onboarding 2.0)",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "SAP SuccessFactors ONB" },
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
                <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>

                <h4 className="text-xl font-bold mb-4 mt-8">What You’ll Learn</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Understand onboarding 2.0 processes & user roles",
                    "Configure onboarding workflows and business rules",
                    "Integrate with Recruiting, Employee Central, Payroll & Benefits",
                    "Perform reporting and analytics",
                    "Troubleshoot onboarding configurations",
                    "Hands-on exercises and certification preparation",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 mt-1" />
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
                        <span className="text-sm text-gray-500">{section.Modules.length} Modules</span>
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
                      <span>{course.Modules_count} Modules</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
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
          fileName="SF-ONB.pdf" // 👈 change this dynamically per course
          displayName="SF_Onboarding_course.pdf" // optional pretty name
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
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Share this course:</h3>
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
