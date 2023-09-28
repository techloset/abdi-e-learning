import React from "react";

function KnowAbout() {
  return (
    <section className="mb-[65px]">
      <div className="bg-indigo-300 bg-opacity-20 mx-12 lg:mx-28 2xl:mx-[119px] lg:p-14 2xl:px-[120px] 2xl:py-8 p-6 rounded-[20px] flex-col xl:flex-row justify-between flex gap-8">
        <div className="flex flex-col justify-center">
          <p className="font-semibold lg:text-3xl 2xl:w-[331px] !leading-normal text-2xl mb-6">
            Know about learning learning platform
          </p>

          <div className="flex mb-[10px] items-start">
            <div className="bg-light-teal mt-2 me-4 rounded-full w-5 h-3 lg:w-4 lg:h-4  md:w-4 md:h-4"></div>
            <p className="lg:text-lg !leading-[32px]">
              Free E-book, video & consolation
            </p>
          </div>

          <div className="flex mb-[10px]">
            <div className="bg-light-teal mt-2 me-4 rounded-full w-5 h-3  md:w-4 md:h-4 lg:w-4 lg:h-4"></div>
            <p className="lg:text-lg !leading-[32px]">
              Top instructors from around world
            </p>
          </div>

          <div className="flex mb-[25px]">
            <div className="bg-light-teal mt-2 me-4 rounded-full w-4 h-3  md:w-4 md:h-4 lg:w-4 lg:h-4"></div>
            <p className="lg:text-lg !leading-[32px]">
              Top courses from your team
            </p>{" "}
          </div>

          <button className="lg:text-2xl text-xl font-extrabold text-white rounded-xl w-[309px] h-[63px] bg-light-teal ">
            Start learning now
          </button>
        </div>

        <div className="xl:w-1/2">
          <img
            src="/images/Group 71.png"
            alt=""
            className="w-[814px] max-h-[474px]"
          />
        </div>
      </div>
    </section>
  );
}

export default KnowAbout;
