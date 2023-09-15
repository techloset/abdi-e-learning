import React from "react";

function OurFeatures() {
  return (
    <section>
      <h1 className="text-purple-900 text-3xl lg:text-4xl font-bold text-center justify-center mt-20 xl:mt-44">
        Our<span className="text-teal-500"> Features</span>
      </h1>
      <br />
      <p className=" text-xl xl:text-2xl text-center justify-center mx-auto text-gray-600 ">
        This very extraordinary feature, can make learning activities more
        efficient{" "}
      </p>

      <div className="flex justify-center flex-wrap xl:grid xl:grid-cols-12 2xl:gap-12 xl:gap-x-28  gap-8 mt-20 mx-6 xl:mt-44 xl:mx-44">
        <img src="/images/group.png" className="-mt-20 col-span-7" alt="" />
        <div className="flex flex-col mx-auto items-start col-span-5 px-3 xl:px-0">
          <h1 className="text-purple-900 text-2xl leading-[160%] xl:text-[40px] font-semibold mb-8 xl:mb-14">
            A <span className="text-teal-500">user interface </span>designed{" "}
            <br />
            for the classroom
          </h1>

          <div className="flex">
            <div className=" bg-white justify-center rounded-full w-[60px] h-[60px] text-center flex items-center shadow-2xl me-10">
              <img
                src="/images/icons/feat1.png"
                className="h-[26px] w-7"
                alt=""
              />
            </div>
            <p className=" text-[22px] text-gray-600 leading-[180%] max-w-[443px] ">
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </p>
          </div>
          <br />
          <br />

          <div className="flex">
            <div className=" bg-white justify-center rounded-full w-[60px] h-[60px] text-center flex items-center shadow-2xl me-10">
              <img
                src="/images/icons/feat2.png"
                className="h-[26px] w-7"
                alt=""
              />
            </div>
            <p className=" text-[22px] text-gray-600 leading-[180%] max-w-[443px] ">
              TA’s and presenters can be moved to the front of the class.
            </p>
          </div>
          <br />
          <br />

          <div className="flex">
            <div className=" bg-white justify-center rounded-full w-[60px] h-[60px] text-center flex items-center shadow-2xl me-10">
              <img
                src="/images/icons/feat3.png"
                className="h-[26px] w-7"
                alt=""
              />
            </div>
            <p className=" text-[22px] text-gray-600 leading-[180%] max-w-[443px] ">
              Teachers can easily see all students and class data at one time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFeatures;
