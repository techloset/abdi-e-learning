import React from "react";

export default function Testimonial() {
  return (
    <section>
      <div className="flex flex-wrap  gap-6 mx-5 justify-between lg:mx-10 mt-32 2xl:ms-[205px] 2xl:me-[201px]">
        {/* what they say */}
        <div className="left">
          <div className="flex">
            <img src="/images/line.png" alt="" className="py-4" />
            <p className="text-xl ms-[30px] text-[#525596] font-nunito-sans tracking-[4px]">
              TESTIMONIAL
            </p>
          </div>

          <h1 className="text-6xl font-bold font-nunito-sans text-normal-purple mt-8">
            What They Say?
          </h1>

          <p className="text-grey-600 !leading-[160%] text-[26px] mt-[29px] 2xl:max-w-[607px]">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>

          <p className="text-grey-600 !leading-[160%] text-[26px] mt-7 2xl:max-w-[573px]">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>

          <p className="text-grey-600 !leading-[160%] text-[26px] mt-10">
            Are you too? Please give your assessment
          </p>

          <button className="text-light-teal flex mt-10 ps-7 items-center md:text-[22px] lg:text-[20px] xl:text-[22px]  font-semibold xl:text-base 2xl:text-[22px] border-light-teal  rounded-full border ">
            Write your assessment
            <div className="btnArrow ps-7">
              <img src="/images/icons/btnArrow.png" alt="" />
            </div>
          </button>
        </div>
        {/* testimonial review */}
        <div className="right xl:max-w-[690px] mx-auto 2xl:mx-0">
          {/* girl with books in hand */}
          <img
            src="/images/testitest.png"
            className="xl:absolute mx-auto mt-6 2xl:-ms-[55px]"
            alt=""
          />

          {/* testimonial */}
          <div className="pt-[41px] px-[59px] font-nunito-sans hidden xl:block z-10 transform lg:mt-[500px] ml-[10px]  xl:w-[500px] 2xl:w-full 2xl:h-[329px]  bg-white border-red-500 border-l-[14px]  border-r-0 border-t-0 border-b-0 rounded-lg shadow">
            <div className="flex my-auto">
              <img
                src="/images/test_text.png"
                className="h-fullmx-6 mr-6 "
                alt=""
              />
              <p className="text-[22px] text-[#525596] ">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort. TOTC is exactly what our business has been lacking."
              </p>
            </div>

            <div className=" mx-6 mt-[31px] flex ">
              <div className="text-2xl text-[#525596] mt-3">Gloria Rose</div>
              <div className="lg:ms-auto ">
                <div className="flex justify-end mb-3">
                  <img src="/images/fiveStar.png" alt="" />
                </div>
                <p className="text-[#80819A] mt-3">12 reviews at Yelp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
