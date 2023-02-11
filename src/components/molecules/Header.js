import React from "react";
import brand from "../../images/logo.png";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <div className="w-full flex gap-4 justify-between items-center md:mb-5">
      <div className="w-full">
        <Logo src={brand} alt="loyalty" />
      </div>
      <div className="w-full flex justify-end">
        <Button children="Request a call" className="btn-style"/>
      </div>
    </div>
  );
};

export default Header;
