import React from "react";

export default function Testimonial() {
  return (
    <section>
      <div className="flex flex-col xl:flex-row mx-5 justify-between lg:mx-[0px] mt-32 2xl:ps-[160px] 2xl:pe-[180px]">
        {/* what they say */}
        <div className="mx-5 lg:mx-16">
          <div className="flex">
            <img src="/images/line.png" alt="" className="py-4" />
            <p className="text-xl text-[#525596]">TESTIMONIAL</p>
          </div>

          <h1 className="text-6xl font-bold font-sans text-[#525596] mt-8">
            What They Say?
          </h1>

          <p className="text-[#696984] text-[26px] mt-7 2xl:w-[607px]">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>

          <p className="text-[#696984] text-[26px] mt-7 2xl:w-[573px]">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>

          <p className="text-[#696984] text-[26px] mt-10">
            Are you too? Please give your assessment
          </p>

          <button className="text-[#49BBBD] flex mt-10 ps-7 items-center md:text-[22px] lg:text-[20px] xl:text-[22px]  font-semibold xl:text-base 2xl:text-[22px] border-[#49BBBD]  rounded-full border ">
            Write your assessment
            <div className="svg ps-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <circle cx="40" cy="40" r="39.5" stroke="#49BBBD" />
                <path
                  d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                  fill="#49BBBD"
                />
              </svg>
            </div>
          </button>
        </div>
        {/* testimonial review */}
        <div>
          {/* girl with books in hand */}
          <img
            src="/images/testitest.png"
            className="xl:absolute mx-auto mt-6 2xl:-ms-20"
            alt=""
          />

          {/* testimonial */}
          <div class="p-6 hidden xl:block z-10 transform lg:mt-[500px] ml-[10px]  lg:w-[600px]  bg-white border-[#F67766] border-l-[14px]  border-r-0 border-t-0 border-b-0 rounded-lg shadow">
            <div className="flex ">
              <img
                src="/images/test_text.png"
                className="h-fullmx-6 mr-6 "
                alt=""
              />
              <p className="text-[22px] text-[#5F5F7E] ">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort. TOTC is exactly what our business has been lacking."
              </p>
            </div>

            <div className=" mx-6 mt-4 flex ">
              <div className="text-2xl text-[#5F5F7E]">Gloria Rose</div>
              <div className="lg:ms-auto ">
                <div class="flex justify-end">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p className="text-[#80819A]">12 reviews at Yelp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
