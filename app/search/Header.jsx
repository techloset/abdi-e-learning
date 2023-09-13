import React from "react";

function Header() {
  return (
    <section>
      <div
        style={{
          background: "url(/images/searchBg.png) no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* bg image */}
        <div className="flex  py-[80px] flex-col items-center justify-center gap-5">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-11/12 sm:w-3/4 2xl:w-[1319px]">
            <div className="flex w-full items-center h-14 sm:h-[73px] bg-white pe-1 rounded-[10px] overflow-hidden">
              <input
                type="text"
                placeholder="Search your favourite course"
                className="w-full h-14 pl-1 sm-pl-6 md:pl-[34px] py-[21px] border  sm:text-xl text-sm border-none focus:outline-none"
              />
              <button className="lg:text-2xl text-sm font-bold w-[183px] h-5/6 md:h-[63px] my-1 md:my-0 bg-[#49BBBD] text-white rounded-md">
                Search
              </button>
            </div>
          </div>
          {/* select */}
          <div className="grid grid-cols-2 xl:grid-cols-6 gap-4 w-11/12 2xl:w-[1319px]">
            {/* sel */}
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Subject
              </option>
              <option value="" className="">
                Subject
              </option>
              <option value="" className="">
                Subject
              </option>
            </select>
            {/* sel */}
            {/* sel */}
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Partner
              </option>
              <option value="" className="">
                Partner
              </option>
              <option value="" className="">
                Partner
              </option>
            </select>
            {/* sel */}
            {/* sel */}
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Program
              </option>
              <option value="" className="">
                Program
              </option>
              <option value="" className="">
                Program
              </option>
            </select>
            {/* sel */}
            {/* sel */}
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Language
              </option>
              <option value="" className="">
                Language
              </option>
              <option value="" className="">
                Language
              </option>
            </select>
            {/* sel */}
            {/* sel */}
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Availability
              </option>
              <option value="" className="">
                Availability
              </option>
              <option value="" className="">
                Availability
              </option>
            </select>
            {/* sel */}
            {/* sel */}
            <select className="block mx-auto xl:mx-0 text-center font-semibold w-fit text-2xl border-r-[12px] border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <option value="" className="">
                Learning Type
              </option>
              <option value="" className="">
                Learning Type
              </option>
              <option value="" className="">
                Learning Type
              </option>
            </select>
            {/* sel */}
          </div>
        </div>

        {/* bg image */}
      </div>
    </section>
  );
}

export default Header;
