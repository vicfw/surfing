import React, { FC } from "react";

interface ContainerIProps {
  children?: any;
  className?: string | undefined;
}

const Container: FC<ContainerIProps> = ({ children, className }) => {
  return (
    <section className={`w-full  lg:py-20 lg:px-40 py-5 px-5 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
