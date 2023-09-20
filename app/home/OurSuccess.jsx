import React from "react";

const successPoints = [
  {
    img: "/images/icons/suc1.png",
    color: "#5B72EE",
    title: "Online Billing, Invoicing, & Contracts",
    describer:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
  },
  {
    img: "/images/icons/suc2.png",
    color: "#00CBB8",
    title: "Easy Scheduling & Attendance Tracking",
    describer:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    img: "/images/icons/suc3.png",
    color: "#29B9E7",
    title: "Customer Tracking",
    describer:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
  },
];
const Success = () => {
  return (
    <div>
      <div className="sm:mx-16 mx-10 2xl:mx-[196px] mt-32">
        <h1 className="text-black font-buenos-aires text-4xl lg:text-5xl font-bold justify-center text-center mt-16 !leading-[130%] xl:mt-[134px]">
          Our Success
        </h1>

        <p className=" text-center font-buenos-aires justify-center mx-auto hidden md:block mt-4 text-lg md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[750px] leading-[160%]">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between text-center font-buenos-airesLight mt-14 xl:mt-24">
          <div className="xl:text-8xl md:text-3xl text-6xl lg:text-5xl font-light flex flex-col leading-[100%]  text-transparent  bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD] ">
            15K+{" "}
            <span className="xl:text-[32px] text-2xl md:text-xl lg:text-2xl font-buenos-aires text-black font-normal">
              Students
            </span>
          </div>
          <div className="xl:text-8xl md:text-3xl text-6xl lg:text-5xl font-light flex flex-col leading-[100%]  text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
            75%{" "}
            <span className="xl:text-[32px] text-2xl md:text-xl lg:text-2xl font-buenos-aires text-black font-normal">
              Total success
            </span>
          </div>
          <div className="xl:text-8xl md:text-3xl text-6xl lg:text-5xl font-light flex flex-col leading-[100%]  text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
            35{" "}
            <span className="xl:text-[32px] text-2xl md:text-xl lg:text-2xl font-buenos-aires text-black font-normal">
              Main questions
            </span>
          </div>
          <div className="xl:text-8xl md:text-3xl text-6xl lg:text-5xl font-light flex flex-col leading-[100%]  text-transparent  bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
            26{" "}
            <span className="xl:text-[32px] text-2xl md:text-xl lg:text-2xl font-buenos-aires text-black font-normal">
              Chief experts
            </span>
          </div>
          <div className="xl:text-8xl md:text-3xl text-6xl lg:text-5xl font-light flex flex-col leading-[100%]  text-transparent  bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
            16{" "}
            <span className="xl:text-[32px] text-2xl md:text-xl lg:text-2xl font-buenos-aires text-black font-normal">
              Years of experience
            </span>
          </div>
        </div>
        {/* all in one  */}

        <h1 className="text-[#2F327D] text-4xl font-bold justify-center text-center mt-20 2xl:mt-32 mb-5 !leading-[180%]">
          All-In-One <span className="text-[#00CBB8]">Cloud Software.</span>
        </h1>

        <p className=" text-gray-500 text-2xl text-center justify-center mx-auto hidden md:block lg:w-2/3 xl:w-1/2 !leading-[180%]">
          TOTC is one powerful online software suite that combines all the tools{" "}
          needed to run a successful school or office.
        </p>

        <div className=" items-center justify-center text-gray-500   bg-white ">
          <div className="relative grid  xl:grid-cols-3 gap-24 lg:gap-[60px] mt-[180px]">
            {successPoints.map((value, index) => (
              <div
                key={index}
                className="relative border rounded-xl shadow-success-box rounded-t-lg pt-[122px] w-full h-[430px] xl:w-[400px] 2xl:w-[450px] xl:h-[430px] mx-auto "
              >
                <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                  <img src={value.img} alt="" />
                </div>
                <p className="relative py-1 text-2xl md:text-3xl font-medium text-center text-blue-900 max-w-[345px] mx-auto">
                  {value.title}
                </p>{" "}
                <p className="text-center text-xl leading-[180%] max-w-[377px] mx-auto mt-6">
                  {" "}
                  {value.describer}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
