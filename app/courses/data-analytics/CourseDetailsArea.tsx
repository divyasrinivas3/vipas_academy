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
export default function DataAnalyticsCourseDetails() {
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
    title: "Data Analytics Course",
    description:"Learn advanced Excel and Power BI techniques to analyze, visualize, and interpret data effectively. Focus on dashboards, PivotTables, Power Query, and interactive reporting. ",
    course_overview:"Master Excel and Power BI for business analytics. Gain hands-on experience with data cleaning, visualization, and reporting to make data-driven decisions. ",
    course_duration: "3 Months Course",
    internship:"3 Months internship",
    course_enroll:"/Enroll-Now.png",
    level: "Beginner to Advanced",
    Modules_count: 18,
    students_count: 1500,
    rating: 4.8,
    reviews_count: 200,
    category: "Data Analytics",
    image_url:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Emily Johnson",
    instructor_title: "Data Analytics Expert",
    instructor_image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const curriculum = [
    {
      id: 1,
      section_title: "Module 1: Introduction to Data Analytics",
      Modules: [
        "What are Data Analytics? (Descriptive, Diagnostic, Predictive, Prescriptive)",
        "Role of data in decision-making",
        "Data Analyst vs Data Scientist vs Business Analyst",
        "Tools used in Data Analytics (Excel, SQL, Python, Power BI, Tableau, R)",
        "Role of Excel & Power BI in analytics",
        "Differences & integration of Excel and Power BI",
      ],
    },
    {
      id: 2,
      section_title: "Module 2: Statistics & Data Foundations",
      Modules: [
        "Types of data (structured vs unstructured, categorical vs numerical)",
        "Data collection & sources",
        "Descriptive statistics (mean, median, mode, Range, variance, standard deviation)",
        "Probability basics",
        "Distributions",
        "Standardization, Normalization, Z-score",
        "Population Vs Sample, Confidence Interval",
        "Hypothesis testing (t-test, chi-square test, ANOVA)",
        "Correlation vs causation",
        "📌 Mini Project: Analyze survey data using descriptive statistics",
      ],
    },
    {
      id: 3,
      section_title: "Module 3: Excel Basics for Data Analytics",
      Modules: [
        "Excel interface & navigation",
        "Data types, formatting, data validation",
        "Basic formulas & functions (SUM, AVERAGE, COUNT, IF, VLOOKUP/XLOOKUP, INDEX, MATCH)",
        "Named ranges & structured references",
        "📌 Hands-on: Create a sales tracker using Excel",
      ],
    },
    {
      id: 4,
      section_title: "Module 4: Data Cleaning & Preparation",
      Modules: [
        "Sorting & filtering data",
        "Removing duplicates & blanks",
        "Text functions (LEFT, RIGHT, MID, TRIM, CONCAT, TEXTJOIN)",
        "Date & time functions",
        "Flash Fill & Quick Analysis tools",
        "📌 Hands-on: Clean raw HR data for analysis",
      ],
    },
    {
      id: 5,
      section_title: "Module 5: Exploratory Data Analysis in Excel",
      Modules: [
        "Conditional formatting",
        "PivotTables & PivotCharts",
        "Grouping & summarizing data",
        "Calculated fields in PivotTables",
        "Slicers & timelines",
        "📌 Hands-on: Build a sales dashboard using PivotTables",
      ],
    },
    {
      id: 6,
      section_title: "Module 6: Advanced Excel for Analytics",
      Modules: [
        "Advanced formulas (ARRAY formulas, IFERROR, SUMPRODUCT)",
        "Dynamic arrays (FILTER, SORT, UNIQUE, SEQUENCE)",
        "What-If Analysis (Scenario Manager, Goal Seek, Data Tables)",
        "Solver for optimization",
        "Excel Tables & structured references",
        "📌 Hands-on: Perform financial forecasting using What-If Analysis",
      ],
    },
    {
      id: 7,
      section_title: "Module 7: Data Visualization in Excel",
      Modules: [
        "Best practices for charts (bar, line, pie, combo, waterfall)",
        "Sparklines & conditional formatting for dashboards",
        "Interactive dashboards with form controls",
        "KPIs with Excel charts",
        "📌 Hands-on: Create an interactive management dashboard in Excel",
      ],
    },
    {
      id: 8,
      section_title: "Module 8: SQL for Data Analytics",
      Modules: [
        "Introduction to databases & SQL",
        "SELECT, WHERE, ORDER BY",
        "Aggregate functions (SUM, COUNT, AVG, MAX, MIN)",
        "GROUP BY, HAVING",
        "Joins (INNER, LEFT, RIGHT, FULL)",
        "Subqueries & CTEs",
        "Window functions (RANK, ROW_NUMBER, PARTITION BY)",
        "📌 Mini Project: Query a sales database to find top-performing products",
      ],
    },
    {
      id: 9,
      section_title: "Module 9: Introduction to Power BI",
      Modules: [
        "Power BI ecosystem (Desktop, Service, Mobile, Gateway)",
        "Data analytics workflow in Power BI",
        "Connecting Power BI with Excel & databases",
      ],
    },
    {
      id: 10,
      section_title: "Module 10: Power BI Data Preparation (Power Query)",
      Modules: [
        "Importing data from multiple sources",
        "Data cleaning & transformation with Power Query Editor",
        "M Language basics",
        "Combining multiple queries (merge, append)",
        "📌 Hands-on: Prepare and clean raw sales data",
      ],
    },
    {
      id: 11,
      section_title: "Module 11: Data Modeling in Power BI",
      Modules: [
        "Data relationships (1-to-1, 1-to-many, many-to-many)",
        "Star vs snowflake schema",
        "Calculated columns & measures",
        "DAX (Data Analysis Expressions) basics",
        "Aggregation functions (SUM, COUNT, AVERAGE)",
        "Time intelligence (YTD, MTD, QTD)",
        "Filter functions (CALCULATE, FILTER, ALL)",
        "📌 Hands-on: Build a sales model with DAX measures",
      ],
    },
    {
      id: 12,
      section_title: "Module 12: Data Visualization in Power BI",
      Modules: [
        "Charts & visuals (bar, line, scatter, pie, tree map, waterfall, map)",
        "Custom visuals & marketplace",
        "Formatting visuals & reports",
        "Bookmarks, drill-through, tooltips",
        "Dashboards vs reports",
        "📌 Hands-on: Create an interactive sales dashboard with drill-downs",
      ],
    },
    {
      id: 13,
      section_title: "Module 13: Advanced Analytics in Power BI",
      Modules: [
        "KPIs & scorecards",
        "Forecasting & trend lines",
        "Decomposition tree",
        "Q&A (natural language queries)",
        "Row-level security (RLS)",
        "📌 Hands-on: Build a financial forecast dashboard with RLS",
      ],
    },
    {
      id: 14,
      section_title: "Module 14: Power BI Service & Collaboration",
      Modules: [
        "Publishing reports to Power BI Service",
        "Workspaces & apps",
        "Sharing reports & dashboards securely",
        "Scheduled refresh & data gateways",
        "Power BI with Microsoft Teams & Excel",
        "📌 Hands-on: Publish a dashboard & set up scheduled refresh",
      ],
    },
    {
      id: 15,
      section_title: "Module 15: Advanced Analytics Concepts",
      Modules: [
        "Time series analysis (trends, seasonality, moving averages)",
        "Forecasting techniques",
        "Clustering & segmentation (K-means basics)",
        "Regression analysis (linear, logistic)",
        "Introduction to machine learning for analysts",
        "📌 Mini Project: Forecast monthly sales using time series analysis",
      ],
    },
    {
      id: 16,
      section_title: "Module 16: Big Data & Cloud Analytics (Introductory)",
      Modules: [
        "Basics of Big Data (Hadoop, Spark overview)",
        "Cloud data platforms (AWS, Azure, Google BigQuery)",
        "Connecting BI tools to cloud data sources",
      ],
    },
    {
      id: 17,
      section_title: "Module 17: Soft Skills for Data Analysts",
      Modules: [
        "Problem-solving & critical thinking",
        "Business domain knowledge (finance, marketing, HR, operations)",
        "Communication & storytelling with data",
        "Writing effective reports",
      ],
    },
    {
      id: 18,
      section_title: "Module 18: Capstone Projects",
      Modules: [
        "Retail Analytics Project → Analyze sales & customer data, create dashboards",
        "HR Analytics Project → Predict attrition & create workforce reports",
        "Finance Analytics Project → Budget forecasting & variance analysis",
        "Marketing Analytics Project → Campaign performance analysis",
      ],
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Data Analytics" },
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
                <p className="text-gray-900 leading-relaxed mb-6">
                  {course.course_overview}
                </p>

                <h4 className="text-xl font-bold mb-4 mt-8">
                  What You&apos;ll Learn
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Perform data analysis using Excel, SQL, and Power BI",
                    "Understand statistics and data foundations for analytics",
                    "Clean, prepare, and visualize data",
                    "Build reports, dashboards, and interactive KPIs",
                    "Implement predictive analytics and forecasting",
                    "Complete real-world capstone projects",
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
                                  <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
                                    <div className="mb-6">
                                      <div className="flex items-baseline gap-2 mb-4">
                                        <Image
                                          src={course.course_enroll}
                                          alt={course.title}
                                          width={"400"}
                                          height={300}
                                          className="w-full h-60 object-cover"
                                        />
                                      </div>
                    
                                      <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3 text-gray-900">
                                          <Clock className="w-5 h-5 text-gray-900" />
                                          <span>{course.course_duration}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-900">
                                          <Award className="w-5 h-5 text-gray-900" />
                                          <span>{course.internship}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-900">
                                          <BarChart3 className="w-5 h-5 text-gray-900" />
                                          <span>{course.level}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-900">
                                          <BookOpen className="w-5 h-5 text-gray-900" />
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
                                        className="bg-teal-500 hover:text-white hover:bg-blue-900 text-white px-8 w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                                        onClick={() => setShowModal(true)}
                                      >
                                        <Download size={20} />
                                        Download Syllabus
                                      </button>

                  {showModal && (
                    <DownloadSyllabusModal
                      onClose={() => setShowModal(false)}
                      fileName=".pdf" // 👈 change this dynamically per course
                      displayName="SAP Data_Analytics Course.pdf" // optional pretty name
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
