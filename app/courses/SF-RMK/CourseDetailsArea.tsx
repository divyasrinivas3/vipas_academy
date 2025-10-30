"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  Award,
  CheckCircle,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";
import Image from "next/image";

export default function SAPRMKDetails() {
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
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      // 👇 If already on Home page, just scroll
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // 👇 If on another page, redirect to Home + hash
      router.push("/#contact");
    }
  };

  const course = {
    title: "SAP SuccessFactors Recruiting Marketing (RMK) Course",
    description:
      "Learn to design and manage SAP RMK career sites to attract, engage, and convert candidates efficiently. Focus on branding, candidate experience, and data-driven recruitment marketing strategies. ",
    course_overview:
      "Master SAP RMK to build effective career portals, manage candidate interactions, and optimize recruitment marketing campaigns. Apply practical exercises to simulate real-world recruitment scenarios. ",
    price: 159.99,
    course_duration: "3 Months Course",
    internship: "3 Months",
    level: "Intermediate",
    Modules_count: 11,
    students_count: 900,
    rating: 4.7,
    reviews_count: 130,
    category: "SAP SuccessFactors",
    image_url:
      "https://images.pexels.com/photos/3184329/pexels-photo-3184329.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "David Smith",
    instructor_title: "SAP Certified SuccessFactors Consultant",
    instructor_image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    course_enroll: "/Enroll-Now.png",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Introduction to SAP RMK",
      Modules: [
        "Overview of SAP SuccessFactors Talent Acquisition Suite (RCM, RMK, Onboarding)",
        "Role of RMK in the recruiting process",
        "Differences between RCM (process management) and RMK (marketing & branding)",
        "Candidate experience lifecycle (attract → engage → apply → hire)",
        "RMK–RCM integration overview",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: Recruiting Marketing Setup",
      Modules: [
        "Provisioning & Admin Center overview",
        "Enabling RMK in a SuccessFactors instance",
        "Career Site Builder (CSB) introduction",
        "Global career site vs local sites (multi-brand, multi-country setup)",
        "RMK site architecture (Landing pages, Category pages, Search pages)",
        "Hands-on: Set up a basic RMK-enabled subaccount with CSB",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: Career Site Builder (CSB)",
      Modules: [
        "Page types: Landing page, Category page, Job Search page, Content page",
        "Branding & design in CSB (colors, layouts, headers, footers)",
        "Widgets in CSB (search, call-to-action, image, video, map)",
        "Creating responsive & mobile-first career sites",
        "Multi-language support for global career sites",
        "Hands-on: Build a sample landing page in CSB",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Job Distribution & SEO",
      Modules: [
        "Job postings in RMK vs RCM",
        "SEO optimization for job postings",
        "URL structures, meta tags, keyword optimization",
        "Job distribution to social networks & job boards",
        "Recruiting Posting overview (multi-channel job advertising)",
        "Publish jobs with Job Boards example LinkedIn",
        "Hands-on: Publish jobs with SEO-optimized metadata",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Candidate Experience & CRM",
      Modules: [
        "Candidate account and profile in RMK",
        "Talent community & candidate opt-in",
        "Candidate Relationship Management (CRM) basics",
        "Talent pools & pipelines in RMK",
        "Social referral programs (Employee Referrals in RMK)",
        "Hands-on: Configure a talent community registration page",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Analytics & Reporting",
      Modules: [
        "Recruiting Marketing Dashboard",
        "Key KPIs: visitor traffic, apply clicks, conversion rates, source tracking",
        "Candidate journey analytics (funnel view)",
        "Google Analytics integration with RMK",
        "Standard vs custom RMK reports",
        "Hands-on: Generate a report to analyze job posting performance",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Integration with Recruiting Management (RCM)",
      Modules: [
        "RMK–RCM data flow (Job Requisition → Posting → Application)",
        "Candidate application process between RMK and RCM",
        "Single Sign-On (SSO) between RMK & RCM",
        "Data synchronization (job fields, candidate data)",
        "Integration with Onboarding (candidate → new hire)",
      ],
    },
    {
      id: 8,
      section_title: "Module 8: Security & Compliance",
      Modules: [
        "GDPR & data privacy in RMK",
        "Cookie consent & candidate opt-in tracking",
        "Candidate data purge rules",
        "Compliance in global recruiting (EU, US, APAC)",
      ],
    },
    {
      id: 9,
      section_title: "Module 9: Advanced Features",
      Modules: [
        "Career site personalization (targeted content by location, role, experience)",
        "Employee Referral Management (ERM) in RMK",
        "Intelligent job recommendations for candidates",
        "Social & mobile recruiting strategies",
        "Integration with external job boards (LinkedIn, Indeed, Glassdoor)",
        "Hands-on: Enable referral program & track referral applications",
      ],
    },
    {
      id: 10,
      section_title: "Module 10: Real-Time Scenarios & Capstone Project",
      Modules: [
        "End-to-end recruiting marketing flow: Create career site → Post job → Attract candidates → Capture talent pool → Push to RCM",
        "Industry scenarios: High-volume hiring (retail, BPO), niche talent hiring (IT, healthcare)",
        "Capstone Project: Build a branded career site with CSB, SEO optimization, social job posting, and talent pool setup",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "SAP SuccessFactors RMK" },
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
                  <div className="flex"></div>
                  <span className="font-semibold text-gray-900"></span>
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
                <p className="text-gray-600 leading-relaxed mb-6">
                  {course.course_overview}
                </p>

                <h4 className="text-xl font-bold mb-4 mt-8">
                  What You&apos;ll Learn
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Configure RMK career sites and templates ",
                    "Manage candidate engagement and branding strategies ",
                    "Track campaign performance and recruitment analytics",
                    "Integrate RMK with Recruiting Management (RCM) and Employee Central ",
                    "Apply hands-on exercises and real-life recruitment scenarios ",
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
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
                <div className="mb-6">
                  <Image
                    src={course.course_enroll}
                    alt={course.title}
                    width={1000}
                    height={400}
                    className="w-full h-60 object-cover rounded-lg"
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
                      fileName="SF_RMK.pdf"
                      displayName="SAP_SF_RMK_Course.pdf"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
