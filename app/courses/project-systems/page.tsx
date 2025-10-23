
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPPSDetails from "./CourseDetailsArea";

const ProjectSystemsCourse = () => {
  return (
    <>
      <Navbar />
      <SAPPSDetails />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <Footer />
    </>
  );
};

export default ProjectSystemsCourse;