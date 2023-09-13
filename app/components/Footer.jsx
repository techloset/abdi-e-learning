import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="pt-[74px] pb-10 bg-[#252641] text-center justify-center mx-auto center items-center content-center ">
        <div className="flex justify-center items-center mx-auto ">
          <img src="/images/Navlogo.png" alt="" className="" />
          <img src="/images/line_footer.png" alt="" className="mx-16" />
          <p className="sm:text-[22px] font-semibold text-white ">
            Virtual Class for Zoom
          </p>
        </div>

        <div>
          <p className="sm:text-[26px] text-[#B2B3CF] mt-24 mb-5 font-medium">
            Subscribe To get our Newsletter
          </p>
        </div>

        <div className="flex-row">
          <input
            type="text"
            className="mx-5 sm:my-0 mb-6  rounded-full border font-normal px-7 py-3 sm:text-[20px] border-slate-100 bg-[#252641] text-[#83839A]"
            name=""
            id=""
            placeholder="Your Email"
          />

          <button className="sm:text-[22px]  font-semibold text-white bg-[#49BBBD]  rounded-full px-8 py-3">
            Subscribe
          </button>
        </div>

        <div className="flex mx-auto justify-center font-normal mt-24">
          <p className="sm:text-[22px] text-[#B2B3CF] ">Careers</p>
          <p className="sm:text-[22px] text-[#B2B3CF] mx-5 ">|</p>
          <p className="sm:text-[22px] text-[#B2B3CF] mx-5">Privacy Policy</p>
          <p className="sm:text-[22px] text-[#B2B3CF] mx-5">|</p>
          <p className="sm:text-[22px] text-[#B2B3CF] ">Terms & Conditions</p>
        </div>

        <div>
          <p className="sm:text-[22px] text-[#B2B3CF]  mt-5 font-normal">
            &copy; 2021 Class Technologies Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
