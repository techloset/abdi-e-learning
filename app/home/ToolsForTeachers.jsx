import React from "react";

function ToolsForTeachers() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-10 mx-6 lg:mx-[186px] mt-20 lg:mt-40">
        <div className="mx-4 my-auto p-4">
          <h1 className="text-[#2F327D] text-2xl leading-[160%] xl:text-[40px] font-semibold">
            <span className="text-[#00CBB8]">Tools</span> For Teachers <br />{" "}
            And Learners
          </h1>
          <br />
          <br />

          <p className=" max-w-[578px] text-[22px] text-[#696984] leading-[180%] tracking-[0.44px]">
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
