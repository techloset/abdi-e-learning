import Link from "next/link";
import React from "react";

const Totc = () => {
  return (
    <section>
      <h1 className="text-[#2F327D] text-3xl lg:text-[44px] mt-20 xl:mt-36 font-bold justify-center text-center !leading-[180%]">
        What is <span className="text-[#00CBB8]">TOTC?</span>
      </h1>

      <p className="xl:w-2/3 text-[#696984] text-2xl  hidden md:block 2xl:w-[1101px] mt-5 mb-20 md:w-3/4 lg:w-3/4 justify-center text-center mx-auto !leading-[180%] tracking-[0.48px]">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>

      <div className="grid xl:grid-cols-2 gap-[100px] px-6 xl:px-40 2xl:px-[310px]">
        <div className="flex items-center w-full  justify-center">
          <img
            src="/images/card.png"
            alt="CardImage"
            className="xl:h-[400px]"
          />
          <div className="absolute flex flex-col justify-center items-center">
            <h2 className="text-[32px] text-white text-center font-bold mb-[17px] ">
              FOR INSTRUCTORS
            </h2>

            <button className="text-[22px] border-white border-2 rounded-full px-9 py-6  text-white hover:bg-blue-600">
              Start a class today
            </button>
          </div>
        </div>
        <div className="flex items-center w-full  justify-center">
          <img
            src="/images/card2.png"
            alt="CardImage"
            className="xl:h-[400px]"
          />
          <div className="absolute flex flex-col justify-center items-center">
            <h2 className="text-[32px] text-white text-center font-bold mb-[17px] ">
              FOR STUDENTS
            </h2>

            <button className="text-[22px] rounded-full px-9 py-6   text-white bg-[#23BDEEE5]">
              <Link href="/search">Enter access code</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Totc;
