import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "./Header";
import Radar from "./Radar";
import RelatedBlogs from "./RelatedBlogs";

export default function page() {
  return (
    <>
      <Navbar />
      <Header />
      <Radar />
      <RelatedBlogs />
      <Footer />
    </>
  );
}
