
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPPMGMDetails from "./CourseDetailsArea";
import RelatedCourses from "./related-courses";

const SFPMGMCourse = () => {
  return (
    <>
      <Navbar />
      <SAPPMGMDetails />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <RelatedCourses/>
      <Footer />
    </>
  );
};

export default SFPMGMCourse;