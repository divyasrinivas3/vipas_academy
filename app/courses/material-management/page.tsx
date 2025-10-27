
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPMMDetailsArea from "./CoursesDetailsArea";
import RelatedCourses from "./related-courses";
const MaterialmanagementCourse = () => {
  return (
    <>
      <Navbar />
       <MarqueeOne style_2={true} />
      <SAPMMDetailsArea />         {/* SAP SD content */}
      <RelatedCourses />
      <Footer />
    </>
  );
};

export default MaterialmanagementCourse;