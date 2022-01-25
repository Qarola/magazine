import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="ctn">
      <button className="ctn__btn1" type="text">
        <Link className="ctn__link-btn" to="/membership">
          <p className="ctn__title">Annual Membership</p>
        </Link>
      </button>
      <button className="ctn__btn2" type="text">
        <Link className="ctn__link-btn" to="/subscription">
          <p className="ctn__title-btn2">Monthly Subscription for 2022</p>{" "}
        </Link>
      </button>
    </div>
  );
};
export default Buttons;
