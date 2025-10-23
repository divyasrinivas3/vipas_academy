"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AIMLCourseDetails from "./CourseDetailsArea";
import RelatedCourses from "../sales-distribution/RelatedCourses";

const AIMLCourse = () => {
  return (
    <>
      <Navbar />
      <AIMLCourseDetails />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <RelatedCourses />
      <Footer />
    </>
  );
};

export default AIMLCourse;