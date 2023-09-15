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
          <p className="flex text-2xl font-bold gap-2">
            <img
              src="/images/icons/paint.png"
              className="w-[29px] h-[29px]"
              alt=""
            />
            Lorem ipsum
          </p>
          <p className="text-teal-500 text-2xl font-bold">SEE ALL →</p>
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
                <div className="bg-red-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-orange-700 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-yellow-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Cras Convallis
                </p>
                <div className="bg-purple-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-blue-500 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-green-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
            {/* card */}
            <div className="block transform xl:ms-6 mx-auto col-span-12 2xl:col-span-5">
              <div className=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
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
          <p className="flex text-2xl font-bold gap-2">
            <img
              src="/images/icons/globe.png"
              className="w-[29px] h-[29px]"
              alt=""
            />
            Lorem ipsum
          </p>
          <p className="text-teal-500 text-2xl font-bold">SEE ALL →</p>
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
                <div className="bg-red-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-orange-700 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-yellow-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
            {/* card */}
            <div className="block transform xl:mx-6 mx-auto col-span-12 2xl:col-span-5">
              <div className=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
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
                <div className="bg-purple-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-blue-500 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-green-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="h-16 -mt-8 hidden xl:block absolute w-[90%] -ms-7 bg-black rounded-xl opacity-5 "></div>
        {/* ========================================Middle ================================= */}
        {/* See all*/}
        <div className="flex justify-between mt-[117px]">
          <p className="flex text-2xl font-bold gap-2">
            <img
              src="/images/icons/ribbon.png"
              className="w-[29px] h-[29px]"
              alt=""
            />
            Lorem ipsum
          </p>
          <p className="text-teal-500 text-2xl font-bold">SEE ALL →</p>
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
              <div className=" max-w-[685px] border-[#347a83a7] rounded-3xl shadow">
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
                <div className="bg-red-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Quisque Conseq…
                </p>
                <div className="bg-orange-700 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Ut Sed Eros
                </p>
                <div className="bg-yellow-600 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Cras Convallis
                </p>
                <div className="bg-purple-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum fauci…
                </p>
                <div className="bg-blue-500 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
              </div>
            </div>

            <div className="book hidden 2xl:block text-center  bg-white  rounded-3xl py-3 px-4  text-white max-w-[105px] max-h-[418px]">
              <div className="bg-green-300 py-6 px-2 h-full rounded-3xl">
                <p className="try absolute top-[50%] z-50 -mr-16 right-0 text-center text-2xl font-medium">
                  Vestibulum faucibu
                </p>
                <div className="bg-green-400 relative px-4 py-2 h-full text-upright rounded-3xl "></div>
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