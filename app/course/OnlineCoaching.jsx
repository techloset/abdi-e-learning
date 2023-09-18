import Link from "next/link";
import React from "react";

function OnlineCoaching() {
  return (
    <section>
      <div className="bg-gray-800 text-white flex flex-col justify-center  px-6 md:px-0 h-[459px] md:mx-16 mx-6 mb-[90px] 2xl:mx-[120px] rounded-[37px] ">
        <br />
        <br />
        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-center">
          Online coaching lessons for remote learning.
        </h1>{" "}
        <br />
        <p className=" md:text-xl xl:text-2xl max-w-[1259px] text-center leading-[180%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </p>{" "}
        <br />
        <br />
        <button className="bg-teal-400 w-[236px] h-[63px] rounded-xl mx-auto">
          <Link href="/course/detail">Start learning now</Link>
        </button>
        <br />
        <br /> <br />
      </div>
    </section>
  );
}

export default OnlineCoaching;
