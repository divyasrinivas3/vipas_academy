
"use client";
import React from "react";
import MarqueeOne from "@/app/common/MarqueeOne"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FullStackCourseDetails from "./CourseDetailsArea";
import RelatedCourses from "./related-courses";

const FullStackDevelopmentCourse = () => {
  return (
    <>
      <Navbar />
      <FullStackCourseDetails/>
      <MarqueeOne style_2={true} />
      <RelatedCourses />
      <Footer />
    </>
  );
};

export default FullStackDevelopmentCourse;