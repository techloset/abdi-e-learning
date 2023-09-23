import React from "react";

function OurFeatures() {
  return (
    <section>
      <h1 className="text-normal-purple text-3xl lg:text-4xl !font-bold text-center justify-center mt-20 xl:mt-44 mb-5 !leading-[180%]">
        Our<span className="text-dark-teal"> Features</span>
      </h1>

      <p className=" text-xl xl:text-2xl text-center justify-center mx-auto text-grey-600 !leading-[180%]">
        This very extraordinary feature, can make learning activities more
        efficient{" "}
      </p>

      <div className="flex justify-center flex-wrap xl:grid xl:grid-cols-12 2xl:gap-16 xl:gap-10  gap-8 mt-20 mx-6 xl:mt-44 xl:mx-[170px]">
        <img src="/images/group.png" className="-mt-20 col-span-7" alt="" />
        <div className="flex flex-col mx-auto items-start col-span-5 px-3 xl:px-0">
          <h1 className="text-normal-purple text-2xl leading-[160%] xl:text-[40px] font-semibold mb-8 xl:mb-14">
            A <span className="text-dark-teal">user interface </span>designed
            for the classroom
          </h1>

          <div className="flex mb-10 items-cente">
            <div className=" bg-white justify-center rounded-full w-[60px] h-[60px] text-center flex items-center shadow-2xl me-10">
              <img
                src="/images/icons/feat1.png"
                className="h-[26px] w-7"
                alt=""
              />
            </div>
            <p className=" text-[22px] text-grey-600 leading-[180%] max-w-[443px] ">
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </p>
          </div>

          <div className="flex mb-10 items-cente">
            <div className=" bg-white justify-center rounded-full w-[60px] h-[60px] text-center flex items-center shadow-2xl me-10">
              <img
                src="/images/icons/feat2.png"
                className="h-[26px] w-7"
                alt=""
              />
            </div>
            <p className=" text-[22px] text-grey-600 leading-[180%] max-w-[443px] ">
              TA’s and presenters can be moved to the front of the class.
            </p>
          </div>

          <div className="flex items-cente">
            <div className=" bg-white justify-center rounded-full w-[60px] h-[60px] text-center flex items-center shadow-2xl me-10">
              <img
                src="/images/icons/feat3.png"
                className="h-[26px] w-7"
                alt=""
              />
            </div>
            <p className=" text-[22px] text-grey-600 leading-[180%] max-w-[443px] ">
              Teachers can easily see all students and class data at one time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFeatures;
