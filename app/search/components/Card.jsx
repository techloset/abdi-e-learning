import React from "react";
const Card = () => {
  const articles = [
    {
      img: "/images/tablet.png",
    },
    {
      img: "/images/ui.png",
    },
    {
      img: "/images/testiLaptop.png",
    },
    {
      img: "/images/cat.png",
    },
    {
      img: "/images/testiLaptop.png",
    },
    {
      img: "/images/cat.png",
    },
    {
      img: "/images/ui.png",
    },
    {
      img: "/images/tablet.png",
    },
  ];

  const Card = ({ img }) => {
    return (
      <div className="bg-white rounded-xl 2xl:h-[617px] 2xl:w-[374px] shadow-xl p-6 mx-auto">
        <img
          className="  h-[238px] w-[400px]  rounded-xl"
          src={img}
          alt="myimageis here"
        />
        <br />
        <div className="flex justify-between">
          <div className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 text-[#D9D9D9] h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>

            <p className="ml-1 text-[#696984] "> Design</p>
          </div>
          <div className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 text-[#D9D9D9] h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="ml-1 text-[#696984]">3 Months</p>
          </div>
        </div>

        <p className="font-bold text-2xl mt-5">
          AWS Certified solutions Architect
        </p>

        <p className="text-[#696984] mt-8 text-lg leading-[180%] hidden xl:block">
          Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
          tempor
        </p>

        <div className="flex justify-between mt-8">
          <div className="flex">
            <img
              src="/images/profileBlogicon.png"
              alt="ProfilePicture"
              className="w-10 h-10 rounded-full"
            />
            <p className="ml-4 mt-1">Lina</p>
          </div>

          <div className="flex  ">
            <del className="mt-1 text-[#696984]">$100</del>
            <p className="text-2xl ml-3 text-[#49BBBD] font-semibold ">$80</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:mx-16 mx-6  lg:mx-[118] my-[69px]">
      <div className="grid xl:grid-cols-4 gap-y-[82px] gap-x-[62px]">
        {articles.map((testimonial) => (
          <Card key={testimonial.id} img={testimonial.img} />
        ))}
      </div>
    </div>
  );
};

export default Card;
