import React from "react";
import imgOne from "../../img/salads.jpg";

const Section = () => {
  return (
    <div className="section">
      <img className="section__img-one" src={imgOne} alt={"healthy food"} />
      <h3 className="section__one">
        «Lorem ipsum dolor sit amet»
      </h3>
      <p className="section__title">sit amet, consectetur adipiscing.</p>
      <p className="section__sub-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua-2022.
      </p>
    </div>
  );
};
export default Section;
