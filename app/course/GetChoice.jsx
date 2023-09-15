import React from "react";
import Card from "../components/blog/Card";

function GetChoice() {
  return (
    <section className="py-[90px]">
      <div className="mx-6 lg:mx-16 xl:mx-[137px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-[30px]  ">
            Get choice of your course
          </div>
          <div className="text-teal-400 text-[20px] font-bold  hidden md:block">
            See all
          </div>
        </div>
      </div>
      <Card />
    </section>
  );
}

export default GetChoice;