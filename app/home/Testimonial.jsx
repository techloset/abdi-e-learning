import React from "react";

export default function Testimonial() {
  return (
    <section>
      <div className="flex flex-col xl:flex-row mx-5 justify-between lg:mx-[0px] mt-32 2xl:ps-[160px] 2xl:pe-[180px]">
        {/* what they say */}
        <div className="mx-5 lg:mx-16">
          <div className="flex">
            <img src="/images/line.png" alt="" className="py-4" />
            <p className="text-xl text-purple-800">TESTIMONIAL</p>
          </div>

          <h1 className="text-6xl font-bold font-sans text-purple-800 mt-8">
            What They Say?
          </h1>

          <p className="text-gray-600 text-[26px] mt-7 2xl:w-[607px]">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>

          <p className="text-gray-600 text-[26px] mt-7 2xl:w-[573px]">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>

          <p className="text-gray-600 text-[26px] mt-10">
            Are you too? Please give your assessment
          </p>

          <button className="text-teal-400 flex mt-10 ps-7 items-center md:text-[22px] lg:text-[20px] xl:text-[22px]  font-semibold xl:text-base 2xl:text-[22px] border-teal-400  rounded-full border ">
            Write your assessment
            <div className="btnArrow ps-7">
              <img src="/images/icons/btnArrow.png" alt="" />
            </div>
          </button>
        </div>
        {/* testimonial review */}
        <div>
          {/* girl with books in hand */}
          <img
            src="/images/testitest.png"
            className="xl:absolute mx-auto mt-6 2xl:-ms-20"
            alt=""
          />

          {/* testimonial */}
          <div className="p-6 hidden xl:block z-10 transform lg:mt-[500px] ml-[10px]  lg:w-[600px]  bg-white border-red-500 border-l-[14px]  border-r-0 border-t-0 border-b-0 rounded-lg shadow">
            <div className="flex ">
              <img
                src="/images/test_text.png"
                className="h-fullmx-6 mr-6 "
                alt=""
              />
              <p className="text-[22px] text-gray-700 ">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort. TOTC is exactly what our business has been lacking."
              </p>
            </div>

            <div className=" mx-6 mt-4 flex ">
              <div className="text-2xl text-gray-700 mt-3">Gloria Rose</div>
              <div className="lg:ms-auto ">
                <div className="flex justify-end mb-3">
                  <img src="/images/fiveStar.png" alt="" />
                </div>
                <p className="text-gray-600">12 reviews at Yelp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
