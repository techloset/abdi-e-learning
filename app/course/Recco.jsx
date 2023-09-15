import React from "react";
import Card from "../components/blog/Card";

function Recco() {
  return (
    <section className=" bg-indigo-300 bg-opacity-20">
      <div className="mx-6 lg:mx-16 xl:mx-[137px] pt-[80px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-[30px]  ">
            Recommended for you
          </div>
          <div className="text-teal-400 text-[20px] font-bold  hidden md:block">
            See all
          </div>
        </div>
      </div>
      <Card />

      <div className="flex justify-end mt-[50px] pb-[113px] me-[145px]">
        <button className="bg-teal-400 bg-opacity-70 hover:bg-teal-600 text-white py-2 px-4 rounded font-bold mr-2">
          <img src="/images/leftArrow.png" alt="" />
        </button>
        <button className="bg-teal-400 hover:bg-teal-600 text-white py-2 px-4 rounded font-bold">
          <img src="/images/leftArrow.png" alt="" className="rotate-180" />
        </button>
      </div>
    </section>
  );
}

export default Recco;
