import React from "react";
import CardBlue from "../components/search/CardBlue";
import Link from "next/link";

function Marketing() {
  return (
    <section className=" bg-indigo-300 bg-opacity-20 pt-[97px] pb-[213px]">
      <div className="mx-6 lg:mx-16 xl:mx-[137px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-[30px]  ">
            Recommended for you
          </div>
          <div className="text-light-teal text-[20px] font-bold  hidden md:block">
            <Link href="/course/detail">See all</Link>
          </div>
        </div>
      </div>
      <CardBlue />
    </section>
  );
}

export default Marketing;
