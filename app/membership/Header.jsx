import React from "react";

function Header() {
  return (
    <section className="bg-white  mx-6 md:mx-16 2xl:mx-[300px] pt-28 pb-48">
      <h1 className="text-center text-teal-400 text-[64px]  font-extrabold ">
        Affordable pricing
      </h1>
      <div className="mt-[77px]">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-7">
          {/* free */}
          <div className="flex flex-col p-8  mx-auto 2xl:w-[370px] 2xl:h-[536px] text-gray-900 bg-white    ">
            <p className="text-teal-400 font-semibold text-xl ">Like a pussy</p>

            <h3 className="mb-6 mt-4 text-5xl font-bold">
              Free <span className="text-xs font-bold ">/FOREVER</span>
            </h3>

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <img src="images/icons/mem1.png" alt="" />
                <span>Components-driven system</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="images/icons/mem1.png" alt="" />
                <span>Sales-boosting landing pages</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="images/icons/mem1.png" alt="" />
                <span>Awesome Feather icons pack </span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="text-teal-400 text-lg font-bold border-gray-400 py-3 rounded-xl border-2 w-full">
                Try for free
              </button>
            </div>
          </div>
          {/* individual */}
          <div className="flex flex-col p-8 mx-auto 2xl:w-[370px] 2xl:h-[536px] text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl  ">
            <div className="flex justify-between">
              <div className="flex">
                <p className="text-teal-400 font-semibold text-xl">
                  👤 Individual
                </p>
              </div>
              <button className="text-black px-4 rounded-full border-2 border-blue-600">
                BEST!
              </button>
            </div>

            <h3 className="mb-6 mt-4 text-5xl font-bold">
              $24 <span className="text-xs">/MONTH</span>
            </h3>

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem2.png" alt="" />
                <span>Components-driven system</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem2.png" alt="" />
                <span>Sales-boosting landing pages</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem2.png" alt="" />
                <span>Awesome Feather icons pack </span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem2.png" alt="" />
                <span>Themed into 3 different styles </span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem2.png" alt="" />
                <span>Will help to learn Figma </span>
              </li>
            </ul>

            <button
              href="#"
              className=" bg-teal-400 rounded-xl text-white py-3   text-whiterounded-xl border-2 "
            >
              {" "}
              Regular liscence
            </button>
          </div>
          {/* corporate */}
          <div className="flex flex-col p-8 mx-auto 2xl:w-[370px] 2xl:h-[536px] text-gray-900 bg-white rounded-lg   ">
            <div className="flex">
              <p className="text-teal-400 font-semibold text-xl">
                👥 Corporate
              </p>
            </div>

            <h3 className="mb-6 mt-4 text-5xl font-bold">
              $12 <span className="text-xs">/EDITOR</span>
            </h3>

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem3.png" alt="" />
                <span>Components-driven system</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem3.png" alt="" />
                <span>Sales-boosting landing pages</span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem3.png" alt="" />
                <span>Awesome Feather icons pack </span>
              </li>
              <li className="flex items-center space-x-3">
                <img src="/images/icons/mem3.png" alt="" />
                <span>Themed into 3 different styles </span>
              </li>
            </ul>
            <div className="mt-auto">
              <button className="text-teal-400 text-lg font-bold border-gray-400 py-3 rounded-xl border-2 w-full">
                Extended license
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
