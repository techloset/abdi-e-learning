import Link from "next/link";
import React from "react";

function page() {
  return (
    <section>
      <div className="bg-indigo-300 bg-opacity-20 md:px-12 xl:px-[97px] pb-8 flex 2xl:flex-row flex-col  gap-[35px] font-poppins">
        {/* =====================1st section===================== */}
        <div className="2xl:w-[70%] mt-8 flex flex-col items-end gap-[39px]">
          <div className="flex w-full justify-between items-center gap-2 lg:gap-6">
            <Link
              href="/"
              className="lg:flex md:ms-2 hidden lg:w-[50px] h-[50px] "
            >
              <img src="/images/icons/meetArrow.png" alt="" />
            </Link>

            <div className=" bg-[white] w-[1069px] h-[153px] rounded-[26px] p-6 flex flex-col justify-center gap-[11px]">
              <div className="flex justify-between ">
                <p className="text-xl xl:text-3xl font-bold">
                  UX/UI Design Conference Meeting
                </p>
                <img src="/images/icons/gear.png" alt="" />
              </div>

              <p className="xl:text-2xl text-lg">9 Lesson 6h 30min</p>
            </div>
          </div>

          <img
            src="/images/meeting.png"
            className="justify-center 2xl:w-[1186px]"
            alt=""
          />
        </div>
        {/*============= RIGHT ============= */}
        <div className="2xl:w-[30%] mt-8 font-medium flex gap-[29px] flex-col lg:flex-row 2xl:flex-col mx-auto">
          {/* course contents */}
          <div className=" bg-[white]  rounded-2xl px-[30px] pt-[40px] pb-[16px] max-w-[498px] min-h-[769px] 2xl:max-h-[769px]">
            <p className="text-3xl font-bold">Course Contents</p>
            <div className="flex justify-between mt-[30px]">
              <p className="text-sm text-light-teal ">2/5 COMPLETED</p>
              <img
                src="/images/icons/calender.svg"
                alt=""
                className="w-[25px] me-[20px]"
              />
            </div>

            {/* carousel buttons */}
            <div className="w-full flex list-none  my-4 p-0">
              <button
                type="button"
                className="mx-[3px] box-content h-[5px] w-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-light-teal bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              ></button>
              <button
                type="button"
                className="mx-[3px] box-content h-[5px] w-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-light-teal bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              ></button>
              <button
                type="button"
                className="mx-[3px] box-content h-[5px] w-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-light-teal bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              ></button>
              <button
                type="button"
                className="mx-[3px] box-content h-[5px] w-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-light-teal bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              ></button>
              <button
                type="button"
                className="mx-[3px] box-content h-[5px] w-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-light-teal bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              ></button>
            </div>
            {/* carousel buttons */}

            {/* get started */}
            <div className="border-2 px-[30px] py-[11px] rounded-2xl border-[#49BBBD4D] mt-[11px]">
              <div className="flex justify-between ">
                <p className="text-lg font-medium text-[#252641]">
                  Get Started
                </p>
                <img
                  src="/images/icons/downArrow.svg"
                  alt=""
                  className="w-[15px]"
                />
              </div>
              <div className="flex justify-between text-[#252641] text-opacity-80 mx-4  ">
                <div className="flex items-center text-sm gap-2">
                  <img
                    src="/images/icons/clock.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p>1 Hour</p>
                </div>

                <div className="flex text-sm items-center gap-2">
                  <img
                    src="/images/icons/book.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p>5 Lessons</p>
                </div>
              </div>
            </div>
            {/* get started */}

            {/* illstarator */}
            <div className="border-2 px-[30px] pb-[12px] pt-[26px] rounded-2xl border-light-teal mt-[11px]">
              <div className="flex justify-between ">
                <p className=" text-light-teal font-medium text-lg">
                  Illstarator Structuors
                </p>
                <img
                  src="/images/icons/upArrow.svg"
                  alt=""
                  className="w-[15px] h-[32px]"
                />
              </div>

              <div className="flex justify-between text-sm text-[#252641] text-opacity-80  mx-4">
                <div className="flex gap-2 justify-center">
                  <img
                    src="/images/icons/clock.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p className="ml-1">2 Hour</p>
                </div>

                <div className="flex gap-2 justify-center">
                  <img
                    src="/images/icons/book.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p className="text-sm">3 Lessons</p>
                </div>
              </div>
              <hr className="mt-3" />
              <div className="flex justify-between mt-3 text-light-teal text-sm mx-4">
                <p>1. lorem ipsumm dolor </p>
                <p>65:00</p>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-3 text-gray-800 text-sm mx-4">
                <p>2. lorem ipsumm dolor </p>
                <div className="flex gap-2 items-center justify-center">
                  <p className="text-sm">25:00</p>
                  <img
                    src="/images/icons/lock.svg"
                    className="w-[14px]"
                    alt=""
                  />
                </div>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-3 text-gray-800 text-sm mx-4">
                <p>3. lorem ipsumm dolor amet </p>
                <div className="flex gap-2 items-center justify-center">
                  <p className="text-sm">30:00</p>
                  <img
                    src="/images/icons/lock.svg"
                    className="w-[14px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* illstarator */}

            {/* Using Illstarator  */}
            <div className="border-2 px-[30px] py-[11px] rounded-2xl border-[#49BBBD4D] mt-[11px]">
              <div className="flex justify-between ">
                <p className="text-lg font-medium text-[#252641]">
                  Using Illstarator
                </p>
                <img
                  src="/images/icons/downArrow.svg"
                  alt=""
                  className="w-[15px]"
                />
              </div>
              <div className="flex justify-between text-[#252641] text-opacity-80 mx-4  ">
                <div className="flex items-center text-sm gap-2">
                  <img
                    src="/images/icons/clock.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p>1 Hour</p>
                </div>

                <div className="flex text-sm items-center gap-2">
                  <img
                    src="/images/icons/book.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p>4 Lessons</p>
                </div>
              </div>
            </div>
            {/* Using Illstarator  */}

            {/* What is Pandas? */}
            <div className="border-2 px-[30px] py-[11px] rounded-2xl border-[#49BBBD4D] mt-[11px]">
              <div className="flex justify-between ">
                <p className="text-lg font-medium text-[#252641]">
                  What is Pandas?
                </p>
                <img
                  src="/images/icons/downArrow.svg"
                  alt=""
                  className="w-[15px]"
                />
              </div>
              <div className="flex justify-between text-[#252641] text-opacity-80 mx-4  ">
                <div className="flex items-center text-sm gap-2">
                  <img
                    src="/images/icons/clock.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p>12:54</p>
                </div>

                <div className="flex text-sm items-center gap-2">
                  <img
                    src="/images/icons/book.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p>5 Lessons</p>
                </div>
              </div>
            </div>
            {/* What is Pandas? */}

            {/* Work with Numpy */}
            <div className="border-2 px-[30px] py-[11px] rounded-2xl border-[#49BBBD4D] mt-[11px]">
              <div className="flex justify-between ">
                <p className="text-lg font-medium text-[#252641]">
                  Work with Numpy
                </p>
                <img
                  src="/images/icons/downArrow.svg"
                  alt=""
                  className="w-[15px]"
                />
              </div>
              <div className="flex justify-between text-[#252641] text-opacity-80 mx-4  ">
                <div className="flex items-center text-sm gap-2">
                  <img
                    src="/images/icons/clock.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p>59:00</p>
                </div>

                <div className="flex text-sm items-center gap-2">
                  <img
                    src="/images/icons/book.svg"
                    alt=""
                    className="w-[14px]"
                  />
                  <p>3 Lessons</p>
                </div>
              </div>
            </div>
            {/* Work with Numpy */}
          </div>
          {/* course contents */}

          {/* book for you */}
          <div className="bg-white rounded-2xl ps-[30px] pe-[31px] text-center flex flex-col max-w-[498px] h-fit 2xl:max-h-[470px] pt-[46px] pb-[53px]">
            <div className="flex justify-between">
              <p className="text-3xl font-semibold mb-[28px]">Book for you</p>
              <img
                src="/images/icons/calenderBlank.svg"
                alt=""
                className="w-[25px]"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="p-4 rounded-[20px] shadow-meeting-shadow max-w-[205px] 2xl:max-h-[309px] mx-auto">
                <img
                  className="object-cover w-full h-[200px] 2xl:h-[163px] rounded-2xl"
                  src="/images/tablet.png"
                  alt=""
                />
                <p className="text-2xl font-medium mt-[7px] mb-[10px]">
                  All Benefits of PLUS
                </p>
                <p className="text-3xl font-semibold text-light-teal">$24</p>
              </div>
              <div className="p-4 rounded-[20px] shadow-meeting-shadow max-w-[205px] 2xl:max-h-[309px] mx-auto">
                <img
                  className="object-cover w-full h-[200px] 2xl:h-[163px] rounded-2xl"
                  src="/images/cat.png"
                  alt=""
                />
                <p className="text-2xl font-medium mt-[7px] mb-[10px]">
                  All Benefits of PLUS
                </p>
                <p className="text-3xl text-light-teal font-bold">$24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
