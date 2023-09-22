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
              <button className="lg:text-2xl text-sm font-bold w-[183px] h-5/6 md:h-[63px] my-1 md:my-0 bg-light-teal text-white rounded-md">
                Search
              </button>
            </div>
          </div>
          {/* select */}
          <div className="flex gap-4 w-11/12 flex-wrap 2xl:max-w-[1324px] justify-between">
            {/* sel */}
            <div className="input-group flex gap-[10px] mx-auto xl:mx-0 text-center font-semibold text-2xl border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <select className=" appearance-none">
                <option value="" className="text-sm">
                  Subject
                </option>
                <option value="" className="text-sm">
                  Subject
                </option>
                <option value="" className="text-sm">
                  Subject
                </option>
              </select>
              <img src="images/icons/downArrow.svg" alt="" className="w-6" />
            </div>
            {/* sel */}

            {/* sel */}
            <div className="input-group flex gap-[10px] mx-auto xl:mx-0 text-center font-semibold text-2xl border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <select className=" appearance-none">
                <option value="" className="text-sm">
                  Partner
                </option>
                <option value="" className="text-sm">
                  Partner
                </option>
                <option value="" className="text-sm">
                  Partner
                </option>
              </select>
              <img src="images/icons/downArrow.svg" alt="" className="w-6" />
            </div>
            {/* sel */}

            {/* sel */}
            <div className="input-group flex gap-[10px] mx-auto xl:mx-0 text-center font-semibold text-2xl border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <select className=" appearance-none">
                <option value="" className="text-sm">
                  Program
                </option>
                <option value="" className="text-sm">
                  Program
                </option>
                <option value="" className="text-sm">
                  Program
                </option>
              </select>
              <img src="images/icons/downArrow.svg" alt="" className="w-6" />
            </div>
            {/* sel */}

            {/* sel */}
            <div className="input-group flex gap-[10px] mx-auto xl:mx-0 text-center font-semibold text-2xl border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <select className=" appearance-none">
                <option value="" className="text-sm">
                  Language
                </option>
                <option value="" className="text-sm">
                  Language
                </option>
                <option value="" className="text-sm">
                  Language
                </option>
              </select>
              <img src="images/icons/downArrow.svg" alt="" className="w-6" />
            </div>
            {/* sel */}

            {/* sel */}
            <div className="input-group flex gap-[10px] mx-auto xl:mx-0 text-center font-semibold text-2xl border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <select className=" appearance-none">
                <option value="" className="text-sm">
                  Abaliability
                </option>
                <option value="" className="text-sm">
                  Abaliability
                </option>
                <option value="" className="text-sm">
                  Abaliability
                </option>
              </select>
              <img src="images/icons/downArrow.svg" alt="" className="w-6" />
            </div>
            {/* sel */}

            {/* sel */}
            <div className="input-group flex gap-[10px] mx-auto xl:mx-0 text-center font-semibold text-2xl border-transparent p-[18px] border border-gray-300 xl:h-[73px] bg-white rounded-[10px] shadow-sm">
              <select className=" appearance-none">
                <option value="" className="text-sm">
                  Learning Type
                </option>
                <option value="" className="text-sm">
                  Learning Type
                </option>
                <option value="" className="text-sm">
                  Learning Type
                </option>
              </select>
              <img src="images/icons/downArrow.svg" alt="" className="w-6" />
            </div>
            {/* sel */}
          </div>
        </div>

        {/* bg image */}
      </div>
    </section>
  );
}

export default Header;
