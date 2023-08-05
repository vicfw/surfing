import React, { useMemo } from "react";
import withLines from "../HOC/WithLines";
import Image from "next/image";
import surf_1 from "../../public/images/surfboard_1.png";
import surf_2 from "../../public/images/surfboard_2.png";
import surf_3 from "../../public/images/surfboard_3.png";
import style from "./shop.module.css";

const Shop = () => {
  const surfBoardData = useMemo(() => {
    return [
      {
        id: 1,
        image: surf_1,
        category: "funboards",
        name: "Chilli Rare Bird",
        price: 890,
      },
      {
        id: 2,
        image: surf_2,
        category: "surfboards",
        name: "Emery NEM XF",
        price: 950,
      },
      {
        id: 3,
        image: surf_3,
        category: "funboards",
        name: "Agency GROM",
        price: 670,
      },
    ];
  }, []);

  return (
    <section
      className={`w-full  lg:py-20 lg:px-40 py-5 px-5 h-screen ${style.shopWrapper}`}
    >
      <p className="uppercase tracking-widest text-blue-400 text-xs font-bold text-center">
        shop
      </p>
      <p className="text-center font-bold text-5xl text-gray-800 mt-4">
        Surfboards
      </p>
      {/* items container */}
      <div className="grid  grid-cols-[1fr_1fr_1fr] mt-10 place-items-center">
        {/* item */}
        {surfBoardData.map((surfBoard) => (
          <div
            className="relative flex items-center justify-center gap-10 w-full"
            key={surfBoard.id}
          >
            {/* image */}
            <div className="flex self-center">
              <Image
                src={surfBoard.image}
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
                {surfBoard.category}
              </p>
              <p className="text-2xl">{surfBoard.name}</p>
              <div className="mt-7 text-center">
                <p className="text-pink-500 text-xl">$ {surfBoard.price}</p>
                <p className="uppercase tracking-widest text-gray-800 text-xs font-bold">
                  buy
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* show all */}
      <div className="text-center mt-24">
        <span className="font-bold text-xs  uppercase tracking-widest text-gray-900 border-solid border-b-2 pb-2 border-blue-400 ">
          show all
        </span>
      </div>
    </section>
  );
};

export default withLines(Shop);
