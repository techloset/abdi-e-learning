import React from "react";

function Header() {
  return (
    <section>
      <div className="flex 2xl:flex-row flex-col gap-8 justify-between mx-6 md:mx-[120px] mt-[90px] mb-[158px]">
        {/* ===================checkout======================= */}
        <div className="p-[50px] shadow-xl  2xl:w-[962px] 2xl:h-[909px] rounded-2xl ">
          <h1 className="font-semibold text-2xl md:text-4xl">Checkout</h1>

          <p className="font-semibold text-gray-700 sm:text-xl mt-2">
            Cart Type
          </p>

          <div className="flex sm:flex-row flex-col items-start gap-[20px] mt-[38px] mb-[84px]">
            <div className="rounded-lg w-[139px]">
              <img
                className="rounded-lg h-[93px]"
                src="/images/paypal.png"
                alt=""
              />
            </div>

            <div className="rounded-lg  w-[139px]  ">
              <img
                className="rounded-lg h-[93px] "
                src="/images/am.png"
                alt=""
              />
            </div>

            <div className="rounded-lg  w-[139px] ">
              <img
                className="rounded-lg  h-[93px]"
                src="/images/visa.png"
                alt=""
              />
            </div>

            <div className="rounded-lg h-[93px] w-[139px]  border-2 md:ml-3 flex items-center justify-center">
              <img
                className="rounded-lg  h-[93px]"
                src="/images/mc.png"
                alt=""
              />
            </div>
          </div>

          <label
            className="sm:text-xl font-semibold text-gray-700"
            htmlFor="Name"
          >
            Name on Card
          </label>

          <input
            className="font-normal border-gray-300 border-2 rounded-[10px] w-full h-[60px] ps-[21px] mt-[10px] mb-[30px]  sm:text-xl "
            type="text"
            name=""
            id=""
            placeholder="Enter name on Card"
          />

          <label
            className="sm:text-xl font-semibold text-gray-700 "
            htmlFor="cardNumber"
          >
            Card Number
          </label>

          <input
            className="font-normal border-2 border-gray-300 rounded-[10px] w-full h-[60px] ps-[21px] mt-[10px] mb-[30px] sm:text-xl "
            type="number"
            name=""
            id=""
            placeholder="Enter Card Number"
          />

          <div className="flex lg:flex-row flex-col justify-between mx-auto w-full gap-5 ">
            <div className="w-full">
              <label
                className="sm:text-xl font-semibold text-gray-700 "
                htmlFor="expiryDate"
              >
                Enter Expiration Date (MM/YY)
              </label>

              <input
                className="font-normal border-2 w-full  border-gray-300 rounded-2xl  h-[60px] ps-[21px] mt-[10px] sm:text-xl "
                placeholder="Enter Expiration Date"
                type="text"
                name=""
                id=""
              />
            </div>

            <div className="w-full">
              <label
                className="sm:text-xl font-semibold w-full  text-gray-700 "
                htmlFor="expiryDate"
              >
                CVC
              </label>

              <input
                className="font-normal border-2 w-full border-gray-300 rounded-2xl h-[60px] ps-[21px] mt-[10px] sm:text-xl "
                type="number"
                name=""
                id=""
                placeholder="Enter CVC"
              />
            </div>
          </div>

          <div className="text-gray-700 mt-[10px] text-base mb-[50px]">
            <input type="checkbox" name="" id="" className="mx-1" />
            Save my information for faster checkout
          </div>

          <button className="rounded-xl md:text-[26px] text-white w-full bg-light-teal py-4 ">
            Confirm Payment
          </button>
        </div>

        {/* ===============summary========================== */}
        <div className="bg-indigo-300 bg-opacity-20 p-[30px] 2xl:w-[662px] 2xl:h-[636px] mt-10 2xl:mt-0  rounded-2xl">
          <h1 className="text-2xl">Summary</h1>

          <div className="flex flex-col md:flex-row mt-[50px] mb-5 gap-5 ">
            <img
              className="w-[160px] h-[107px] rounded-xl "
              src="/images/search.jpg"
              alt=""
            />
            <div className="text-lg">
              <p className="mb-[2px] leading-[180%] tracking-[0.36px]">
                adipising elit, sed do eiusmod tempor
              </p>
              <p className="text-gray-700 leading-[180%] tracking-[0.36px]">
                Lorem ipsum dollar...
              </p>
              <p className="text-2xl leading-[180%] tracking-[0.48px]">
                $24.69
              </p>
            </div>
          </div>

          <hr className=" bg-gray-700 h-[0.5px]" />

          <div className="flex flex-col md:flex-row  my-5 gap-5 ">
            <img
              className="w-[160px] h-[107px] rounded-xl "
              src="/images/search.jpg"
              alt=""
            />
            <div className="text-lg">
              <p className="mb-[2px] leading-[180%] tracking-[0.36px]">
                adipising elit, sed do eiusmod tempor
              </p>
              <p className="text-gray-700 leading-[180%] tracking-[0.36px]">
                Lorem ipsum dollar...
              </p>
              <p className="text-2xl leading-[180%] tracking-[0.48px]">
                $24.69
              </p>
            </div>
          </div>

          <hr className=" bg-gray-700 h-[0.5px] my-[11px]" />

          <div className="flex justify-between mt-3 text-gray-700 font-semibold text-xl tracking-[0.4] leading-[180%] ">
            <p>Subtotal</p>
            <p>$51.38</p>
          </div>

          <hr className="bg-gray-700 h-[0.5px] my-[11px]" />

          <div className="flex justify-between mt-3 text-gray-700 font-semibold text-xl tracking-[0.4] leading-[180%]">
            <p>Coupon Discount</p>
            <p>0 %</p>
          </div>

          <hr className="bg-gray-700 h-[0.5px] my-[11px]" />

          <div className="flex justify-between mt-3 text-gray-700 font-semibold text-xl tracking-[0.4] leading-[180%]">
            <p>TAX</p>
            <p>5</p>
          </div>

          <hr className="bg-gray-700 h-[0.5px] my-[11px]" />

          <div className="flex justify-between mt-3 font-semibold text-black leading-[180%] tracking-[0.4px] text-xl">
            <p>Total</p>
            <p>$51.38</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
