import React from "react";
import Container from "../UI/Container";
import Image from "next/image";

const Articles = () => {
  return (
    <Container className="mt-10 lg:mt-0">
      <div className="grid grid-rows-2 lg:gap-20 gap-0">
        <div className="grid lg:grid-cols-[_35%_55%_10%] lg:grid-rows-none grid-rows-[_1fr_1fr_0.2fr]  h-full ">
          {/* content */}

          <div className="flex flex-col gap-9 items-center lg:items-stretch">
            <div className="relative">
              <h2 className="lg:text-5xl text-4xl ">
                <span className=" border-solid border-b-2 pb-2 border-blue-400">
                  S
                </span>
                urf Training
              </h2>
              <div className="absolute lg:-top-20 -top-12 opacity-5 lg:text-9xl text-7xl">
                <p>01</p>
              </div>
            </div>

            <p className="w-2/3 text-gray-400">
              By better understanding the various aspects of surfing, by better
              understanding the various aspects of surfing, you will improve
              faster and have more fun in the water.
            </p>

            <div className="text-left mt-10">
              <span className="font-bold text-xs  uppercase tracking-widest text-gray-900 border-solid border-b-2 pb-2 border-blue-400 ">
                read more
              </span>
            </div>
            {/* 01 */}
          </div>
          {/* photo */}
          <div className="relative w-full  h-96">
            <Image src="/images/article_1.png" alt="" fill />
          </div>
          {/* side text */}
          <div className="self-start">
            <p className="text-gray-400 overflow-visible lg:tracking-widest text-xs tracking-wider uppercase lg:-rotate-90  whitespace-nowrap mt-0">
              surf camps
            </p>
          </div>
        </div>

        {/* article 2 */}
        <div className="grid lg:grid-cols-[_10%_35%_55%] lg:grid-rows-none grid-rows-[_0.1fr_1fr_1fr]  gap-0 lg:gap-5 place-items-center">
          {/* side text */}
          <div className="lg:self-start self-end justify-self-end">
            <p className="text-gray-400 overflow-visible lg:tracking-widest text-xs tracking-wider uppercase lg:-rotate-90 whitespace-nowrap lg:mt-11">
              surf camps
            </p>
          </div>
          {/* photo */}
          <div className="relative w-full lg:h-96 h-full">
            <Image src="/images/point_break.png" alt="" fill />
          </div>
          {/* content */}
          <div className="flex flex-col gap-9 lg:items-start items-center">
            <div className="relative">
              <h2 className="text-5xl">
                <span className=" border-solid border-b-2 pb-2 border-blue-400">
                  P
                </span>
                oint Break
              </h2>
              {/* 02 */}
              <div className="absolute lg:-top-20 -top-12 opacity-5 lg:text-9xl text-7xl">
                <p>02</p>
              </div>
            </div>
            <p className="lg:w-3/5 w-full text-gray-400">
              By better understanding the various aspects of surfing, by better
              understanding the various aspects of surfing, you will improve
              faster and have more fun in the water.
            </p>

            <div className="text-left lg:mt-10 mt-4">
              <span className="font-bold text-xs  uppercase tracking-widest text-gray-900 border-solid border-b-2 pb-2 border-blue-400 ">
                read more
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Articles;
