import React from "react";

function Choice() {
  const cards = [
    {
      color: "#49BBBD4D",
      img: "/images/icons/brush.png",
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      color: "#5B72EE4D",
      img: "/images/icons/screen.png",

      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      color: "#9DCCFF4D",
      img: "/images/icons/stack.png",

      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      color: "#00CBB84D",
      img: "/images/icons/briefcase.png",

      title: "Business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },

    {
      color: "#F48C064D",
      img: "/images/icons/marketing.png",

      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      color: "#EE645B4D",
      img: "/images/icons/book.png",

      title: "Photography",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      color: "#2526414D",
      img: "/images/icons/reel.png",

      title: "Acting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      color: "#00CBB84D",
      img: "/images/icons/briefcase.png",

      title: "Business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
  ];
  return (
    <section>
      {/* ====================================================================favourite category================================================================ */}
      <div className=" mx-6 md:mx-20 xl:mx-24 2xl:mx-[120px] pt-[80px] pb-[100px]">
        <h1 className="font-bold text-xl xl:text-4xl ">
          Choice favourite course from top category
        </h1>

        <div className="mt-[53px]">
          <div className="grid  md:grid-cols-2 xl:grid-cols-4 gap-8">
            {cards.map((item, i) => {
              return (
                <div
                  key={i}
                  className="shadow-lg flex flex-col text-center p-5 2xl:p-0 justify-center items-center gap-10 rounded-xl 2xl:w-[349px] 2xl:h-[377px]"
                >
                  <div
                    className="w-[90px] h-[90px] text-center flex justify-center items-center rounded-md self-center mx-auto  "
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    <img src={item.img} alt="" className="h-[30px] w-[30px]" />
                  </div>

                  <h1 className="font-bold text-3xl ">{item.title}</h1>

                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choice;
