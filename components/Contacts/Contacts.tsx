import Image from "next/image";
import React from "react";
import withLines from "../HOC/WithLines";
import style from "./contacts.module.css";

const Contacts = () => {
  return (
    <div className="flex lg:flex-row flex-col py-20 lg:pr-20 px-5 lg:px-0 lg:gap-32 gap-10">
      {/* photo */}
      <div className={`relative w-full h-96 ${style.imageWrapper}`}>
        <Image src="/images/contact.png" alt="" fill />
      </div>
      {/* content */}
      <div
        style={{ flex: 3 }}
        className="relative flex flex-col gap-12 items-start"
      >
        <div className="self-start justify-self-end">
          <p className="text-gray-400  lg:tracking-widest text-xs  uppercase absolute lg:-left-16 text-center">
            our camp
          </p>
        </div>
        <h2 className="lg:text-5xl text-3xl text-center lg:text-left">
          <p className="pb-2">CA 91932,USA</p>
          <p className="pb-2">Imperial Beach</p>
          <p className="pb-2">560 Silver Strand Blvd</p>
        </h2>

        <div className="lg:text-left lg:mt-10 mt-0 absolute lg:-left-16 lg:bottom-1/4 -bottom-10 left-20 ">
          <span className="font-bold  uppercase tracking-widest border-solid text-xs border-b-2 pb-2 border-blue-400 text-blue-400">
            Get in touch
          </span>
        </div>
      </div>
    </div>
  );
};

export default withLines(Contacts);
