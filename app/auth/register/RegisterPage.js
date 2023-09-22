import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center my-[133px] md:my-9 bg-white">
      <div className="xl:w-[737px] xl:h-[825px] relative mx-auto hidden xl:block">
        <img
          className="w-[737px] h-[825px] left-0 top-0 absolute rounded-[29px]"
          src="/images/registerPageGirl.png"
          alt=""
        />
        <div className="w-[435px] h-[99px] left-[69px] top-[671px] absolute">
          <div className="w-[435px] left-0 top-0 absolute text-white text-[37px] font-bold">
            Lorem Ipsum is simply{" "}
          </div>
          <div className="w-[301px] left-0 top-[61px] absolute text-white text-[25px] font-normal">
            Lorem Ipsum is simply{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col mx-auto">
          <div className="text-center text-black text-base font-normal">
            Welcome to lorem..!
          </div>
          <div className="w-[315px] md:w-[329px] h-[59px] mt-6 flex justify-around items-center bg-light-teal bg-opacity-60 rounded-[33px]">
            <div className=" px-10 py-2 text-white text-base font-medium">
              <Link href="/auth/login">Login</Link>
            </div>
            <div className="bg-light-teal rounded-[33px] px-10 py-2 rounded[33px] text-white text-base font-normal">
              Register
            </div>
          </div>
        </div>
        <div className="w-[331px] md:w-[454px] mt-[52px] text-zinc-600 text-base font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="form-group mt-[32px]">
          <label className=" text-black font-light">Email Address</label>
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="pt-[15px] pb-[16px] ps-[31px] mt-3 block w-[318px] md:w-[435px] bg-white rounded-[40px] border border-light-teal bg-transparent text-neutral-400 text-[15px] font-normal"
          />
        </div>
        <div className="form-group mt-[30px]">
          <label className=" text-black font-light">User name</label>
          <input
            type="text"
            placeholder="Enter your User name"
            className="pt-[15px] pb-[16px] ps-[31px] mt-3 block w-[318px] md:w-[435px] bg-white rounded-[40px] border border-light-teal bg-transparent text-neutral-400 text-[15px] font-normal"
          />
        </div>
        <div className="form-group mt-[30px]">
          <label className=" text-black font-light">Password</label>
          <div className="flex justify-between pt-[15px] pb-[16px] ps-[31px] pe-6 mt-3 w-[318px] md:w-[435px] bg-white rounded-[40px] border border-light-teal bg-transparent text-neutral-400 text-[15px] font-normal">
            <input
              type="password"
              placeholder="Enter your Password"
              className="focus:outline-none"
            />
            <img
              src="/images/icons/invisibleEye.svg"
              alt=""
              className="h-[18px] w-[18px] my-auto"
            />
          </div>
        </div>
        <div className="btn mt-[52px] md:mt-[55px] ms-auto me-4">
          <button className="w-[232px] h-[49px] bg-light-teal text-white rounded-[36px]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
