import Link from "next/link";
import React from "react";

function page() {
  return (
    <section>
      <div className="bg-indigo-300 bg-opacity-20 md:px-12 xl:px-[97px] pb-8 flex xl:flex-row flex-col gap-[35px] font-poppins">
        {/* =====================1st section===================== */}
        <div className="xl:w-[70%] mt-8 flex flex-col items-end gap-[39px]">
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
        {/* ======================course contentss========================== */}
        <div className="xl:w-[30%] mt-8 font-medium flex gap-[29px] flex-col lg:flex-row xl:flex-col mx-auto">
          <div className=" bg-[white]  rounded-2xl p-5 max-w-[498px] min-h-[769px] 2xl:max-h-[769px]">
            <p className="text-3xl font-bold">Course Contents</p>
            <div className="flex justify-between mt-[30px]">
              <p className="text-sm text-teal-400 ">2/5 COMPLETED</p>
              <img src="/images/calender.png" alt="" className="w-[25px]" />
            </div>

            {/* <!--Carousel controls - next item--> */}
            <div
              className="w-full flex list-none justify-center  my-[20px] p-0"
              data-te-carousel-indicators
            >
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-400 bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="1"
                className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-400 bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-400 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-400 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-400 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="border-2 px-5 py-[11px] rounded-2xl border-[#49BBBD4D] mt-3">
              <div className="flex justify-between ">
                <p className="text-lg font-medium">Get Started</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.5}
                  stroke="currentColor"
                  className="w-6 h-6 font-medium"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex justify-between text-[#252641CC] mx-4  ">
                <div className="flex mt-2 items-center text-sm gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>1 Hour</p>
                </div>

                <div className="flex text-sm items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <p>5 Lessons</p>
                </div>
              </div>
            </div>

            {/* ================================= */}

            <div className="border-2 px-5 pb-[12px] pt-[24px] rounded-2xl border-teal-400 mt-3">
              <div className="flex justify-between ">
                <p className=" text-teal-400 font-medium text-lg">
                  Illstarator Structuors
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.5}
                  stroke="currentColor"
                  className="w-[24px] text-teal-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>

              <div className="flex justify-between text-sm text-[#252641CC] mt-3  mx-4">
                <div className="flex gap-2 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="ml-1">2 Hour</p>
                </div>

                <div className="flex gap-2 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[14px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <p className="text-sm">3 Lessons</p>
                </div>
              </div>
              <hr className="mt-3" />
              <div className="flex justify-between mt-3 text-teal-400 text-sm mx-4">
                <p>1. lorem ipsumm dolor </p>
                <p>65:00</p>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-3 text-gray-800 text-sm mx-4">
                <p>2. lorem ipsumm dolor </p>
                <div className="flex gap-2 items-center justify-center">
                  <p className="text-sm">25:00</p>
                  <img src="/images/lock.png" className="w-[14px]" alt="" />
                </div>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-3 text-gray-800 text-sm mx-4">
                <p>3. lorem ipsumm dolor amet </p>
                <div className="flex gap-2 items-center justify-center">
                  <p className="text-sm">30:00</p>
                  <img src="/images/lock.png" className="w-[14px]" alt="" />
                </div>
              </div>
            </div>

            {/* ============================ */}
            <div className="border-2 p-2 rounded-2xl border-[#49BBBD4D] mt-3">
              <div className="flex justify-between ">
                <p className="text-lg capitalize font-medium">
                  using Illustrator
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex justify-between   mx-4">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="ml-1">1 Hour</p>
                </div>

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <p className="ml-1">4 Lessons</p>
                </div>
              </div>
            </div>

            {/* =================== */}
            <div className="border-2 p-2 rounded-2xl border-[#49BBBD4D] mt-3">
              <div className="flex justify-between ">
                <p className="font-medium text-xl text-gray-800 ">
                  What is Pandas?
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex justify-between text-[#252641CC] mx-4 ">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="ml-1">12:54</p>
                </div>

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <p className="ml-1">5 Lessons</p>
                </div>
              </div>
            </div>

            {/* ==================== */}
            <div className="border-2 p-2 rounded-2xl border-[#49BBBD4D] mt-3">
              <div className="flex justify-between ">
                <p className="font-medium text-xl  text-gray-800 ">
                  Work with Numpy
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex justify-between  text-[#252641CC]  mx-4">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="ml-1">59:00</p>
                </div>

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <p className="ml-1">3 Lessons</p>
                </div>
              </div>
            </div>
          </div>
          {/* book for you */}
          <div className="bg-white rounded-2xl px-[30px] text-center flex flex-col max-w-[498px] h-fit 2xl:max-h-[470px]  py-[50px]">
            <div className="flex justify-between">
              <p className="text-3xl font-semibold mb-[28px]">Book for you</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>{" "}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="p-4 rounded-xl shadow-2xl max-w-[205px] 2xl:max-h-[309px] mx-auto">
                <img
                  className="object-cover w-full h-[200px] 2xl:h-[163px] rounded-2xl"
                  src="/images/tablet.png"
                  alt=""
                />
                <p className="text-2xl font-medium mt-[7px] mb-[10px]">
                  All Benefits of PLUS
                </p>
                <p className="text-3xl font-semibold text-teal-400">$24</p>
              </div>
              <div className="p-4 rounded-xl shadow-2xl max-w-[205px] 2xl:max-h-[309px] mx-auto">
                <img
                  className="object-cover w-full h-[200px] 2xl:h-[163px] rounded-2xl"
                  src="/images/cat.png"
                  alt=""
                />
                <p className="text-2xl font-medium mt-[7px] mb-[10px]">
                  All Benefits of PLUS
                </p>
                <p className="text-3xl text-teal-400 font-bold">$24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
