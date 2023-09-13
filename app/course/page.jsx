import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "./Header";
import Choice from "./Choice";
import Recco from "./Recco";
import GetChoice from "./GetChoice";
import OnlineCoaching from "./OnlineCoaching";
import LastTwo from "./LastTwo";

function page() {
  return (
    <>
      <Navbar />
      <Header />
      <Choice />
      <Recco />
      <GetChoice />
      <OnlineCoaching />
      <LastTwo />
      <Footer />
    </>
  );
}

export default page;
