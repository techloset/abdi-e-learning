import React from "react";
import CardBlue from "../components/search/CardBlue";

function Marketing() {
  return (
    <section className="bg-indigo-300 bg-opacity-20  py-[90px]">
      <div className="mx-6 lg:mx-16 xl:mx-[137px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-[30px]  ">
            Reccomended for you
          </div>
          <div className="text-teal-400 text-[20px] font-bold">See all</div>
        </div>
      </div>
      <CardBlue />
    </section>
  );
}

export default Marketing;
