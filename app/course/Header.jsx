import React from "react";

function Header() {
  const cards = [
    {
      id: 1,
      image: "/images/testiLaptop.png",
      title: "AWS Certified Solutions Architect",
      descriptionless:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      descriptionmore:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
      views: "251232",
    },
    {
      id: 2,
      image: "/images/comp.png",
      title: "AWS Certified Solutions Architect",
      descriptionless:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      descriptionmore:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
      views: "251232",
    },
    {
      id: 3,
      image: "/images/code.png",
      title: "AWS Certified Solutions Architect",
      descriptionless:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      descriptionmore:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
      views: "251232",
    },
  ];
  return (
    <>
      <div className="bg-indigo-300 bg-opacity-20  ">
        <div className=" mx-6 md:mx-20 xl:mx-24 2xl:ms-[120px] 2xl:me-[113px] pt-[50px] pb-[57px]">
          <div className="flex justify-between">
            <div className=" xl:text-[30px] text-xl sm:text-2xl mb-[50px] font-semibold ">
              Welcome back, ready for your next lesson?
            </div>
            <div className="text-light-teal text-xl font-bold  hidden md:block">
              View History
            </div>
          </div>

          {/* related blog  */}
          <div className="grid md:grid-cols-2  xl:grid-cols-3 gap-x-6 gap-y-12 mb-[50px]">
            {cards.map((card, index) => (
              <div
                className="mx-auto lg:mx-0 bg-white shadow-md overflow-hidden p-5 rounded-[20px]"
                key={index}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-xl w-[486px]"
                />
                <div className="py-[12.3px] px-[5px]">
                  <h2 className="text-xl font-bold mb-[10px]">{card.title}</h2>
                  <div className="flex items-center space-x-4 mb-[25px]">
                    <img
                      src="/images/profileBlogicon.png"
                      alt="ProfilePicture"
                      className="w-10 h-10 rounded-full bg-[#d9d9d9]"
                    />

                    <span className="text-gray-700">Lina</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                    <div className="bg-light-teal h-2.5 rounded-xl  w-[75%] "></div>
                  </div>
                  <p className="float-right text-gray-600 ">Lesson 5 of 7</p>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-600">
                      <div className="text-gray-600 flex items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end me-3">
            <button className="bg-light-teal bg-opacity-70 hover:bg-teal-600 text-white h-[50px] w-[50px] flex justify-center items-center rounded font-bold mr-2">
              <img src="/images/leftArrow.png" alt="" />
            </button>
            <button className="bg-light-teal hover:bg-teal-600 text-white h-[50px] w-[50px] flex justify-center items-center rounded font-bold">
              <img src="/images/leftArrow.png" alt="" className="rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
