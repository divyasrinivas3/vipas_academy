
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPPMGMDetails from "./CourseDetailsArea";

const SFPMGMCourse = () => {
  return (
    <>
      <Navbar />
      <SAPPMGMDetails />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <Footer />
    </>
  );
};

export default SFPMGMCourse;