import React from "react";

function ToolsForTeachers() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-10 mx-6 lg:mx-[186px] mt-20 lg:mt-40">
        <div className="my-auto">
          <h1 className="text-normal-purple text-2xl leading-[160%] xl:text-[40px] font-semibold">
            <span className="text-dark-teal">Tools</span> For Teachers <br />{" "}
            And Learners
          </h1>
          <br />
          <br />
          <div className="absolute left-[30%]">
            <img src="/images/handVector.png" alt="" />
          </div>
          <p className=" max-w-[578px] text-[22px] text-grey-600 !leading-[180%] tracking-[0.44px]">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>
        <div className="ms-auto">
          <img src="/images/tools.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default ToolsForTeachers;
