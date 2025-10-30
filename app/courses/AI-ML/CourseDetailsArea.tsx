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
  Award,
  CheckCircle,
  LocateIcon,
  MapPin,
  Mail,
} from "lucide-react";
import Breadcrumb from "@/app/components/breadcrumb";
import DownloadSyllabusModal from "@/app/components/DownloadSyllabusModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface Lesson {
  id: string;
  lesson_title: string;
  lesson_order: number;
}

interface CurriculumSection {
  id: string;
  section_title: string;
  section_order: number;
  Modules: Lesson[];
}

interface Inclusion {
  id: string;
  inclusion_text: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  course_duration: string;
  level: string;
  Modules_count: number;
  students_count: number;
  rating: number;
  reviews_count: number;
  category: string;
  language: string;
  image_url: string;
  instructor_name: string;
  instructor_title: string;
  instructor_image: string;
  course_overview: string;
  course_enroll: string;
  internship: string;
}

export default function AIMLDetailsArea() {
   const router = useRouter();
const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const course: Course = {
    id: "5",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Learn AI and ML concepts, algorithms, and applications to solve real-world business problems. Focus on supervised, unsupervised learning, and model deployment. ",
    course_overview:
      "Master AI & ML with hands-on projects, from data preprocessing to building predictive models. Apply algorithms and analytics to solve practical problems across industries. ",
    price: 299,
    course_duration: "3 Months Course",
    level: "Beginner to Advanced",
    Modules_count: 10,
    students_count: 1890,
    course_enroll: "/Enroll-Now.png",
    rating: 4.9,
    reviews_count: 340,
    internship: "3 Months Internship",
    category: "AI / ML",
    language: "English",
    image_url:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    instructor_name: "Dr. Alex Carter",
    instructor_title: "AI Researcher & Data Scientist",
    instructor_image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const inclusions: Inclusion[] = [
    { id: "i1", inclusion_text: "Lifetime access to recorded video Modules" },
    { id: "i2", inclusion_text: "Downloadable Python notebooks & datasets" },
    { id: "i3", inclusion_text: "Certificate of completion" },
    { id: "i4", inclusion_text: "Hands-on projects and assignments" },
    { id: "i5", inclusion_text: "Guidance on ML model deployment (MLOps)" },
  ];

  // AI/ML Curriculum
  const curriculum: CurriculumSection[] = [
    {
      id: "mod1",
      section_title: "Module 1: Introduction to AI & Machine Learning",
      section_order: 1,
      Modules: [
        {
          id: "l1",
          lesson_title: "What is Artificial Intelligence?",
          lesson_order: 1,
        },
        {
          id: "l2",
          lesson_title: "Real-world applications of AI",
          lesson_order: 2,
        },
        {
          id: "l3",
          lesson_title: "History and evolution of Machine Learning",
          lesson_order: 3,
        },
        {
          id: "l4",
          lesson_title: "AI vs ML vs Deep Learning",
          lesson_order: 4,
        },
        {
          id: "l5",
          lesson_title:
            "Overview of supervised, unsupervised & reinforcement learning",
          lesson_order: 5,
        },
      ],
    },
    {
      id: "mod2",
      section_title: "Module 2: Python for AI/ML",
      section_order: 2,
      Modules: [
        {
          id: "l6",
          lesson_title: "Introduction to Python programming",
          lesson_order: 1,
        },
        {
          id: "l7",
          lesson_title: "Data types, variables, and loops",
          lesson_order: 2,
        },
        {
          id: "l8",
          lesson_title: "Functions, modules, and libraries",
          lesson_order: 3,
        },
        {
          id: "l9",
          lesson_title: "Working with NumPy, Pandas, and Matplotlib",
          lesson_order: 4,
        },
        {
          id: "l10",
          lesson_title: "Data visualization and basic analytics",
          lesson_order: 5,
        },
      ],
    },
    {
      id: "mod3",
      section_title: "Module 3: Mathematics for Machine Learning",
      section_order: 3,
      Modules: [
        {
          id: "l11",
          lesson_title:
            "Linear Algebra essentials (vectors, matrices, operations)",
          lesson_order: 1,
        },
        {
          id: "l12",
          lesson_title:
            "Probability & Statistics (mean, variance, distributions)",
          lesson_order: 2,
        },
        {
          id: "l13",
          lesson_title: "Calculus for optimization (gradients, derivatives)",
          lesson_order: 3,
        },
        {
          id: "l14",
          lesson_title:
            "Basic concepts of optimization (cost function, gradient descent)",
          lesson_order: 4,
        },
      ],
    },
    {
      id: "mod4",
      section_title: "Module 4: Data Pre-processing & Feature Engineering",
      section_order: 4,
      Modules: [
        {
          id: "l15",
          lesson_title: "Data collection and cleaning",
          lesson_order: 1,
        },
        {
          id: "l16",
          lesson_title: "Handling missing data and outliers",
          lesson_order: 2,
        },
        {
          id: "l17",
          lesson_title: "Feature scaling, encoding, and transformation",
          lesson_order: 3,
        },
        {
          id: "l18",
          lesson_title: "Feature selection and dimensionality reduction (PCA)",
          lesson_order: 4,
        },
        {
          id: "l19",
          lesson_title: "Splitting datasets and model validation",
          lesson_order: 5,
        },
      ],
    },
    {
      id: "mod5",
      section_title: "Module 5: Supervised Learning",
      section_order: 5,
      Modules: [
        {
          id: "l20",
          lesson_title: "Linear & Logistic Regression",
          lesson_order: 1,
        },
        {
          id: "l21",
          lesson_title: "Decision Trees & Random Forests",
          lesson_order: 2,
        },
        {
          id: "l22",
          lesson_title: "K-Nearest Neighbors (KNN)",
          lesson_order: 3,
        },
        {
          id: "l23",
          lesson_title: "Support Vector Machines (SVM)",
          lesson_order: 4,
        },
        {
          id: "l24",
          lesson_title:
            "Model evaluation metrics (accuracy, precision, recall, F1-score)",
          lesson_order: 5,
        },
      ],
    },
    {
      id: "mod6",
      section_title: "Module 6: Unsupervised Learning",
      section_order: 6,
      Modules: [
        {
          id: "l25",
          lesson_title: "Clustering algorithms (K-Means, Hierarchical, DBSCAN)",
          lesson_order: 1,
        },
        {
          id: "l26",
          lesson_title: "Dimensionality reduction (PCA, t-SNE)",
          lesson_order: 2,
        },
        {
          id: "l27",
          lesson_title: "Association rule learning (Apriori, Eclat)",
          lesson_order: 3,
        },
        { id: "l28", lesson_title: "Anomaly detection", lesson_order: 4 },
      ],
    },
    {
      id: "mod7",
      section_title: "Module 7: Deep Learning",
      section_order: 7,
      Modules: [
        {
          id: "l29",
          lesson_title: "Introduction to Neural Networks",
          lesson_order: 1,
        },
        {
          id: "l30",
          lesson_title:
            "Activation functions, loss functions, and backpropagation",
          lesson_order: 2,
        },
        {
          id: "l31",
          lesson_title: "Building models using TensorFlow or PyTorch",
          lesson_order: 3,
        },
        {
          id: "l32",
          lesson_title: "Convolutional Neural Networks (CNNs) – for image data",
          lesson_order: 4,
        },
        {
          id: "l33",
          lesson_title:
            "Recurrent Neural Networks (RNNs), LSTM, GRU – for sequence data",
          lesson_order: 5,
        },
      ],
    },
    {
      id: "mod8",
      section_title: "Module 8: Natural Language Processing (NLP)",
      section_order: 8,
      Modules: [
        {
          id: "l34",
          lesson_title:
            "Text preprocessing (tokenization, stemming, lemmatization)",
          lesson_order: 1,
        },
        {
          id: "l35",
          lesson_title: "Bag of Words, TF-IDF, and Word Embeddings",
          lesson_order: 2,
        },
        {
          id: "l36",
          lesson_title: "Sentiment Analysis and Text Classification",
          lesson_order: 3,
        },
        {
          id: "l37",
          lesson_title: "Language models and Transformers (BERT, GPT overview)",
          lesson_order: 4,
        },
      ],
    },
    {
      id: "mod9",
      section_title: "Module 9: Model Deployment & MLOps",
      section_order: 9,
      Modules: [
        {
          id: "l38",
          lesson_title: "Model saving and versioning",
          lesson_order: 1,
        },
        {
          id: "l39",
          lesson_title: "REST API deployment using Flask or FastAPI",
          lesson_order: 2,
        },
        {
          id: "l40",
          lesson_title: "Introduction to MLOps pipelines (CI/CD for ML)",
          lesson_order: 3,
        },
        {
          id: "l41",
          lesson_title: "Model monitoring and retraining",
          lesson_order: 4,
        },
      ],
    },
    {
      id: "mod10",
      section_title: "Module 10: Capstone Projects & Case Studies",
      section_order: 10,
      Modules: [
        {
          id: "l42",
          lesson_title:
            "Predictive Analytics (sales, demand, or churn prediction)",
          lesson_order: 1,
        },
        {
          id: "l43",
          lesson_title: "Image Classification using CNNs",
          lesson_order: 2,
        },
        {
          id: "l44",
          lesson_title: "Sentiment Analysis on social media data",
          lesson_order: 3,
        },
        { id: "l45", lesson_title: "Chatbot using NLP", lesson_order: 4 },
        {
          id: "l46",
          lesson_title: "Recommendation System (movies, products, or courses)",
          lesson_order: 5,
        },
      ],
    },
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    newExpanded.has(sectionId)
      ? newExpanded.delete(sectionId)
      : newExpanded.add(sectionId);
    setExpandedSections(newExpanded);
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: course.title },
  ];

  return (
    <div className="min-h-screen mt-9 bg-white">
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-theme-teal-light text-theme-teal text-sm font-medium rounded-md">
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
                  <div className="flex items-center">
                    {/* {[...Array(5)].map((_, i) => (
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
                  <span className="text-gray-900 font-semibold">
                    {course.rating}
                  </span>
                  <span className="text-gray-500">
                    ({course.reviews_count} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{course.students_count.toLocaleString()} students</span>
                </div> */}
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src={course.instructor_image}
                  alt={course.instructor_name}
                  width={1000}
                  height={400}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-semibold">
                    {course.instructor_name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {course.instructor_title}
                  </p>
                </div>
              </div>

              {/* Course Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={course.image_url}
                  alt={course.title}
                  width={1000}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-2 font-semibold text-base transition-colors relative ${
                    activeTab === "overview"
                      ? "text-theme-teal"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Info
                  {activeTab === "overview" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-teal"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 px-2 font-semibold text-base transition-colors relative ${
                    activeTab === "curriculum"
                      ? "text-theme-teal"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Curriculum
                  {activeTab === "curriculum" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-teal"></div>
                  )}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "overview" && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Course Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.course_overview}
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    What You&apos;ll Learn
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Understand the end-to-end material management process in SAP MM.",
                      "Manage procurement, inventory, and vendor data effectively.",
                      "Gain hands-on experience with purchase orders, goods receipts, and invoice verification.",
                      "Learn valuation, account determination, and stock transfers.",
                      "Understand SAP integration with FI, SD, and WM modules.",
                      "Prepare for SAP MM certification and practical job scenarios.",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-theme-teal mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                    This Course Includes
                  </h4>
                  <div className="space-y-3">
                    {inclusions.map((inc) => (
                      <div
                        key={inc.id}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <Check className="w-5 h-5 text-theme-teal flex-shrink-0" />
                        <span>{inc.inclusion_text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
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
                          className="w-full px-6 py-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <ChevronDown
                              className={`w-5 h-5 text-gray-600 transition-transform ${
                                expandedSections.has(section.id)
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                            <h4 className="font-semibold text-gray-900 text-left">
                              {section.section_title}
                            </h4>
                          </div>
                          <span className="text-sm text-gray-500">
                            {section.Modules.length} Modules
                          </span>
                        </button>
                        {expandedSections.has(section.id) && (
                          <div className="divide-y divide-gray-100">
                            {section.Modules.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-center gap-4">
                                  <Play className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-700">
                                    {lesson.lesson_title}
                                  </span>
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
                      fileName="AI-ML.pdf" // 👈 change this dynamically per course
                      displayName="AIML_Course.pdf" // optional pretty name
                    />
                  )}
                </div>
              </div>

              {/* Share Course */}
              {/* Contact Us Box */}
              <div className="bg-gray-50 border border-gray-400 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Contact Us
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <PhoneCall className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <p className="text-gray-500 text-sm">For Support</p>
                      <p className="text-gray-900 font-semibold text-base">
                        +91 99666 52099
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <p className="text-gray-500 text-sm">Send Message</p>
                      <p className="text-gray-900 font-semibold text-base break-all">
                        vipasacademy@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <p className="text-gray-500 text-sm">Our Location</p>
                      <p className="text-gray-900 font-semibold text-base">
                        Andhra Pradesh , India, 517501
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
