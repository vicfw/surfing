import Image from "next/image";
import React from "react";
import withLines from "../HOC/WithLines";
import { BiPlay } from "react-icons/bi";
import style from "./mediaContent.module.css";
import Container from "../UI/Container";

const MediaContent = () => {
  return (
    <Container className={`${style.mediaContentWrapper}`}>
      <div className="relative h-screen  grid grid-cols-[45%_45%_10%] items-center justify-center">
        <div
          style={{ width: "106%" }}
          className="relative bottom-40 h-96 flex justify-center"
        >
          <Image
            src="/images/surf_1.jpg"
            objectFit="cover"
            alt="massive_waves"
            fill
          />
          <p className="absolute -bottom-28 w-1/2 text-gray-400">
            By better understanding the various aspects of surfing, you will
            improve faster and have more fun in the water.
          </p>
          <p className="absolute -bottom-44 font-bold text-xs  uppercase tracking-widest text-gray-900 border-solid border-b-2 pb-2 border-blue-400">
            read more
          </p>
        </div>
        <div
          style={{ height: "600px", width: "105%" }}
          className="relative right-9 flex justify-center items-center "
        >
          <Image
            src="/images/massive_waves.jpg"
            objectFit="cover"
            alt="massive_waves"
            fill
          />
          <div className="z-20 bg-blue-400 w-16 h-16 flex items-center justify-center rounded-full">
            <BiPlay style={{ color: "#fff", fontSize: 35 }} />
          </div>
        </div>
        <></>
      </div>
    </Container>
  );
};

export default withLines(MediaContent);
