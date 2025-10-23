
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SAPMMDetailsArea from "./CoursesDetailsArea";
import Breadcrumb from "@/app/components/breadcrumb";

const MaterialmanagementCourse = () => {
  return (
    <>
      <Navbar />
     
      <SAPMMDetailsArea />         {/* SAP SD content */}
      <MarqueeOne style_2={true} />
      <Footer />
    </>
  );
};

export default MaterialmanagementCourse;