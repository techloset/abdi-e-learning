import React from "react";

function ReadingBlog() {
  const bloglist = [
    {
      img: "/images/ui.png",
      title: "UX/UI",
    },
    {
      img: "/images/react.png",
      title: "React",
    },
    {
      img: "/images/php.png",
      title: "PHP",
    },
    {
      img: "/images/js.png",
      title: "JavaScript",
    },
  ];
  return (
    <>
      {/* reading blog list  */}
      <div className="lg:mx-16 mx-6 xl:mx-[110px] flex-col py-[80px]">
        <div className="flex justify-between">
          <div className="font-bold text-xl md:text-[30px] ">
            Reading blog list
          </div>
        </div>
        <br /> <br />
        <div className="flex justify-between gap-4 flex-wrap xl:flex-nowrap">
          {bloglist.map((val, index) => (
            <div
              className="w-[390px] h-[300px] 2xl:w-[356px] 2xl:h-[327px] mx-auto rounded-[20px] flex justify-center items-end"
              key={index}
              style={{
                background: `url(${val.img}) no-repeat `,
                backgroundSize: "cover",
              }}
            >
              <div className="">
                <button className="text-2xl mb-8 bg-white bg-opacity-70 text-black rounded-xl py-2 px-12  h-14 w-56 text-center justify-center mx-auto  font-bold">
                  {val.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReadingBlog;
