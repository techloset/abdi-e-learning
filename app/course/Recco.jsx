import React from "react";
import Card from "../blog/components/Card";

function Recco() {
  return (
    <section className=" bg-[#9DCCFF] bg-opacity-20">
      <div className="mx-6 lg:mx-16 xl:mx-[137px] pt-[80px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-[30px]  ">
            Recommended for you
          </div>
          <div className="text-[#49BBBD] text-[20px] font-bold  hidden md:block">
            See all
          </div>
        </div>
      </div>
      <Card />

      <div className="flex justify-end mt-[50px] pb-[113px] me-[145px]">
        <button className="bg-[#58babb] bg-opacity-70 hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Recco;
