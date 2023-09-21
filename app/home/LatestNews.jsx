import React from "react";
const Card = ({ cards }) => {
  return (
    <section>
      {/* Heading for the latest News */}
      <div className=" text-center mt-36 mx-auto">
        <p className="text-normal-purple text-4xl   font-bold py-5">
          Latest News and Resources
        </p>
        <p className="text-grey-600 text-2xl mt-5">
          See the developments that have occurred to TOTC in the world
        </p>
      </div>

      <div className="grid grid-cols-12 pb-[115px] gap-4 mx-4 2xl:mx-[155px] mt-24 flex-col lg:flex-row">
        <div className="col-span-12 xl:col-span-6">
          <img className="" src="/images/testiLaptop.png" alt="" />

          <div className="flex flex-col justify-start xl:max-w-[609px] mt-10">
            <button className="bg-light-teal text-white text-xl py-2 px-4 rounded-full w-1/4">
              NEWS
            </button>
            <h5 className="mb-2 text-[26px] font-black text-[#252641] mt-5 leading-[180%]">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h5>
            <p className="mb-4 text-xl text-neutral-600 mt-5 leading-[180%]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a className="text-xl text-neutral-500 mt-7 underline" href="..">
              Read more
            </a>
          </div>
        </div>

        <div className="cards col-span-12 xl:col-span-6 mt-8 mx-8 md:mx-0 md:mt-0 flex flex-col justify-between">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white  cursor-pointer rounded-3xl md:border-none border border-grey-600 ${
                card.buttonText === "NEWS" ? "mt-12" : ""
              } `}
            >
              <div className="md:grid grid-cols-12">
                <div
                  style={{
                    background: `url(${card.image}) no-repeat center`,
                    backgroundSize: "cover",
                  }}
                  className="h-[300px] md:h-[200px] w-full rounded-3xl col-span-4 flex items-end justify-end p-5"
                >
                  <button className="bg-light-teal h-[34px] flex items-center text-white px-4 rounded-full">
                    {card.buttonText}
                  </button>
                </div>
                <div className="md:ml-14 col-span-8 px-2 py-4 md:px-0 md:py-0">
                  <h2 className="text-[22px] font-black leading-[180%] text-[#252641]">
                    {card.title}
                  </h2>

                  <p className="text-grey-600 text-xl mt-5 leading-[180%]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestNews = () => {
  const cards = [
    {
      image: "/images/tablet.png",
      title:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      description:
        "Class Technologies Inc., the company that created Class,...",
      buttonText: "PRESS RELEASE",
    },
    {
      image: "/images/ui.png",
      title:
        "Zoom’s earliest investors are betting millions on a better Zoom for schools",
      description:
        "Zoom was never created to be a consumer product. Nonetheless, the...",
      buttonText: "NEWS",
    },

    {
      image: "/images/cat.png",
      title:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      description:
        "This year, investors have reaped big financial returns from betting on Zoom...",
      buttonText: "NEWS",
    },
  ];

  return <Card cards={cards} />;
};

export default LatestNews;
