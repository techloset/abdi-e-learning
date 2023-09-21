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
          <div className="text-light-teal text-[20px] font-bold hidden md:block">
            See all
          </div>
        </div>

        <div className="grid xl:grid-cols-3   gap-8">
          {/* =================================card start========================= */}
          <div
            style={{
              background: `url(/images/testiLaptop.png) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            class="rounded-xl shadow-lg cursor-pointer 2xl:max-w-[509px] 2xl:h-[500px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full p-[45px]">
              <div className="">
                <button className=" text-white bg-light-teal h-[126px] w-[124px]   rounded-lg  mb-7 text-[50px] font-bold  ">
                  50%
                </button>{" "}
                <h4 className=" font-semibold text-[28px]  text-white">
                  Lorem ipsum dolor
                </h4>
                <p className=" leading-[180%]  text-xl w-[359px] text-gray-100">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor <br />
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
          </div>
          {/* ======================card end==================== */}
          {/* =================================card start========================= */}
          <div
            style={{
              background: `url(/images/tablet.png) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            class="rounded-xl shadow-lg cursor-pointer 2xl:max-w-[509px] 2xl:h-[500px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full p-[45px]">
              <div className="">
                <button className=" text-white bg-light-teal h-[126px] w-[124px]   rounded-lg  mb-7 text-[50px] font-bold  ">
                  10%
                </button>{" "}
                <h4 className=" font-semibold text-[28px]  text-white">
                  Lorem ipsum dolor
                </h4>
                <p className=" leading-[180%]  text-xl w-[359px] text-gray-100">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor <br />
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
              </div>
            </div>
          </div>
          {/* ======================card end==================== */}
          {/* =================================card start========================= */}
          <div
            style={{
              background: `url(/images/cat.png) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            class="rounded-xl shadow-lg cursor-pointer 2xl:max-w-[509px] 2xl:h-[500px] overflow-hidden"
          >
            <div className="bg-black bg-opacity-30 h-full p-[45px]">
              <div className="">
                <button className=" text-white bg-light-teal h-[126px] w-[124px]   rounded-lg  mb-7 text-[50px] font-bold  ">
                  50%
                </button>{" "}
                <h4 className=" font-semibold text-[28px]  text-white">
                  Lorem ipsum dolor
                </h4>
                <p className=" leading-[180%]  text-xl w-[359px] text-gray-100">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor <br />
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
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
