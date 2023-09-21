import React from "react";

function ClassManagement() {
  return (
    <section>
      {/* ----------------------------------------------------------class management -------------------------------------------------------------- */}
      <div className="grid lg:grid-cols-2  gap-10 mx-6 lg:mx-[186px] mt-20 lg:mt-40">
        <div className="mx-4 my-auto p-4 hidden lg:block">
          <h1 className="text-dark-teal text-2xl leading-[160%] xl:text-[40px] font-semibold">
            Class Management <br />
            <span className="text-normal-purple ">
              Tools for Educators{" "}
            </span>{" "}
          </h1>
          <br />
          <br />

          <p className="max-w-[645px] text-[22px] text-grey-600 leading-[180%] tracking-[0.44px]">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
        <div className="ms-auto">
          <img src="/images/gradebook.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default ClassManagement;
