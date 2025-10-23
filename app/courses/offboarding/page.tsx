
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPOFBDetails from "./CourseDetailsArea";

const OffboardingCourse = () => {
  return (
    <>
      <Navbar />
      <SAPOFBDetails />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <Footer />
    </>
  );
};

export default OffboardingCourse;