
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import SAPSDDetailsArea from "@/app/courses/sales-distribution/CoursesDetailsArea"
import RelatedCourses from "@/app/courses/sales-distribution/RelatedCourses"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const SalesDistributionCourse = () => {
  return (
    <>
      <Navbar />
      <SAPSDDetailsArea />         {/* SAP SD content */}
      <RelatedCourses />           {/* Related courses */}
      <Footer />
    </>
  );
};

export default SalesDistributionCourse;