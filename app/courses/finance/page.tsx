"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPFICODetailsArea from "./CourseDetailsArea"
import RelatedCourses from "../sales-distribution/RelatedCourses";

const SalesDistributionCourse = () => {
  return (
    <>
      <Navbar />
      <SAPFICODetailsArea />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <RelatedCourses />
      <Footer />
    </>
  );
};

export default SalesDistributionCourse;