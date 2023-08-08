import React from "react";
import Container from "../UI/Container";
import withLines from "../HOC/WithLines";

const Subscribe = () => {
  return (
    <Container>
      <div className="flex justify-center flex-col items-center gap-10 pt-5">
        <h2 className="text-gray-800 text-5xl">Join the Club</h2>
        <p className="lg:w-1/2 text-center text-gray-400">
          By better understanding the various aspects of surfing, by better
          understanding the various aspects of surfing, you will improve faster
          and have more fun in the water.
        </p>
        <div className="relative lg:w-1/2 lg:m-auto w-full">
          <input
            className="lg:py-3 py-2  px-2 w-full outline-none placeholder:tracking-widest placeholder:uppercase placeholder:text-xs  bg-gray-100"
            placeholder="your e-mail"
          />
          <button className="absolute right-0 bg-blue-400 h-full text-white lgw-14 w-9">
            {" "}
            &gt;
          </button>
        </div>
      </div>
    </Container>
  );
};

export default withLines(Subscribe);
