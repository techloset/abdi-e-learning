import React from "react";
import Card from "../blog/components/Card";

function LastTwo() {
  return (
    <>
      <section className="py-[90px]">
        <div className="mx-6 lg:mx-16 xl:mx-[137px]">
          <div className="flex justify-between">
            <div className="font-medium text-xl md:text-[30px]  ">
              The course in personal development
            </div>
            <div className="text-[#49BBBD] text-[20px] font-bold hidden md:block">
              See all
            </div>
          </div>
        </div>
        <Card />
      </section>
      <section className="py-[90px] bg-[#9DCCFF] bg-opacity-20">
        <div className="mx-6 lg:mx-16 xl:mx-[137px]">
          <div className="flex justify-between">
            <div className="font-medium text-xl md:text-[30px]  ">
              Student are viewing{" "}
            </div>
            <div className="text-[#49BBBD] text-[20px] font-bold  hidden md:block">
              See all
            </div>
          </div>
        </div>
        <Card />
      </section>
    </>
  );
}

export default LastTwo;
