
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPECDetails from "./CourseDetailsArea";

const SFECCourse = () => {
  return (
    <>
      <Navbar />
      <SAPECDetails />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <Footer />
    </>
  );
};

export default SFECCourse;