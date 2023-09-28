import React from "react";

function TopEdu() {
  return (
    <section className="pb-[208px] pt-[162px]">
      {/* ========================================top eduaction=================================================== */}
      <div className="mx-6 md:mx-16 lg:mx-28 2xl:ms-[174px] 2xl:me-[88px]">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-2xl xl:text-3xl mb-16">
            Top Education offers and deals are listed here
          </div>
          <div className="text-light-teal text-[20px] font-bold hidden md:block">
            See all
          </div>
        </div>

        <div className="flex justify-between flex-wrap 2xl:flex-nowrap gap-8">
          {/* =================================card start========================= */}
          <div
            style={{
              background: `url(/images/card.png) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            className="rounded-[20px] shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
              <div className="">
                <button className=" text-white bg-red-700 h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                  50%
                </button>{" "}
                <h4 className=" font-semibold text-[32px] uppercase text-white mb-9">
                  For Instructors
                </h4>
                <p className=" leading-[180%]  text-2xl text-gray-100">
                  TOTC’s school management software helps traditional and online
                  schools manage scheduling,
                </p>
              </div>
            </div>
          </div>
          {/* ======================card end==================== */}
          {/* =================================card start========================= */}
          <div
            style={{
              background: `url(/images/card.png) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            className="rounded-xl shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
              <div className="">
                <button className=" text-white bg-red-700 h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                  50%
                </button>{" "}
                <h4 className=" font-semibold text-[32px] uppercase text-white mb-9">
                  For Instructors
                </h4>
                <p className=" leading-[180%]  text-2xl text-gray-100">
                  TOTC’s school management software helps traditional and online
                  schools manage scheduling,
                </p>
              </div>
            </div>
          </div>
          {/* ======================card end==================== */}
          {/* =================================card start========================= */}
          <div
            style={{
              background: `url(/images/card.png) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            className="rounded-xl shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
              <div className="">
                <button className=" text-white bg-red-700 h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                  50%
                </button>{" "}
                <h4 className=" font-semibold text-[32px] uppercase text-white mb-9">
                  For Instructors
                </h4>
                <p className=" leading-[180%]  text-2xl text-gray-100">
                  TOTC’s school management software helps traditional and online
                  schools manage scheduling,
                </p>
              </div>
            </div>
          </div>
          {/* ======================card end==================== */}
        </div>
      </div>
    </section>
  );
}

export default TopEdu;
