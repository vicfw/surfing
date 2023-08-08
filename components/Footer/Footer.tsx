import React from "react";
import Container from "../UI/Container";
import Image from "next/image";
import Nav from "../UI/Nav";
import withLines from "../HOC/WithLines";
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <Container>
      <div className="flex justify-center flex-col gap-10 items-center">
        <Image src="/images/logo.png" width={20} height={20} alt="logo" />
        <Nav />
        <div className="flex  gap-2 text-gray-400">
          <BiLogoTwitter style={{ fontSize: "20px" }} />
          <BiLogoFacebook style={{ fontSize: "20px" }} />
          <BiLogoInstagram style={{ fontSize: "20px" }} />
        </div>
      </div>
    </Container>
  );
};

export default withLines(Footer);
