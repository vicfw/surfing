import { SurfType } from "@/types/golbal.types";
import Image from "next/image";
import React, { FC } from "react";
import style from "./surf.module.css";

interface SurfIProps extends SurfType {}

const Surf: FC<SurfIProps> = ({ id, category, image, name, price }) => {
  return (
    <div
      className="relative flex lg:items-center items-end justify-center gap-10 w-full"
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
          className={`absolute left-0 lg:-bottom-1 -bottom-1 ${style.imageBg}`}
        ></div>
      </div>
      {/* info */}
      <div className="flex flex-col lg:mt-20">
        <p className="uppercase tracking-widest text-gray-400 text-xs">
          {category}
        </p>
        <p className="lg:text-2xl text-xl">{name}</p>
        <div className="mt-7 text-center">
          <p className="text-pink-500 lg:text-xl text-lg">$ {price}</p>
          <p className="uppercase tracking-widest text-gray-800 text-xs font-bold">
            buy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Surf;
