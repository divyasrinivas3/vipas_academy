"use client";

import { useState } from "react";
import {
  Clock,
  BarChart3,
  BookOpen,
  Star,
  Download,
  Check,
  Play,
  ChevronDown,
  PhoneCall,
  Share2,
  Award,
  CheckCircle,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SAPFioriDetails() {
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
    title: "SAP FIORI & UI5 Development",
    description:
      "Master the art of building user-friendly, responsive enterprise applications using SAP Fiori and UI5. Focus on design, usability, and real-time deployment. ",
    course_overview:
      "Learn Fiori Elements, freestyle apps, OData integration, and Launchpad deployment. Build enterprise-ready applications with hands-on exercises reflecting real business needs.",
    price: 199.99,
    course_duration: "3 Months Course",
    internship: "3 Months internship",
    level: "Beginner to Advanced",
    Modules_count: 7,
    students_count: 2100,
    rating: 4.8,
    reviews_count: 280,
    category: "SAP UI/UX",
    image_url:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Jane Doe",
    instructor_title: "SAP Certified Fiori Consultant",
    instructor_image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
    image_enroll: "/Enroll-Now.png",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Introduction to SAP Fiori",
      Modules: [
        "Overview of SAP Fiori UX & SAPUI5",
        "Fiori launchpad concepts",
        "Fiori Elements vs Freestyle apps",
        "Fiori design principles & guidelines",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: SAPUI5 Basics",
      Modules: [
        "UI5 architecture & MVC model",
        "Views, Controllers, and Components",
        "Data binding and models",
        "Using JSON, OData, and XML models",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: Working with Fiori Elements",
      Modules: [
        "Annotation model and metadata",
        "List reports, Object pages, and Overview pages",
        "Smart controls and reusable components",
        "📌 Hands-on: Build a simple List Report app",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Freestyle Fiori App Development",
      Modules: [
        "Creating apps with SAP Business Application Studio",
        "Routing, navigation, and events",
        "Consuming OData services",
        "📌 Mini Project: Build a freestyle app with master-detail view",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Fiori Launchpad & Deployment",
      Modules: [
        "Configure launchpad tiles & groups",
        "Catalogs, roles, and authorization objects",
        "Deploying apps to SAP Fiori Launchpad",
        "📌 Mini Project: Deploy a Fiori Elements app to Launchpad",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Advanced UI Techniques",
      Modules: [
        "Custom controls & theming",
        "Responsive design & flexible layouts",
        "Debugging & performance optimization",
        "📌 Mini Project: Customize a Fiori app theme",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Real-Time Scenario & Capstone",
      Modules: [
        "End-to-End Fiori project with OData backend",
        "Integration with SAP S/4HANA",
        "Best practices & performance tuning",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "SAP Fiori" },
  ];

  return (
    <div className="min-h-screen mt-9 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <div className="flex items-center gap-2 text-gray-600"></div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div></div>
              </div>

              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={course.image_url}
                  alt={course.title}
                  width={1000}
                  height={70}
                  className="w-full h-70 object-cover"
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
                    "Understand SAP Fiori UX & SAPUI5 architecture",
                    "Develop Fiori Elements and Freestyle apps",
                    "Consume OData services and integrate with S/4HANA",
                    "Deploy apps to Fiori Launchpad",
                    "Customize themes and layouts",
                    "Build real-time enterprise applications",
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
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-0 shadow-sm">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <Image
                      src={course.image_enroll}
                      alt={course.title}
                      width={"400"}
                      height={300}
                      className="w-full h-70 object-cover rounded-sm"
                    />
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span>{course.course_duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Award className="w-5 h-5 text-gray-400" />
                      <span>{course.internship}</span>
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
                      fileName="SAP-FIORI.pdf" // 👈 change this dynamically per course
                      displayName="SAP_FIORI_Course.pdf" // optional pretty name
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
