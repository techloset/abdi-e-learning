import React from "react";

function TopEdu() {
  return (
    <section className="pb-[208px]">
      {/* ========================================top eduaction=================================================== */}
      <div className="mx-6 md:mx-16 lg:mx-28">
        <div className="flex justify-between">
          <div className="font-medium text-xl md:text-2xl xl:text-3xl mb-16">
            Top Education offers and deals are listed here
          </div>
          <div className="text-[#49BBBD] text-[20px] font-bold hidden md:block">
            See all
          </div>
        </div>

        <div className="grid xl:grid-cols-3   gap-8">
          {/* =================================card start========================= */}
          <div
            style={{
              background: `url(/images/card.png) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            class="rounded-xl shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
              <div className="">
                <button className=" text-white bg-[#FF0000] h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                  50%
                </button>{" "}
                <h4 className=" font-semibold text-[32px]  text-white mb-9">
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
            class="rounded-xl shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
              <div className="">
                <button className=" text-white bg-[#FF0000] h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                  50%
                </button>{" "}
                <h4 className=" font-semibold text-[32px]  text-white mb-9">
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
            class="rounded-xl shadow-lg cursor-pointer 2xl:max-w-[506px] 2xl:h-[477px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full px-[50px] py-[40px]">
              <div className="">
                <button className=" text-white bg-[#FF0000] h-[100px] w-[100px]   rounded-lg  mb-7 text-2xl font-bold  ">
                  50%
                </button>{" "}
                <h4 className=" font-semibold text-[32px]  text-white mb-9">
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
