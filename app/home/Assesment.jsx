import React from "react";

function Assesment() {
  return (
    <section>
      <div className="flex justify-between flex-wrap gap-10 mx-6 lg:mx-[192px] 2xl:me-[267px] 2xl:ms-[192px] mt-20 lg:mt-40">
        <div className=" ">
          <img src="/images/assess.png" alt="" />
        </div>
        <div className=" md:mx-4 my-auto ">
          <h1 className="text-normal-purple text-2xl leading-[160%] xl:text-[40px] font-semibold">
            Assessments, <br /> <span className="text-dark-teal">Quizzes</span>,
            Tests{" "}
          </h1>
          <br />
          <br />

          <p className="text-grey-600 text-[22px] xl:max-w-[556px] !leading-[180%] tracking-[0.44px]">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Assesment;
