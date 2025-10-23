
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPONBDetails from "./CourseDetailsArea";

const onboardingCourse = () => {
  return (
    <>
      <Navbar />
      <SAPONBDetails />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <Footer />
    </>
  );
};

export default onboardingCourse;