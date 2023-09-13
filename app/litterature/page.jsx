import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "./Header";
import Cards from "./Cards";

function page() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Footer />
    </>
  );
}

export default page;
