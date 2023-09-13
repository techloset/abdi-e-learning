import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "./Header";
import Overview from "./Overview";
import Marketing from "./Marketing";
import PhysicalClassroom from "./PhysicalClassroom";
import TopEdu from "./TopEdu";

function page() {
  return (
    <>
      <Navbar />
      <Header />
      <Overview />
      <Marketing />
      <PhysicalClassroom />
      <TopEdu />
      <Footer />
    </>
  );
}

export default page;
