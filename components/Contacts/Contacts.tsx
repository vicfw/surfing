import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className="flex py-20 pr-20 gap-32">
      {/* photo */}
      <div style={{ flex: 2 }} className="relative w-full h-96">
        <Image src="/images/article_1.png" alt="" fill />
      </div>
      {/* content */}
      <div
        style={{ flex: 3 }}
        className="relative flex flex-col gap-12 items-start"
      >
        <div className="self-start justify-self-end">
          <p className="text-gray-400  lg:tracking-widest text-xs  uppercase absolute -left-16">
            our camp
          </p>
        </div>
        <h2 className="text-5xl">
          <p className="pb-2">CA 91932,USA</p>
          <p className="pb-2">Imperial Beach</p>
          <p className="pb-2">560 Silver Strand Blvd</p>
        </h2>

        <div className="text-left mt-10 absolute -left-16 bottom-1/4">
          <span className="font-bold  uppercase tracking-widest border-solid text-xs border-b-2 pb-2 border-blue-400 text-blue-400">
            Get in touch
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
