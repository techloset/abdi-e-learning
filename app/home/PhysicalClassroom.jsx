import React from "react";

function PhysicalClassroom() {
  const showMore = "false";

  return (
    <section>
      <div className=" grid lg:grid-cols-2 gap-10 mx-6 lg:mx-[186px] mt-20 lg:mt-40">
        <div className=" items-center   xl:mt-10">
          <div className="bg-teal-400 text-2xl xl:text-4xl font-bold h-12 text-purple-900  absolute transition  w-12   rounded-full "></div>
          <h1 className="text-purple-900 text-2xl xl:text-4xl font-bold relative z-10">
            Everything you can do in a physical classroom,{" "}
            <span className="text-teal-500"> you can do with TOTC</span>
          </h1>

          <div className="xl:text-2xl 2xl:w-3/4   w-11/12 text-gray-600  mt-5">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance
            <div className="bg-teal-400 text-2xl xl:text-4xl font-bold h-6 mx-28 right-0 lg:left-1/3  absolute transition  w-6  rounded-full ">
              {" "}
            </div>
            , payments and virtual classrooms all in one secure cloud-based
            system. <br />
            <button
              className="mt-7 underline"
              // onClick={handleTextExpand}
            >
              Learn More
            </button>
          </div>
          <br />
        </div>

        <div className="ms-auto">
          <img src="/images/everything.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default PhysicalClassroom;