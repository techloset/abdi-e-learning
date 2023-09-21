import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className=" bg-indigo-300 bg-opacity-20">
      {/* why swift ui should be on the radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 lg:mx-16 xl:mx-20 2xl:mx-[118px] gap-8 xl:gap-6 2xl:py-[70px] ">
        <div className="text">
          <p className="text-black text-2xl ">
            By Themadbrains in{" "}
            <span className="text-light-teal">inspiration</span>
          </p>

          <h1 className="font-semibold text-2xl md:text-3xl xl:text-[44px] mt-6 !leading-normal text-normal-purple max-w-[670px]">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>

          <p className=" text-lg xl:text-2xl text-gray-600 !leading-[180%] mt-[14px] mb-[25px] max-w-[700px] tracking-[0.48px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>

          <button className="bg-light-teal text-white rounded-2xl px-11 py-4 text-base font-bold">
            <Link href="/blog/detail">Start learning now</Link>
          </button>
        </div>
        <div className="lg:mt-4 xl:mt-0 flex items-center">
          <img
            className="rounded-xl  lg:h-[350px]  xl:h-[390px] 2xl:w-[779px] 2xl:h-[526px] "
            src="/images/testiLaptop.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
