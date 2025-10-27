"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPBTPDetails from "./CourseDetailsArea";
import RelatedCourses from "./related-courses";

const AIMLCourse = () => {
  return (
    <>
      <Navbar />
    <MarqueeOne style_2={true} />
      <SAPBTPDetails />         {/* SAP SD content */}
      <RelatedCourses />
      <Footer />
    </>
  );
};

export default AIMLCourse;