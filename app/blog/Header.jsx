import React from "react";

function Header() {
  return (
    <div className=" bg-indigo-300 bg-opacity-20">
      <br /> <br />
      {/* why swift ui should be on the radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 lg:mx-16 xl:mx-20 gap-8 xl:gap-16 2xl:my-[70px] ">
        <div className="">
          <p className="text-black text-2xl ">
            {" "}
            By Themadbrains in{" "}
            <span className="text-teal-400">inspiration</span>{" "}
          </p>
          <br />
          <h1 className="font-semibold text-2xl md:text-3xl xl:text-4xl text-purple-900">
            Why Swift UI Should Be on the <br /> Radar of Every Mobile <br />{" "}
            Developer
          </h1>
          <br />
          <p className=" text-lg xl:text-xl text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempos Lorem ipsum dolor sitamet, <br /> consectetur
            adipiscing elit, sed do eiusmod tempor
          </p>
          <br />
          <button className="bg-teal-400 text-white rounded-2xl px-11 py-4 text-base font-bold">
            Start learning now
          </button>
        </div>
        <div className="lg:mt-4 xl:mt-0">
          <img
            className="rounded-xl  lg:h-[350px]  xl:h-[390px] 2xl:w-[779px] 2xl:h-[526px] "
            src="/images/testiLaptop.png"
            alt=""
          />
        </div>
      </div>
      <br /> <br />
    </div>
  );
}

export default Header;
