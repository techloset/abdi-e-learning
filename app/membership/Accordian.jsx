import React from "react";

function Accordian() {
  const Questions = [
    {
      question: "Lorem ipsum dolor sit amet",
    },
    {
      question: "Consectetur adipiscing elit, sed do ",
    },
    {
      question: "Eiusmod tempos Lorem ipsum",
    },
    {
      id: "4",
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      question: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <section className="mx-6 xl:mx-[101px]">
      <h1 className="text-center text-xl sm:text-2xl lg:text-4xl font-semibold">
        Online coaching lessons for remote learning
      </h1>{" "}
      <br /> <br />
      {/* =====================================accordian---------------------------------- */}
      <div className="questions">
        {Questions.map((question, index) => (
          <div key={index} className="border-b border-gray-300 rounded mb-4">
            <div className="flex items-center justify-between py-4 cursor-pointer">
              <div className="flex">
                <div className="w-5 h-5 bg-[#55EFC4] rounded-full mr-5 "></div>
                <h2 className="text-lg font-semibold text-[#2D3436]">
                  {question.question}
                </h2>
              </div>
              <img src="/images/navArrow.png" alt="" />
            </div>
            <div className="p-4">
              <p className="text-[#696984] max-w-[1634px] tracking-wide text-sm leading-[180%]">
                {question.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accordian;
