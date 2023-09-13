import React from "react";

function RelatedBlogs() {
  const cards = [
    {
      id: 1,
      image: "/images/card.png",
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      description:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251232",
    },
    {
      id: 2,
      image: "/images/testiLaptop.png",
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      description:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251232",
    },
  ];
  return (
    <>
      {/* =================================related blog================================== */}
      <div className="bg-[#9DCCFF] bg-opacity-20 ">
        <div className="lg:mx-16 mx-6 xl:mx-20">
          <div className="flex justify-between  pt-[93px]">
            <div className="font-medium text-xl md:text-[30px]">
              Related Blog
            </div>
            <div className="text-[#49BBBD] text-[20px] font-bold">See all</div>
          </div>

          {/* two cards design  */}
          <div className="flex gap-6 flex-wrap xl:flex-nowrap justify-between mt-[41px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className="card mx-auto 2xl:w-[786px] 2xl:h-[900px] bg-white shadow-md overflow-hidden sm:px-[33px] px-4 py-7 sm:py-[60px] rounded-[20px]"
              >
                <div
                  className="h-[210px] sm:h-[300px] md:h-[382px] max-w-[720px] rounded-[20px]"
                  style={{
                    background: `url(${card.image}) no-repeat center center`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="card-body mt-4">
                  <h2 className="text-gray-800 md:text-[26px] not-italic font-medium leading-[180%] max-w-[684px]">
                    {card.title}
                  </h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="/images/profileBlogicon.png"
                      alt="ProfilePicture"
                      className="w-10 md:w-[70px] rounded-full"
                    />

                    <span className="text-gray-700 md:text-lg">Lina</span>
                  </div>

                  <p className="text-gray-600 hidden md:block text-xl not-italic font-normal max-w-[684px] leading-[180%]">
                    {card.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <button className="underline text-[#696984] text-xl">
                      Read More
                    </button>
                    <div className="text-gray-600">
                      <div className="flex gap-2">
                        <img src="/images/view.png" alt="viewIcon" />
                        <p>{card.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-[73px] pb-[66px]">
            <button className="bg-[#58babb] bg-opacity-70 hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedBlogs;
