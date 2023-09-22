import React from "react";

function Students() {
  const Card = ({ title, content, img }) => {
    return (
      <div className="bg-white rounded-3xl max-w-[384px] h-[395px] mx-auto lg:mx-0 shadow-lg p-9">
        <img
          src={img}
          alt=""
          className="rounded w-[118px] h-[118px] bg-gray-400 justify-center mx-auto "
        />

        <h3 className="text-center text-xl font-semibold mb-5 mt-5">{title}</h3>
        <p className="justify-center text-gray-600 text-base text-center">
          {content}
        </p>
      </div>
    );
  };

  const student = [
    {
      id: 1,
      img: "/images/blogDetailGirl.png",

      title: "Bulkin Simons",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      title: "Bulkin Simons",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
      img: "/images/blogDetailGirl.png",
    },
    {
      id: 3,
      title: "Bulkin Simons",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
      img: "/images/blogDetailGirl.png",
    },
    {
      id: 4,
      title: "Bulkin Simons",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
      img: "/images/blogDetailGirl.png",
    },
  ];
  return (
    <section>
      {/* =====================================================================what our students have to say ================================================================================ */}
      <div className="bg-indigo-300 bg-opacity-20 relative">
        <div className="sm:mx-10 mx-6 lg:mx-16 xl:mx-20 2xl:mx-[100px] pb-[317px]">
          <h1 className="font-bold text-4xl pt-20 pb-12">
            What our students have to say
          </h1>

          <div className="flex justify-between">
            <div className="mx-auto justify-center w-full relative ">
              <button className="absolute hidden 2xl:block top-1/2  text-white left-1 transform -translate-y-1/2 -translate-x-1/2 p-2 w-[50px] h-[50px] text-2xl bg-light-teal rounded-full">
                &lt;
              </button>
              <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-12 xl:gap-14 2xl:grid-cols-4  2xl:gap-8">
                {student.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    img={testimonial.img}
                    title={testimonial.title}
                    content={testimonial.content}
                  />
                ))}
              </div>
              <button className="absolute hidden 2xl:block top-1/2 right-6 text-white transform -translate-y-1/2 translate-x-1/2 p-2 w-[50px] h-[50px] text-2xl bg-light-teal rounded-full">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* =========================app is vailable for freee=================================================================== */}
      <div className=" mx-10 xl:mx-28 relative -top-28">
        <div className="bg-gray-800 text-white rounded-[37px] px-12 xl:px-24 h-[218px] flex flex-col xl:flex-row justify-center gap-4 xl:justify-between items-center font-bold">
          {/* <div className="flex flex-col xl:flex-row justify-between items-center font-bold"> */}
          <h1 className="xl:text-3xl sm:text-2xl text-center font-bold ">
            APP is available or free{" "}
          </h1>
          <div className="flex flex-col md:flex-row justify-center text-xl gap-4">
            <div className="bg-blue-500 font-bold w-[254px] h-[63px] rounded-xl mx-auto flex items-center justify-center gap-2">
              <img src="/images/android.png" alt="" className="w-[35px]" />
              <button className="">Android APP</button>
            </div>

            <div className=" bg-light-teal font-bold w-[254px] h-[63px] rounded-xl mx-auto flex items-center justify-center gap-2">
              <img src="/images/apple.png" alt="" className="w-[35px]" />
              <button className="">IOS APP</button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Students;
