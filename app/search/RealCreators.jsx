import React from "react";

export default function RealCreators() {
  const creators = [
    {
      img: "/images/creator1.png",
      name: "Jane Cooper",
      profession:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
    {
      img: "/images/creator2.png",
      name: "Adam",
      profession:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
    {
      img: "/images/creator3.png",
      name: "Tomara",
      profession:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
    {
      img: "/images/creator1.png",
      name: "Jane Cooper",
      profession:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
    {
      img: "/images/creator1.png",
      name: "Jane Cooper",
      profession:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
    {
      img: "/images/creator1.png",
      name: "Jane Cooper",
      profession:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
  ];
  return (
    <section className="pt-[90px] pb-[80px] p-10 xl:px-[139px]">
      {/*   course taught by real creators */}
      <div className=" flex justify-between ">
        <p className="text-2xl lg:text-3xl font-semibold">
          Classes taught by real creators
        </p>
        <p className="text-light-teal font-semibold text-xl">See all</p>
      </div>
      <div>
        <div className="flex justify-between flex-wrap mt-[188px] gap-y-36  gap-x-">
          {creators.map((card) => {
            return (
              <div className="shadow-creators-shadow relative flex flex-col items-end justify-end mx-auto xl:mx-0 h-[300px] lg:w-[400px] xl:w-[430px] 2xl:w-[516px] 2xl:h-[303px] sm:w-[350px] w-[300px]">
                <div className="bg-white py-5 px-6">
                  <h2 className="text-2xl text-center font-semibold mb-4 leading-[180%]">
                    {card.name}
                  </h2>
                  <p className="text-center text-lg text-gray-600 leading-[180%]">
                    {card.profession}
                  </p>
                </div>

                <div className="absolute inset-x-0 -top-1/3 flex justify-center">
                  <img
                    src={card.img}
                    alt="Imagme"
                    className="w-[258px] h-[230px] border-white"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
