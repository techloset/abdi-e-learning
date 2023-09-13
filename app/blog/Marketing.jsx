import React from "react";
import Card from "./components/Card";

function Marketing() {
  return (
    <section>
      <div className="mx-6 lg:mx-16 xl:mx-[137px] pt-[80px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-[30px]  ">
            Marketing Articles
          </div>
          <div className="text-[#49BBBD] text-[20px] font-bold">See all</div>
        </div>
      </div>
      <Card />
    </section>
  );
}

export default Marketing;
