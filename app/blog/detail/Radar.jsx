import React from "react";

function Radar() {
  return (
    <section>
      <div className="md:mx-14 mx-6 lg:mx-20 xl:mx-[120px] pt-[80px] w-[1681px]">
        <p className="font-semibold  text-[44px] text-purple-900 ">
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </p>

        <p className="text-gray-600 text-2xl leading-[180%] tracking-[0.48px] w-[1681px] mt-[25px]">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <p className="text-gray-600 text-2xl leading-[180%] tracking-[0.48px] w-[1681px] mt-[25px]">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place. <br /> TOTC is a
          platform that allows educators to create online classes whereby they
          can store the course materials online; manage assignments, quizzes and
          exams; monitor due dates; grade results and provide students with
          feedback all in one place. <br /> TOTC is a platform
        </p>
        <p className="text-gray-600 text-2xl leading-[180%] tracking-[0.48px] w-[1681px] mt-[30px]">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place. <br /> TOTC is a
          platform that allows educators to create online classes whereby they
          can store the course materials online; manage
        </p>

        <div className="flex flex-col sm:flex-row mt-[26px]">
          <button className="bg-[#49BBBD1A] text-gray-600 px-6 py-3 mx-4 my-2 sm:my-0  rounded-full ">
            affordable
          </button>
          <button className="bg-[#49BBBD1A] text-gray-600 px-6 py-3 mx-4 my-2 sm:my-0 rounded-full ">
            Stunning
          </button>
          <button className="bg-[#49BBBD1A] text-gray-600 px-6 py-3 mx-4 my-2 sm:my-0 rounded-full ">
            making
          </button>
          <button className="bg-[#49BBBD1A] text-gray-600 px-6 py-3 mx-4 my-2 sm:my-0 rounded-full ">
            madbrawns
          </button>
        </div>

        <hr className="text-gray-600 h-[1px] mt-[31px]" />

        <div className="flex justify-between items-center my-[30px]">
          <div className="flex items-center">
            <img
              src="/images/blogDetailGirl.png"
              className="rounded-md mr-3 w-[77] bg-gray-300  h-[77px]"
              alt=""
            />
            <div>
              <p className="text-gray-600 text-xs not-italic font-medium">
                Written by
              </p>
              <p className="text-black text-lg not-italic font-medium">Lina</p>
            </div>
          </div>
          <button className=" w-[150px] md:w-[232px] h-[49px] text-teal-400 font-semibold  border-teal-400 rounded-xl border">
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}

export default Radar;
