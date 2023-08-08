import Image from "next/image";
import React from "react";

import style from "./styles.module.css";
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import withLines from "../HOC/WithLines";
import Container from "../UI/Container";
import Nav from "../UI/Nav";

const HeroSection = () => {
  return (
    <Container>
      {/* header section */}
      <header className="h-11  grid grid-cols-[20%_minmax(90%,_1fr)] items-center mb-10">
        <Image src="/images/logo.png" width={20} height={20} alt="logo" />
        <Nav />
        {/* hero section */}
      </header>
      <section
        className={`grid grid-cols-[20%_70%_10%] justify-start ${style.hero}`}
      >
        {/* content */}
        <div className="self-center overflow-visible relative z-10 h-full flex flex-col justify-center">
          <div className="flex flex-col gap-8">
            <p className="text-blue-300 tracking-widest uppercase lg:text-lg text-xs">
              Your
            </p>
            <p
              style={{ width: "1000px" }}
              className="lg:text-7xl text-xl  overflow-visible font-bold"
            >
              Beautiful Escape
            </p>
            <p className="text-gray-400 overflow-visible text-left lg:text-lg text-xs w-60 lg:w-96">
              One of greatest things about the sport or surfing is that you need
              only three things your body a surfboard, and a wave
            </p>
          </div>
          <div className="absolute bottom-0 flex gap-2 items-center">
            <span className="text-gray-300 lg:text-2xl text-md"> &lt;</span>
            <p className="text-xs lg:text-lg">
              <span className="text-blue-300 font-bold text-md">1</span>/
              <span className="font-bold text-md">5</span>
            </p>
            <span className="text-gray-300 lg:text-2xl text-md"> &gt;</span>
          </div>
        </div>
        {/* hero image */}
        <div style={{ width: "100%", position: "relative" }}>
          <Image
            src="/images/massive_waves.jpg"
            objectFit="cover"
            alt="massive_waves"
            fill
          />
        </div>
        {/* social media */}
        <div className="text-center flex items-center justify-between flex-col">
          <p
            style={{ fontSize: "0.6rem" }}
            className="text-gray-400 overflow-visible lg:tracking-widest tracking-wider uppercase -rotate-90 whitespace-nowrap mt-20 lg:mt-11"
          >
            First surfing magazine
          </p>
          {/* icons */}
          <div className="flex flex-col gap-2 text-gray-400">
            <BiLogoTwitter style={{ fontSize: "20px" }} />
            <BiLogoFacebook style={{ fontSize: "20px" }} />
            <BiLogoInstagram style={{ fontSize: "20px" }} />
          </div>
        </div>
      </section>
      {/* hero section quote */}
      <section className="text-center lg:mt-24 mt-14 text-gray-600 lg:text-2xl text-md">
        <p className="mb-2">
          Surfing is the most blissful experience you can have
        </p>
        <p className="mb-4">on this planet, a taste of heaven.</p>
        <p
          style={{ fontSize: "9px" }}
          className="text-gray-600  tracking-widest uppercase lg:text-xs  font-bold"
        >
          jhon mccarthy
        </p>
      </section>
    </Container>
  );
};

export default withLines(HeroSection);
