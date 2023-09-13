import React from "react";
import Header from "./Header";
import OurSuccess from "./OurSuccess";
import Totc from "./Totc";
import PhysicalClassroom from "./PhysicalClassroom";
import OurFeatures from "./OurFeatures";
import ToolsForTeachers from "./ToolsForTeachers";
import Assesment from "./Assesment";
import ClassManagement from "./ClassManagement";
import OneOnOne from "./OneOnOne";
import Explore from "./Explore";
import Testimonial from "./Testimonial";
import LatestNews from "./LatestNews";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      <Header />
      <OurSuccess />
      <Totc />
      <PhysicalClassroom />
      <OurFeatures />
      <ToolsForTeachers />
      <Assesment />
      <ClassManagement />
      <OneOnOne />
      <Explore />
      <Testimonial />
      <LatestNews />
      <Footer />
    </>
  );
}

export default page;
