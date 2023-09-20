import React from "react";

function Assesment() {
  return (
    <section>
      <div className="grid lg:grid-cols-2  gap-10 mx-6 lg:mx-[192px] mt-20 lg:mt-40">
        <div className=" ">
          <img src="/images/assess.png" alt="" />
        </div>
        <div className=" md:mx-4 my-auto ">
          <h1 className="text-[#2F327D] text-2xl leading-[160%] xl:text-[40px] font-semibold">
            Assessments, <br /> <span className="text-[#00CBB8]">Quizzes</span>,
            Tests{" "}
          </h1>
          <br />
          <br />

          <p className="text-[#696984] text-[22px] xl:max-w-[556px] !leading-[180%] tracking-[0.44px]">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Assesment;
