import React from "react";

const Totc = () => {
  return (
    <section>
      <h1 className="text-[#2F327D] text-3xl lg:text-[44px] mt-20 xl:mt-36 font-bold justify-center text-center">
        What is <span className="text-[#00CBB8]">TOTC?</span>
      </h1>
      <br />
      <p className="xl:w-2/3 text-[#696984] text-2xl  hidden md:block 2xl:w-[1101px] md:w-3/4 lg:w-3/4 justify-center text-center mx-auto">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>
      <br />
      <br />
      <div className="grid xl:grid-cols-2 gap-[100px] px-6 xl:px-40 2xl:px-[310px]">
        <div className="flex items-center w-full  justify-center">
          <img
            src="/images/card.png"
            alt="CardImage"
            className="xl:h-[400px]"
          />
          <div className="absolute">
            <h2 className="text-2xl text-white text-center font-bold mb-2 ">
              FOR INSTRUCTORS
            </h2>
            <br />
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
          <div className="absolute">
            <h2 className="text-2xl text-white text-center font-bold mb-2 ">
              FOR STUDENTS
            </h2>
            <br />
            <button className="text-[22px] rounded-full px-9 py-6   text-white bg-[#23BDEEE5]">
              Enter access code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Totc;
