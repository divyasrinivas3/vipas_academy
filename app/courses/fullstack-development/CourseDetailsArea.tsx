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

export default function FullStackCourseDetails() {
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
    title: "Full Stack Development Course",
    description:
      "Become a professional Full Stack Developer. Learn HTML, CSS, JavaScript, React, Node.js, Express, SQL/NoSQL databases, REST APIs, and deploy real-world full-stack projects.",
    price: 199.99,
    course_duration: "9 Weeks",
    level: "Beginner to Advanced",
    Modules_count: 80,
    students_count: 1800,
    rating: 4.9,
    reviews_count: 250,
    category: "Web Development",
    image_url:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Alex Morgan",
    instructor_title: "Full Stack Developer & Instructor",
    instructor_image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Web Development Fundamentals",
      Modules: [
        "Internet basics: Client–Server architecture, HTTP/HTTPS, APIs",
        "How the web works (DNS, hosting, browsers)",
        "Git & GitHub (version control basics)",
        "VS Code & developer tools",
        "📌 Mini Project: Personal portfolio using basic HTML & CSS",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: Frontend Development – Core",
      Modules: [
        "HTML5: Semantic tags, forms, media",
        "CSS3: Selectors, box model, flexbox, grid, transitions/animations",
        "JavaScript (ES6+): Variables, functions, loops, arrays, objects",
        "DOM manipulation & events",
        "ES6 features (arrow functions, spread/rest, destructuring, promises, async/await)",
        "📌 Mini Project: To-do list app with JavaScript",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: Frontend Development – Advanced",
      Modules: [
        "Responsive Design: Media queries, Bootstrap/Tailwind CSS",
        "Modern JS Framework: React (Components, props, state)",
        "Hooks (useState, useEffect, useContext)",
        "React Router (navigation)",
        "State management (Redux / Context API)",
        "API integration with fetch/axios",
        "📌 Mini Project: Weather app with React + external API",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Backend Development – Core",
      Modules: [
        "Node.js: Basics, modules, npm, event loop",
        "Express.js: Routing, middleware, Handling requests/responses, RESTful APIs",
        "Authentication & Authorization: Sessions, JWT",
        "Error handling & security basics",
        "📌 Mini Project: REST API for a blog system",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Databases",
      Modules: [
        "Relational DB (SQL – MySQL/PostgreSQL): Tables, joins, CRUD, indexing",
        "NoSQL DB (MongoDB): Documents, collections, aggregation",
        "ORM/ODM: Sequelize (SQL) / Mongoose (MongoDB)",
        "📌 Mini Project: User registration + login system (with DB integration)",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Full Stack Integration",
      Modules: [
        "Connecting frontend (React) with backend (Express + Node)",
        "Fetching & sending data via REST APIs",
        "MVC architecture in projects",
        "File upload & handling",
        "Real-time apps (WebSockets, Socket.io basics)",
        "📌 Mini Project: Chat application (real-time)",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Deployment & DevOps Basics",
      Modules: [
        "Hosting frontend (Netlify, Vercel)",
        "Hosting backend (Heroku, Render, Railway, AWS)",
        "Databases in cloud (MongoDB Atlas, AWS RDS)",
        "Docker basics for containerization",
        "CI/CD basics with GitHub Actions",
        "📌 Mini Project: Deploy full-stack app to cloud",
      ],
    },
    {
      id: 8,
      section_title: "Module 8: Advanced Topics",
      Modules: [
        "GraphQL (Apollo, queries, mutations)",
        "Microservices architecture basics",
        "Testing: Jest, Mocha, Cypress",
        "Performance optimization & caching (Redis)",
        "Serverless functions (AWS Lambda, Vercel functions)",
      ],
    },
    {
      id: 9,
      section_title: "Module 9: Project",
      Modules: [
        "Build a complete production-level full stack app (e.g., E-commerce, social media, Project Management Tool)",
        "Features: authentication, CRUD, payments (Stripe/PayPal), deployment",
        "Document the project in GitHub with README & API docs",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Full Stack Development" },
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
                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-md">
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

            {/* Tabs */}
            <div className="max-w-7xl mx-auto border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-2 font-semibold text-base ${
                    activeTab === "overview"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Info
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 px-2 font-semibold text-base ${
                    activeTab === "curriculum"
                      ? "text-blue-600 border-b-2 border-blue-600"
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
                    "Master HTML, CSS, JavaScript, React, Node.js, Express, SQL/NoSQL",
                    "Build responsive, dynamic, and interactive web applications",
                    "Implement REST APIs and integrate frontend with backend",
                    "Deploy full-stack applications to cloud platforms",
                    "Learn version control, CI/CD, and DevOps basics",
                    "Complete real-world full-stack projects",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1" />
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
                        <ul className="px-6 py-4 space-y-2 bg-white">
                          {section.Modules.map((lesson, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                              {lesson.includes("📌") ? (
                                <Play className="w-4 h-4 text-blue-600 flex-shrink-0" />
                              ) : (
                                <BookOpen className="w-4 h-4 text-gray-400 flex-shrink-0" />
                              )}
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Course Details</h3>
              <div className="space-y-3">
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

              <div className="space-y-3 mt-4">
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
          fileName="fullstack-development.pdf" // 👈 change this dynamically per course
          displayName="fullstack-development.pdf" // optional pretty name
        />
      )}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share this course:</h3>
              <button className="w-full border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Share2 className="w-5 h-5" />
                Share Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
