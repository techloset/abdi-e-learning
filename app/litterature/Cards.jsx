import React from "react";

function Cards() {
  const cardData = [
    { id: 1, title: "Card 1", img: "/images/search6.jpeg" },
    { id: 2, title: "Card 2", img: "/images/search5.jpeg" },
    { id: 3, title: "Card 3", img: "/images/search4.jpeg" },
    { id: 4, title: "Card 4", img: "/images/search3.jpeg" },
    { id: 5, title: "Card 5", img: "/images/search2.png" },
    { id: 6, title: "Card 6", img: "/images/search1.jpeg" },
  ];
  const btn = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <section className="mx-6 md:mx-[100px] 2xl:mx-[120px]">
      <div className="flex font-bold flex-row flex-wrap justify-center 2xl:justify-start text-[#696969]">
        <button className="bg-[#BBBBBB80] w-[163px] h-[63px] rounded-xl text-xl 2xl:text-2xl font-bold mt-3 ">
          About
        </button>
        <button className="bg-[#BBBBBB80]  w-[163px] h-[63px] lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 ">
          Courses
        </button>
        <button className="bg-[#BBBBBB80]  w-[163px] h-[63px] lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 ">
          Notes
        </button>
        <button className="bg-[#BBBBBB80]  w-[163px] h-[63px] lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 ">
          Project
        </button>
        <button className="bg-[#BBBBBB80]  w-[163px] h-[63px] lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 ">
          Podcast
        </button>
        <button className="bg-[#49BBBD] text-white  w-[163px] h-[63px] lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 ">
          Book
        </button>
        <button className="bg-[#BBBBBB80]  w-[163px] h-[63px] lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 ">
          Review
        </button>
      </div>
      <p className="text-3xl font-poppins font-medium  mt-[68px] mb-[49px]">
        Literature Course{" "}
      </p>
      <div className="flex flex-wrap justify-between gap-16">
        {cardData.map((card) => (
          //   <div className="">
          <div
            key={card.id}
            className="bg-white rounded-[10px] shadow-2xl p-6 2xl:w-[503px] 2xl:h-[647px] mx-auto xl:m-0"
          >
            <img
              className="rounded-xl w-[450px] h-[518px] "
              src={card.img}
              alt=""
            />
            <div className="flex justify-between my-7">
              <h1 className="text-[25px] ">All Benefits Of PLUS </h1>
              <h1 className="text-3xl font-extrabold text-[#49BBBD] ">$24</h1>
            </div>
          </div>
          //   </div>
        ))}
      </div>
      <div className="w-full flex justify-center my-[52px]">
        <button
          className=" text-[#49BBBD] font-semibold h-[70px] w-[70px]"
          style={{ backgroundColor: "rgba(73, 187, 189, 0.20)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4.5}
            stroke="#49BBBD"
            className="w-6 h-6 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {btn.map((btn) => (
          <button
            className={`${
              btn.id == "3" ? "bg-[#49BBBD]" : ""
            } hover:bg-[#49BBBD] text-black font-semibold h-[70px] w-[70px]`}
          >
            {btn.id}
          </button>
        ))}

        <button
          className="font-extrabold text-[#49BBBD] h-[70px] w-[70px]"
          style={{ backgroundColor: "rgba(73, 187, 189, 0.20)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4.5}
            stroke="currentColor"
            className="w-6 h-6 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Cards;
