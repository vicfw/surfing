import { SurfType } from "@/types/golbal.types";
import Image from "next/image";
import React, { FC } from "react";

interface SurfIProps extends SurfType {}

const Surf: FC<SurfIProps> = ({ id, category, image, name, price }) => {
  return (
    <div
      className="relative flex items-center justify-center gap-10 w-full"
      key={id}
    >
      {/* image */}
      <div className="flex self-center">
        <Image
          src={image}
          alt="surf"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div
          style={{
            zIndex: -1,
            width: "57%",
            height: "87%",
            backgroundColor: "#ececec",
          }}
          className="absolute left-0 -bottom-10"
        ></div>
      </div>
      {/* info */}
      <div className="flex flex-col mt-20">
        <p className="uppercase tracking-widest text-gray-400 text-xs">
          {category}
        </p>
        <p className="text-2xl">{name}</p>
        <div className="mt-7 text-center">
          <p className="text-pink-500 text-xl">$ {price}</p>
          <p className="uppercase tracking-widest text-gray-800 text-xs font-bold">
            buy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Surf;
