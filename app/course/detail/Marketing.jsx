import React from "react";
import Card from "../../components/courseDetail/Card";

function Marketing() {
  return (
    <section className="bg-indigo-300 bg-opacity-20  py-[90px]">
      <div className="mx-6 lg:mx-16 xl:mx-[137px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-[30px]  ">
            Marketing Articles
          </div>
          <div className="text-light-teal text-[20px] font-bold">See all</div>
        </div>
      </div>
      <Card />
    </section>
  );
}

export default Marketing;
