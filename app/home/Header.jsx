import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div
        style={{
          background: "url(/images/newNavBg.png) no-repeat center ",
          backgroundSize: "cover",
        }}
        className="bg-center bg-cover bg-no-repeat  px-10 lg:px-0 md:h-[1118px] overflow-hidden"
      >
        <Navbar />

        <div className=" flex flex-col 2xl:flex-row lg:mx-12 mt-[110px]">
          <div className="px-4 sm:px-4 md:px-9  2xl:mt-16  mx-auto mb-8 md:mb-24 xl:mb-0">
            <h1 className=" text-4xl 2xl:text-[54px] text-white font-bold leading-[140%] mb-[34px] xl:w-[681px]">
              <span className="text-orange-400">Studying</span> online is now
              much easier
            </h1>
            <p className="text-white xl:w-[523px] leading-[160%] text-xl xl:text-2xl font-sans font-normal">
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </p>
            <div className="flex flex-col xl:flex-row text-center center mt-[52px]">
              <button
                href="#"
                className="text-white rounded-full text-xl w-2/3`` xl:text-2xl px-6  2xl:px-10 py-4 font-semibold bg-[#83d0d2] "
              >
                Join for free
              </button>
              <button className=" mx-auto mt-4 xl:mt-0 xl:mx-8 w-12 2xl:hidden h-12 bg-white rounded-full text-center ">
                <svg
                  className="h-4 w-12 text-[#23BDEE]  justify-center"
                  viewBox="0 0 24 24"
                  fill="#23BDEE"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
              <button className="mx-8 bg-white hidden 2xl:block rounded-full">
                <svg
                  className="h-8 w-16 text-[#23BDEE]  "
                  viewBox="0 0 24 24"
                  fill="#23BDEE"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
              <div className="mt-4">
                <p className="text-center text-xl  xl:text-2xl">
                  Watch how it works
                </p>
              </div>
            </div>
          </div>
          <div className="img mx-auto hidden md:block 2xl:hidden">
            <img
              src="/images/nav_girl.png"
              alt=""
              className="h-[800px] -mt-[80px]"
            />
          </div>
          <div className="hidden 2xl:block mt-2 2xl:w-[862px] 2xl:h-[900px] ">
            <Image
              src="/images/imageGirl.png"
              width={914}
              height={881}
              alt="girl"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
