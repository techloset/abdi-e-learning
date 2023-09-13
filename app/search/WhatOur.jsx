import React from "react";

function WhatOur() {
  return (
    <section>
      <div className="bg-[#9DCCFF] bg-opacity-20 pb-[80px]">
        <div className="xl:mx-28 lg:mx-16 2xl:mx-[139px]  mx-6">
          <p className="lg:text-3xl text-2xl font-semibold py-[70px]">
            What our students have to say
          </p>
          <div className="flex flex-col  lg:flex-row justify-between bg-white  rounded-[40px] p-12  2xl:h-[629px]">
            <img src="/images/student.png" alt="" className="lg:w-1/3" />
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="lg:text-3xl font-bold mb-[31px]">Savannah Nguyen</p>

              <p className="lg:text-2xl mb-[19px]">tanya.hill@example.com</p>

              <p className="text-[#696984] text-[18px] mb-[31px] leading-[180%]">
                Lorem ipsum dolor sit amet, consectetur adipising elit,
                <br /> sed do eiusmod tempor <br />
                Lorem ipsum dolor sit amet, consectetur adipising elit,
                <br /> sed do eiusmod tempor <br />
                Lorem ipsum dolor sit amet, consectetur adipising elit,
                <br /> sed do eiusmod tempor
              </p>

              <div className="flex gap-[25px]">
                <img src="/images/twitter.png" alt="" className="h-8" />

                <img src="/images/facebook.png" alt="" className="h-8" />

                <img src="/images/instagram.png" alt="" className="h-8" />
              </div>
            </div>

            <div className="flex lg:flex-col gap-[25px] items-end justify-end">
              <img
                alt="images"
                src="/images/creator2.png"
                className=" w-[79px] h-[79px] rounded-full"
              />
              <img
                alt="images"
                src="/images/creator1.png"
                className=" w-[79px] h-[79px] rounded-full"
              />

              <img
                alt="images"
                src="/images/creator3.png"
                className=" w-[79px] h-[79px] rounded-full"
              />

              <img
                alt="images"
                src="/images/creator4.png"
                className=" w-[79px] h-[79px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatOur;
