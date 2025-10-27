"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPFioriDetails from "./CourseDetailsArea";
import RelatedCourses from "./related-courses";

const FIORICourse = () => {
  return (
    <>
      <Navbar />
      <SAPFioriDetails />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <RelatedCourses />
      <Footer />
    </>
  );
};

export default FIORICourse;