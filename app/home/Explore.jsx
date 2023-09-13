import React from "react";
import "./Explore.css";

function Explore() {
  return (
    <section
      style={{
        background: `url(/images/exploreBg.png) no-repeat`,
      }}
      className=" bg-opacity-75 mt-40 py-5 xl:pt-72 xl:pb-40 rounded-br-3xl"
    >
      <div className=" h-full mx-4 sm:mx-6 xl:mx-[155px]">
        <h1 className="font-bold text-4xl">Explore Courses</h1>
        <br />

        <p className="text-gray-600">
          Ut sed eros finibus, placerat orci id, dapibus.
        </p>

        {/* See all*/}
        <div className="flex justify-between mt-[117px]">
          <p className="flex text-2xl font-bold">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="  w-5 h-6 mr-3 mt-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.92,11.24a12.33,12.33,0,0,0-9-10.37,9.82,9.82,0,0,0-5.78,0A12.47,12.47,0,0,0,.36,9.75,11.88,11.88,0,0,0,3.52,21.13a2.5,2.5,0,0,0,3.08.36,1.5,1.5,0,0,0,.26-2.33l-.81-.81a1,1,0,0,1,0-1.42,1.1,1.1,0,0,1,1.6-.19c1.41,1.41,5.62,5.66,5.62,5.66a4,4,0,0,0,2.82,1.18A3.68,3.68,0,0,0,18,23.05,12,12,0,0,0,23.92,11.24Zm-9.44,7.62a2.49,2.49,0,0,1,0-3.53,2.54,2.54,0,0,1,3.53,0,2.5,2.5,0,0,1-3.53,3.53ZM14.25,7.2a2,2,0,0,1,2-2h0a2,2,0,1,1-2,2Zm3.69,6h0a1.5,1.5,0,0,1,2.12-2.12,1.5,1.5,0,1,1-2.12,2.12ZM11.65,4.72a2,2,0,1,1-2.83,0A2,2,0,0,1,11.65,4.72Z"
                fill="#000000"
              ></path>
            </svg>{" "}
            Lorem ipsum
          </p>
          <p className="text-[#00BCD4] text-2xl font-bold">SEE ALL →</p>
        </div>
        {/* ========================================Top ================================= */}
        <div className="relative z-10 mt-12">
          {/* <div className="flex-col flex 2xl:flex-row "> */}
          <div className="grid md:grid-cols-6  lg:grid-cols-12 gap-6">
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Erost
                </p>
                <div className="bg-orange-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Curabitur Egestas
                </p>
                <div className="bg-[#FF8374] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-[#B45A1B] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-[#FFB300] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Cras Convallis
                </p>
                <div className="bg-[#C583FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-[#00A8FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-[#6DB4A7] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
            {/* card */}
            <div className="block transform xl:ms-6 mx-auto col-span-12 2xl:col-span-5">
              <div class=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
                <img
                  src="/images/explore.png"
                  className=" rounded-3xl  "
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="h-16 -mt-8 hidden xl:block absolute w-[90%] -ms-7 bg-black rounded-xl opacity-5 "></div>
        {/* ========================================Top ================================= */}
        {/* See all*/}
        <div className="flex justify-between mt-[117px]">
          <p className="flex text-2xl font-bold">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="  w-5 h-6 mr-3 mt-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.92,11.24a12.33,12.33,0,0,0-9-10.37,9.82,9.82,0,0,0-5.78,0A12.47,12.47,0,0,0,.36,9.75,11.88,11.88,0,0,0,3.52,21.13a2.5,2.5,0,0,0,3.08.36,1.5,1.5,0,0,0,.26-2.33l-.81-.81a1,1,0,0,1,0-1.42,1.1,1.1,0,0,1,1.6-.19c1.41,1.41,5.62,5.66,5.62,5.66a4,4,0,0,0,2.82,1.18A3.68,3.68,0,0,0,18,23.05,12,12,0,0,0,23.92,11.24Zm-9.44,7.62a2.49,2.49,0,0,1,0-3.53,2.54,2.54,0,0,1,3.53,0,2.5,2.5,0,0,1-3.53,3.53ZM14.25,7.2a2,2,0,0,1,2-2h0a2,2,0,1,1-2,2Zm3.69,6h0a1.5,1.5,0,0,1,2.12-2.12,1.5,1.5,0,1,1-2.12,2.12ZM11.65,4.72a2,2,0,1,1-2.83,0A2,2,0,0,1,11.65,4.72Z"
                fill="#000000"
              ></path>
            </svg>{" "}
            Lorem ipsum
          </p>
          <p className="text-[#00BCD4] text-2xl font-bold">SEE ALL →</p>
        </div>
        {/* ========================================Middle ================================= */}
        <div className="relative z-10 mt-12">
          {/* <div className="flex-col flex 2xl:flex-row "> */}
          <div className="grid md:grid-cols-6  lg:grid-cols-12 gap-6">
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Erost
                </p>
                <div className="bg-orange-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Curabitur Egestas
                </p>
                <div className="bg-[#FF8374] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-[#B45A1B] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-[#FFB300] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
            {/* card */}
            <div className="block transform xl:mx-6 mx-auto col-span-12 2xl:col-span-5">
              <div class=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
                <img
                  src="/images/explore1.png"
                  className=" rounded-3xl"
                  alt=""
                />
              </div>
            </div>
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Cras Convallis
                </p>
                <div className="bg-[#C583FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-[#00A8FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-[#6DB4A7] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="h-16 -mt-8 hidden xl:block absolute w-[90%] -ms-7 bg-black rounded-xl opacity-5 "></div>
        {/* ========================================Middle ================================= */}
        {/* See all*/}
        <div className="flex justify-between mt-[117px]">
          <p className="flex text-2xl font-bold">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="  w-5 h-6 mr-3 mt-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.92,11.24a12.33,12.33,0,0,0-9-10.37,9.82,9.82,0,0,0-5.78,0A12.47,12.47,0,0,0,.36,9.75,11.88,11.88,0,0,0,3.52,21.13a2.5,2.5,0,0,0,3.08.36,1.5,1.5,0,0,0,.26-2.33l-.81-.81a1,1,0,0,1,0-1.42,1.1,1.1,0,0,1,1.6-.19c1.41,1.41,5.62,5.66,5.62,5.66a4,4,0,0,0,2.82,1.18A3.68,3.68,0,0,0,18,23.05,12,12,0,0,0,23.92,11.24Zm-9.44,7.62a2.49,2.49,0,0,1,0-3.53,2.54,2.54,0,0,1,3.53,0,2.5,2.5,0,0,1-3.53,3.53ZM14.25,7.2a2,2,0,0,1,2-2h0a2,2,0,1,1-2,2Zm3.69,6h0a1.5,1.5,0,0,1,2.12-2.12,1.5,1.5,0,1,1-2.12,2.12ZM11.65,4.72a2,2,0,1,1-2.83,0A2,2,0,0,1,11.65,4.72Z"
                fill="#000000"
              ></path>
            </svg>{" "}
            Lorem ipsum
          </p>
          <p className="text-[#00BCD4] text-2xl font-bold">SEE ALL →</p>
        </div>
        {/* ========================================Bottom ================================= */}
        <div className="relative z-10 mt-12">
          {/* <div className="flex-col flex 2xl:flex-row "> */}
          <div className="grid md:grid-cols-6  lg:grid-cols-12 gap-6">
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Erost
                </p>
                <div className="bg-orange-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
            {/* card */}
            <div className="block transform xl:mx-6 mx-auto col-span-12 2xl:col-span-5">
              <div class=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
                <img
                  src="/images/explore2.png"
                  className=" rounded-3xl"
                  alt=""
                />
              </div>
            </div>
            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Curabitur Egestas
                </p>
                <div className="bg-[#FF8374] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-[#B45A1B] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-[#FFB300] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Cras Convallis
                </p>
                <div className="bg-[#C583FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-[#00A8FF] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-[#6DB4A7] relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="h-16 -mt-8 hidden xl:block absolute w-[90%] -ms-7 bg-black rounded-xl opacity-5 "></div>
        {/* ========================================Bottom ================================= */}
      </div>
    </section>
  );
}

export default Explore;
