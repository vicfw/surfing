import React, { useMemo } from "react";
import withLines from "../HOC/WithLines";
import Image from "next/image";
import surf_1 from "../../public/images/surfboard_1.png";
import surf_2 from "../../public/images/surfboard_2.png";
import surf_3 from "../../public/images/surfboard_3.png";
import style from "./shop.module.css";
import Surf from "./Surf/Surf";
import { SurfType } from "@/types/golbal.types";
import Container from "../UI/Container";

const Shop = () => {
  const surfBoardData: SurfType[] = useMemo(() => {
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
    <Container className={`${style.shopWrapper}`}>
      <p className="uppercase tracking-widest text-blue-400 text-xs font-bold text-center">
        shop
      </p>
      <p className="text-center font-bold lg:text-5xl text-4xl text-gray-800 mt-4">
        Surfboards
      </p>
      {/* items container */}
      <div className="grid  lg:grid-cols-[1fr_1fr_1fr] grid-rows-3 lg:grid-rows-none lg:gap-0 gap-10 mt-10">
        {/* item */}
        {surfBoardData.map((surfBoard) => (
          <Surf {...surfBoard} />
        ))}
      </div>
      {/* show all */}
      <div className="text-center lg:mt-24 mt-16">
        <span className="font-bold text-xs  uppercase tracking-widest text-gray-900 border-solid border-b-2 pb-2 border-blue-400 ">
          show all
        </span>
      </div>
    </Container>
  );
};

export default withLines(Shop);
