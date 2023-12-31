import React from "react";
import Card from "../components/blog/Card";
import Link from "next/link";

function Recco() {
  return (
    <section className=" bg-indigo-300 bg-opacity-20">
      <div className="mx-6 lg:mx-16 xl:mx-[137px] pt-[80px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-[30px]  ">
            Recommended for you
          </div>
          <div className="text-light-teal text-[20px] font-bold  hidden md:block">
            <Link href="/course/detail">See all</Link>
          </div>
        </div>
      </div>
      <Card />

      <div className="flex justify-end mt-[50px] pb-[113px] me-[145px]">
        <button className="bg-light-teal bg-opacity-70 hover:bg-teal-600  text-white h-[50px] w-[50px] flex justify-center items-center rounded font-bold mr-2">
          <img src="/images/leftArrow.png" alt="" />
        </button>
        <button className="bg-light-teal hover:bg-teal-600  text-white h-[50px] w-[50px] flex justify-center items-center rounded font-bold">
          <img src="/images/leftArrow.png" alt="" className="rotate-180" />
        </button>
      </div>
    </section>
  );
}

export default Recco;
