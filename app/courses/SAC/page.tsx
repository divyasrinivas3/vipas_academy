
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SACSAPPlanningDetails from "./CourseDetailsArea";
import RelatedCourses from "./related-courses";

const SACCourse = () => {
  return (
    <>
      <Navbar />
      <SACSAPPlanningDetails/>         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <RelatedCourses />
      <Footer />
    </>
  );
};

export default SACCourse;