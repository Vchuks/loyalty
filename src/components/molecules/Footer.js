import React from "react";
import Logo from "../atoms/Logo";
import house from "../../images/house2.png";
import call from "../../images/callcalling.png";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="text-white md:flex justify-between gap-4 pt-4">
        <div className="w-full flex gap-4 items-center md:items-start my-3">
          <div>
            <Logo src={house} />
          </div>
          <p className="w-11/12">
            2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
            Nigeria.
          </p>
        </div>

        <p className="w-full ml-10 my-3 flex md:justify-end">Loyalbaze is almost here.</p>

        <div className="w-full flex gap-2 my-3 md:justify-end">
          <div>
            <Logo src={call} />
          </div>
          <p>+234 903 618 9485</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
