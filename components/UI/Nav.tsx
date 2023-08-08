import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex lg:gap-14 gap-3 uppercase text-sm">
        <span className="lg:tracking-widest tracking-wider font-extrabold text-gray-700 text-xs">
          Stories
        </span>
        <span className="lg:tracking-widest tracking-wider font-extrabold text-gray-700 text-xs">
          Events
        </span>
        <span className="lg:tracking-widest tracking-wider font-extrabold text-gray-700 text-xs">
          Places
        </span>
        <span className="lg:tracking-widest tracking-wider font-extrabold text-gray-700 text-xs">
          Boards
        </span>
      </nav>
    </>
  );
};

export default Nav;
