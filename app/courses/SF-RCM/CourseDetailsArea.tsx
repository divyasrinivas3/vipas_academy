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

export default function SAPRCMDetails() {
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
    title: "SAP SuccessFactors RCM (Recruiting Management)",
    description:
      "Master SAP SuccessFactors Recruiting Management (RCM) to streamline end-to-end hiring processes. Learn setup, job requisitions, candidate management, RMK, reports, integrations, security, advanced features, and hands-on exercises with real-time scenarios.",
    price: 179.99,
    duration: "12 Weeks",
    level: "Intermediate",
    lessons_count: 80,
    students_count: 1200,
    rating: 4.7,
    reviews_count: 210,
    category: "SAP SuccessFactors",
    image_url:
      "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Sarah Johnson",
    instructor_title: "SAP Certified SuccessFactors Consultant",
    instructor_image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Introduction to SAP RCM",
      lessons: [
        "Overview of SAP SuccessFactors Talent Acquisition Suite (RCM, RMK, Onboarding)",
        "Role of RCM in the hiring process",
        "Key differences: RCM vs RMK vs RBP",
        "Integration of RCM with other modules (EC, PMGM, Onboarding, Succession & Development)",
        "Navigation in SuccessFactors",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: Recruiting Setup & Configuration",
      lessons: [
        "Provisioning & Admin Center basics",
        "Recruiting permissions (Role-Based Permissions)",
        "Managing recruiting roles (Recruiter, Hiring Manager, Candidate, etc.)",
        "Setting up job requisition templates",
        "Candidate profile templates",
        "📌 Hands-on: Configure a sample recruiting role and requisition template",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: Job Requisition Management",
      lessons: [
        "Job requisition creation process",
        "Approval workflows for requisitions",
        "Job fields, operators, and requisition templates",
        "Route maps in recruiting",
        "Job posting management (internal & external career site)",
        "📌 Hands-on: Create and approve a job requisition with routing",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Candidate Management",
      lessons: [
        "Candidate application process",
        "Candidate profile & application templates",
        "Candidate pipelines & statuses",
        "Candidate forwarding, interview scheduling, offer approval process",
        "Background elements in candidate profile",
        "📌 Hands-on: Create candidate pipeline stages for a new job role",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Recruiting Templates & XML Customization",
      lessons: [
        "Job requisition template XML configuration",
        "Candidate profile template XML",
        "Application template XML",
        "Offer letter templates",
        "Best practices for XML vs Admin Center setup",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Offer Management",
      lessons: [
        "Offer letter templates (standard & custom)",
        "Offer approval workflows",
        "Generating and extending offers",
        "Integration with Compensation (salary, bonus, benefits data)",
        "Offer Details XML basic review",
        "📌 Hands-on: Configure a digital offer letter template",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Recruiting Marketing (RMK) & Career Site",
      lessons: [
        "Basics of RMK (Recruiting Marketing)",
        "Career Site Builder (CSB) overview",
        "Setting up job postings on RMK",
        "Candidate experience journey",
        "Mobile-optimized career site design",
        "📌 Hands-on: Build a sample career site with CSB",
      ],
    },
    {
      id: 8,
      section_title: "Module 8: Recruiting Reports & Analytics",
      lessons: [
        "Standard recruiting reports",
        "Ad Hoc reporting for recruiting data",
        "Recruiting metrics & KPIs (time-to-fill, offer acceptance, candidate pipeline health)",
        "People Analytics (Stories in SAP SuccessFactors) for recruiting",
        "📌 Hands-on: Build a hiring funnel dashboard",
      ],
    },
    {
      id: 9,
      section_title: "Module 9: Integration with Other Modules",
      lessons: [
        "RCM + Onboarding (candidate to employee flow)",
        "RCM + Employee Central (EC)",
        "RCM + Background checks (integration with third-party vendors)",
        "RCM + LMS (for hiring-linked learning)",
      ],
    },
    {
      id: 10,
      section_title: "Module 10: Security, Compliance & GDPR",
      lessons: [
        "Role-Based Permissions (RBP) in Recruiting",
        "Data privacy & GDPR compliance",
        "Anonymization and purge rules for candidate data",
        "Recruiting auditing",
      ],
    },
    {
      id: 11,
      section_title: "Module 11: Advanced Recruiting Features",
      lessons: [
        "Recruiting Posting (multi-channel job posting)",
        "Interview scheduling integrations (Outlook, MS Teams, Zoom)",
        "Talent Pools & Candidate Relationship Management (CRM in Recruiting)",
        "AI & Predictive analytics in Recruiting (intelligent candidate matching)",
      ],
    },
    {
      id: 12,
      section_title: "Module 12: Real-Time Scenarios & Capstone Project",
      lessons: [
        "End-to-End recruiting process: Job requisition → Posting → Candidate pipeline → Offer → Onboarding",
        "Industry-specific scenarios (IT hiring, campus recruitment, high-volume recruiting)",
        "Capstone Project: Configure a complete recruiting cycle for a sample company (job requisition, career site, candidate workflow, and offer process)",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "SAP SuccessFactors RCM" },
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
                    "Master end-to-end recruiting management in SAP SuccessFactors",
                    "Configure RCM workflows, roles, and templates",
                    "Manage job requisitions, candidates, offers, and RMK career sites",
                    "Perform reporting and analytics",
                    "Integrate RCM with Onboarding, EC, and LMS",
                    "Hands-on exercises and real-time scenario projects",
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
          fileName="SF-RCM.pdf" // 👈 change this dynamically per course
          displayName="SAP Sales & Distribution.pdf" // optional pretty name
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
