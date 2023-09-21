import React from "react";

function OneOnOne() {
  return (
    <section>
      {/* -----------------------------------------------------------One to one discussions-------------------------------------------------------------- */}
      <div className="grid lg:grid-cols-2  gap-10 mx-6 lg:mx-[186px] mt-20 lg:mt-40">
        <div className=" ">
          <img src="/images/discussion.png" alt="" />
        </div>

        <div className="mx-4 my-auto  p-4">
          <h1 className="text-normal-purple text-2xl leading-[160%] xl:text-[40px] font-semibold xl:max-w-[274px]">
            One-on-One <span className="text-dark-teal">Discussions</span>
          </h1>
          <br />
          <br />

          <p className="max-w-[540px] text-[22px] text-grey-600 leading-[180%] tracking-[0.44px]">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
      <button className="text-light-teal mt-24 border h-[88px] w-[280px] border-light-teal rounded-full mx-auto justify-center items-center hover:bg-light-teal hover:text-white text-xl flex sm:text-2xl ">
        See more features
      </button>
    </section>
  );
}

export default OneOnOne;
