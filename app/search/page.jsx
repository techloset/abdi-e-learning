import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "./Header";
import Card from "./components/Card";
import KnowAbout from "./KnowAbout";
import Marketing from "./Marketing";
import RealCreators from "./RealCreators";
import WhatOur from "./WhatOur";
import TopEdu from "./TopEdu";

function page() {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <KnowAbout />
      <Marketing />
      <RealCreators />
      <WhatOur />
      <TopEdu />
      <Footer />
    </>
  );
}

export default page;
