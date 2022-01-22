import React from "react";
import { ImProfile } from "react-icons/im";

const Header = () => {
  return (
    <div className="btn">
      <button className="btn__left">
        <ImProfile className="icon" />
        Announce
      </button>
      <button className="btn__right">Subscribe now</button>
    </div>
  );
};
export default Header;
