import React from "react";
// import Blog from "./Blog";
import Header from "./Header";
import Navbar from "../components/Navbar";
import ReadingBlog from "./ReadingBlog";
import RelatedBlogs from "./RelatedBlogs";
import Marketing from "./Marketing";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Header />
      <ReadingBlog />
      <RelatedBlogs />
      <Marketing />
      <Footer />
    </>
  );
}
