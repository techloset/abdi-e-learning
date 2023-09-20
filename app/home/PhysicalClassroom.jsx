import React from "react";

function PhysicalClassroom() {
  const showMore = "false";

  return (
    <section>
      <div className=" grid lg:grid-cols-2 gap-10 mx-6 lg:mx-[186px] mt-20 lg:mt-40">
        <div className=" items-center   xl:mt-10">
          <div className="bg-[#33EFA0] text-2xl xl:text-4xl font-medium h-14 text-[#2F327D]  absolute transition  w-14 left-[9%]  rounded-full "></div>
          <h1 className="text-[#2F327D] text-2xl xl:text-4xl font-medium relative z-10 !leading-[160%]">
            Everything you can do in a physical classroom,{" "}
            <span className="text-[#00CBB8]"> you can do with TOTC</span>
          </h1>

          <div className="xl:text-2xl 2xl:w-[730px] tracking-[0.48px]  w-11/12 text-[#696984]  mt-[30px] !leading-[180%]">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance
            <div className="bg-[#33EFA0] text-2xl xl:text-4xl h-6 right-0 lg:left-[46%] absolute transition  w-6  rounded-full ">
              {" "}
            </div>
            , payments and virtual classrooms all in one secure cloud-based
            system.
          </div>
          <button
            className="mt-7 underline !leading-[180%] text-[#696984] text-[22px]"
            // onClick={handleTextExpand}
          >
            Learn More
          </button>
        </div>

        <div className="ms-auto">
          <img src="/images/everything.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default PhysicalClassroom;
