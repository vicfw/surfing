import React from "react";
import Container from "../UI/Container";
import Image from "next/image";

const Articles = () => {
  return (
    <Container className="">
      <div className="grid grid-rows-2 gap-20">
        <div className="grid grid-cols-[_35%_55%_10%]  h-full ">
          {/* content */}

          <div className=" flex flex-col gap-9">
            <div className="relative">
              <h2 className="text-5xl">
                <span className=" border-solid border-b-2 pb-2 border-blue-400">
                  S
                </span>
                urf Training
              </h2>
              <div className="absolute -top-20 opacity-5 text-9xl">
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
            <p className="text-gray-400 overflow-visible lg:tracking-widest text-xs tracking-wider uppercase -rotate-90 whitespace-nowrap mt-20 lg:mt-11">
              surf camps
            </p>
          </div>
        </div>

        {/* article 2 */}
        <div className="grid grid-cols-[_10%_35%_55%] place-items-center h-full">
          {/* side text */}
          <div className="self-start justify-self-end">
            <p className="text-gray-400 overflow-visible lg:tracking-widest text-xs tracking-wider uppercase -rotate-90 whitespace-nowrap mt-20 lg:mt-11">
              surf camps
            </p>
          </div>
          {/* photo */}
          <div className="relative w-full h-96">
            <Image src="/images/article_1.png" alt="" fill />
          </div>
          {/* content */}
          <div className="flex flex-col gap-9 items-end">
            <div className="relative">
              <h2 className="text-5xl">
                <span className=" border-solid border-b-2 pb-2 border-blue-400">
                  P
                </span>
                oint Break
              </h2>
              {/* 02 */}
              <div className="absolute -top-20 opacity-5 text-9xl">
                <p>02</p>
              </div>
            </div>
            <p className="w-3/5 text-gray-400">
              By better understanding the various aspects of surfing, by better
              understanding the various aspects of surfing, you will improve
              faster and have more fun in the water.
            </p>

            <div className="text-left mt-10">
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
