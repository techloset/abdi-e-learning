import React from "react";
import Navbar from "../components/Navbar";
import Header from "./Header";
import Footer from "../components/Footer";
import OnlineCoaching from "./OnlineCoaching";
import Accordian from "./Accordian";
import Students from "./Students";
import BottomCards from "./BottomCards";

function page() {
  return (
    <>
      <Navbar />
      <Header />
      <OnlineCoaching />
      <Accordian />
      <Students />
      <BottomCards />
      <Footer />
    </>
  );
}

export default page;
