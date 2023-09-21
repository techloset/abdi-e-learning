import Link from "next/link";
import React from "react";

function Overview() {
  return (
    <section>
      {/* =====================main section============================= */}
      <div className="md:mx-28 mx-6 flex xl:flex-row flex-col gap-8 pb-[100px] justify-between">
        {/* section with buttons and stars */}
        <div className="xl:w-[55%] ">
          <div className="flex md:flex-row flex-col justify-between gap-4 mt-[59px] mb-[83px]">
            <button className=" bg-[#0000001A] mt-3 rounded-xl w-[200px] h-[63px] mx-auto">
              Overview
            </button>
            <button className=" bg-[#0000001A] mt-3 rounded-xl w-[200px] h-[63px] mx-auto">
              Overview
            </button>
            <button className=" bg-[#0000001A] mt-3 rounded-xl w-[200px] h-[63px] mx-auto">
              Overview
            </button>
            <button className=" bg-light-teal text-white mt-3 rounded-xl w-[200px] h-[63px] mx-auto">
              Overview
            </button>
          </div>

          <div className="bg-[#9DCCFF4D] rounded-[20px] p-[50px] 2xl:max-w-[950px] 2xl:h-[764px]">
            <div className="flex flex-col md:flex-row">
              <div className="flex">
                <div className="bg-white rounded-[20px] shadow-md flex flex-col gap-7 justify-center items-center w-[257px] mx-auto h-[199px]">
                  <div className="font-semibold text-lg xl:text-3xl opacity-50">
                    4 out of 5{" "}
                  </div>

                  <img src="/images/fiveStar.png" alt="" />

                  <div className="text-gray-600 text-xl opacity-50">
                    Top Rating
                  </div>
                </div>
                <div className="opacity-50 mx-10 hidden md:block">
                  <p className="mt-[10px]">5Stars</p>
                  <p className="mt-[13px]">4Stars</p>
                  <p className="mt-[13px]">3Stars</p>
                  <p className="mt-[13px]">2Stars</p>
                  <p className="mt-[13px]">1Stars</p>
                </div>
              </div>
              <div className="w-[100%]  flex flex-col">
                <div className="w-[100%] ">
                  <div className="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div className="bg-light-teal h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>
                <div className="w-[100%] ">
                  <div className="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div className="bg-light-teal h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>

                <div className="w-[100%] ">
                  <div className="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div className="bg-light-teal h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>

                <div className="w-[100%] ">
                  <div className="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div className="bg-light-teal h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>

                <div className="w-[100%] ">
                  <div className="w-[100%] mt-[13px] bg-gray-200 rounded-sm h-2.5 mb-4 ">
                    <div className="bg-light-teal h-2.5 rounded-sm   w-[75%] "></div>
                  </div>
                </div>
              </div>
            </div>

            {/* =======================================================comments================================================================= */}

            <div className="mt-[81px]">
              <div className="flex md:flex-row flex-col justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/profileBlogicon.png"
                    className="w-[70px]"
                    alt=""
                  />
                  <div className="ms-3">
                    <p className="text-lg">Lina</p>
                    <img src="/images/fiveStar.png" alt="" />
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-3 text-gray-600 ">
                  <img src="/images/clock.png" alt="" />
                  <p className="text-sm">3 Month</p>
                </div>
              </div>

              <p className="text-gray-700 text-xl leading-[180%] mt-5 pb-[22px]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>

              <hr className="bg-gray-400 h-[2px]" />
            </div>
            <div className="mt-[24px]">
              <div className="flex md:flex-row flex-col justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/profileBlogicon.png"
                    className="w-[70px]"
                    alt=""
                  />
                  <div className="ms-3">
                    <p className="text-lg">Lina</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-3 text-gray-600 ">
                  <img src="/images/clock.png" alt="" />
                  <p className="text-sm">3 Month</p>
                </div>
              </div>

              <p className="text-gray-700 text-xl leading-[180%] mt-5 ">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================long card containing background image ===================================================== */}
        <div className="p-[30px] rounded-2xl bg-white xl:-mt-[310px] xl:w-[35%] 2xl:max-w-[501px] 2xl:h-[1275px] shadow-2xl xl:shadow-none">
          <img
            className="h-[268px] w-full"
            src="/images/blogdetail.png"
            alt=""
          />

          <div className="flex justify-between mt-[18px]">
            <p className="font-semibold text-2xl md:text-[45px] ">$49.65</p>
            <del className="font-semibold text-xl  md:text-[28px]  opacity-50 ">
              S99.99
            </del>
            <p className="font-semibold text-xl md:text-[28px] opacity-50  ">
              50% Off
            </p>
          </div>

          <p className="text-center  text-light-teal text-xl font-semibold mt-[30px] tracking-[0.4px] mb-[5px]">
            {" "}
            11 hour left at this price
          </p>

          <button className="bg-light-teal w-full text-white text-center py-3 my-[30px]  text-[20px]  font-semibold rounded-2xl">
            <Link href="/checkout">Buy Now</Link>
          </button>

          <hr className="h-[1px] w-[442px] mx-auto bg-gray-600 my-[39px]" />

          <p className="text-xl md:text-3xl font-semibold mt-[30px]">
            This Course included
          </p>

          <div className="flex mt-[34px] text-sm font-semibold items-center gap-3">
            <img src="/images/icons/1.png" alt="" />

            <p className="font-semibold opacity-50">Money Bank Guarantee</p>
          </div>

          <div className="flex mt-3 text-sm font-semibold items-center gap-3">
            <img src="/images/icons/2.png" alt="" />

            <p className="font-semibold opacity-50">Access on All devices</p>
          </div>

          <div className="flex mt-3 text-sm font-semibold items-center gap-3">
            <img src="/images/icons/3.png" alt="" />

            <p className="font-semibold opacity-50">
              Certificate of completion
            </p>
          </div>

          <div className="flex mt-3 text-sm font-semibold items-center gap-3">
            <img src="/images/icons/4.png" alt="" />

            <p className="font-semibold opacity-50">32 Modules</p>
          </div>
          <hr className="h-[1px] w-[442px] mx-auto bg-gray-600 mt-[32px]" />

          <p className="text-xl md:text-3xl font-semibold mb-[30px] mt-[34px]">
            Training 5 or more people
          </p>

          <p className="text-gray-600 leading-[180%] text-sm">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>

          <hr className="h-[1px] w-[442px] mx-auto bg-gray-600 my-[39px]" />

          <p className="text-xl md:text-3xl font-semibold mb-[53px]">
            Share this course
          </p>

          <div className="flex gap-[25px]">
            <img src="/images/icons/twitter.png" className="w-8 h-8" alt="" />

            <img src="/images/icons/facebook.png" className="w-8 h-8" alt="" />

            <img src="/images/icons/youtube.png" className="w-8 h-8" alt="" />

            <img src="/images/icons/instagram.png" className="w-8 h-8" alt="" />

            <img src="/images/icons/telegram.png" className="w-8 h-8" alt="" />

            <img src="/images/icons/instagram.png" className="w-8 h-8" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
