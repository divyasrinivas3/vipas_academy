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
  Award,
  CheckCircle,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";
import Image from "next/image";

export default function SAPECDetails() {
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
    title: "SAP SuccessFactors Employee Central (EC) Course",
    description:
      "Manage employee data, organizational structures, and HR processes efficiently with SAP SuccessFactors Employee Central. ",
    course_overview:
      "Learn core HR functions, workflows, and integrations while applying skills through hands-on projects simulating real business HR scenarios. ",
    course_duration: "3 Months Course",
    internship: "3 Months",
    level: "Intermediate",
    Modules_count: 8,
    students_count: 950,
    rating: 4.7,
    reviews_count: 140,
    category: "SAP SuccessFactors",
    image_url:
      "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Emily Roberts",
    instructor_title: "SAP Certified SuccessFactors Consultant",
    instructor_image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    course_enroll: "/Enroll-Now.png",
  };

  const curriculum = [
    {
      id: 1,
      section_title:
        "Module 1: Overview of SAP SuccessFactors Employee Central Core (1hr)",
      Modules: [
        "Introducing SAP SuccessFactors Employee Central Core",
        "Describing key functionalities of SAP SF EC",
        "Setting up of SAP SF EC instance",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: Configuring initial elements (3hr 24min)",
      Modules: [
        "Import pre-configured data models in SAP SuccessFactors Employee Central",
        "Import a picklist in SAP SuccessFactors Employee Central",
        "Configure the People Profile after the initial Employee Central set up",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: Assigning Permissions (2hr 50min)",
      Modules: [
        "Assign permissions to Employee Central administrators",
        "Differentiate between proxy rights and delegate permissions in Employee Central",
        "Modify an effective-dated record in Employee Central",
        "Quiz",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Creating Foundation objects (8hr 50min)",
      Modules: [
        "Create Foundation Object Records in Employee Central",
        "Configure legacy and MDF foundation object definitions within SAP SuccessFactors Employee Central Core",
        "Configure Foundation Object Associations in Employee Central",
        "Configure new country/region fields for Employee Central MDF Foundation Objects",
        "Quiz",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Configuring Employee Data (11hr 20min)",
      Modules: [
        "Introducing Person and Employment objects",
        "Introducing Hire and Termination screens",
        "Importing new employees into SAP SuccessFactors Employee Central",
        "Updating employee information in SAP SuccessFactors Employee Central via import",
        "Applying mass changes in SAP SuccessFactors Employee Central",
        "Configuring the Employee Central Succession Data Model with Business Configuration UI (BCUI)",
        "Configuring the Employee Central Succession Data Model using XML",
        "Configuring the country and region-specific fields for Succession Data Model in Employee Central",
        "Configuring HRIS Synchronization in SAP SuccessFactors Employee Central",
        "Quiz",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Configuring Transactions (6hr 16min)",
      Modules: [
        "Assigning employee and manager permissions in SAP SuccessFactors Employee Central",
        "Using manager self-service in SAP SuccessFactors Employee Central",
        "Configuring Workflows in SAP SuccessFactors Employee Central",
        "Configuring alerts and Notifications in SAP SuccessFactors Employee Central",
        "Creating Event Reasons in SAP SuccessFactors Employee Central",
        "Quiz",
      ],
    },
    {
      id: 7,
      section_title:
        "Module 7: Creating business rules for Employee Central (4hr 28min)",
      Modules: [
        "Create business rules in SAP SuccessFactors Employee Central Core",
        "Quiz",
      ],
    },
    {
      id: 8,
      section_title:
        "Module 8: Implementing Optional Configurations (2hr 25min)",
      Modules: [
        "Adapting the Latest People Profile in SAP SuccessFactors",
        "Configuring Employee Central Quick Actions Feature in SAP SuccessFactors",
        "Configuring Internal Job History in SAP SuccessFactors Employee Central",
        "Creating Custom Hire Templates in SAP SuccessFactors Employee Central",
        "Using the Diagnostic Tool in SAP SuccessFactors Employee Central",
        "Describing use cases of Joule in SAP SuccessFactors Employee Central Core",
        "Quiz",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "SAP SuccessFactors EC" },
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
                    "Handle employee master data and organizational structures ",
                    "Configure workflows and employee lifecycle processes ",
                    "Integrate Employee Central with other SAP modules ",
                    "Work with reporting and analytics tools ",
                    "Apply real-world HR scenarios through practical exercises ",
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
