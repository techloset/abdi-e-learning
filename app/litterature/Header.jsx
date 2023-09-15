import React from "react";

function Header() {
  return (
    <section className="mb-16">
      <div
        className="rounded-[20px] flex-col flex xl:flex-row 2xl:p-[33px] p-10 justify-center 2xl:min-h-[415px] mx-6 mx:[100px] 2xl:mx-[120px] mt-2 bg-center"
        style={{
          background: `url('/images/litteratureHead.png') no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <div className="rounded-full border-white mx-auto my-auto xl:mr-8 xl:h-auto w-[250px] h-[250px] xl:w-[30%] 2xl:w-[338px] 2xl:h-[338px]  border-8  ">
          <img
            className="rounded-full w-full h-full"
            src="/images/call2.png"
            alt=""
          />
        </div>

        <div className=" bg-white bg-opacity-80 p-5 md:p-8 xl:p-12 xl:w-[77%] rounded-[20px] mt-6 md:mt-0">
          <div className="flex flex-col md:flex-row  justify-between">
            <p className="text-3xl font-medium pt-4">John Anderson</p>
            <button className="bg-teal-400 mt-4  md:mt-0 px-6 py-3 text-white text-2xl font-semibold rounded-xl ">
              Enroll Now
            </button>
          </div>
          <p className="text-[#2D3436B2] text-lg mt-2  md:mt-0 xl:mt-[7px]">
            Assistant Professor at Mcmaster University
          </p>{" "}
          <p className="text-lg 2xl:text-[25px] mt-4 md:mt-0 leading-[180%] xl:mt-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum
            ad minim veniam, quis nostrud
          </p>
          <div className="flex-col flex lg:flex-row justify-between text-[#2D3436CC] text-[15px] leading-[180%] items-center mt-4 xl:mt-[25px]">
            <div className="flex gap-1 items-center">
              <img src="/images/icons/litStar.png" alt="" className="w-5 h-4" />
              <p>4.9 instructor Rating</p>
            </div>

            <div className="flex gap-1 items-center">
              <img src="/images/icons/litEye.png" alt="" className="w-5 h-5" />
              <p>1,592 Students</p>
            </div>

            <div className="flex gap-1 items-center">
              <img src="/images/icons/litPlay.png" alt="" className="w-5 h-5" />
              <p>Courses</p>
            </div>

            <div className="flex mt-3 lg:mt-0 gap-6 justify-between">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="  mb-2 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <img src="/images/icons/litTwitter.png" alt="" />
              </button>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="  mb-2 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <img src="/images/icons/litYt.png" alt="" />
              </button>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="  mb-2 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <img src="/images/icons/litInsta.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
