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
            <img src="/images/design.png" alt="" className="h-6" />
            <p className="ml-1 text-gray-600 "> Design</p>
          </div>
          <div className="flex justify-between">
            <img src="/images/clock.png" alt="" className="h-6" />
            <p className="ml-1 text-gray-600">3 Months</p>
          </div>
        </div>

        <p className="font-bold text-2xl mt-5">
          AWS Certified solutions Architect
        </p>

        <p className="text-gray-600 mt-8 text-lg leading-[180%] hidden xl:block">
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
            <del className="mt-1 text-gray-600">$100</del>
            <p className="text-2xl ml-3 text-teal-400 font-semibold ">$80</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:mx-16 mx-6  lg:mx-[137px] mt-[50px]">
      <div className="flex justify-between gap-4 flex-wrap xl:flex-nowrap">
        {articles.map((testimonial) => (
          <Card key={testimonial.id} img={testimonial.img} />
        ))}
      </div>
    </div>
  );
};

export default Card;
