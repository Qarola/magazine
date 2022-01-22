import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import imgOne from "../../img/salads.jpg";

const Section = () => {
  return (
    <div className="section">
      <img className="img-one" src={imgOne} alt={"healthy food"} />
      <h3 className="section__one">
        <VscChevronLeft className="icon-vsc" />
        <VscChevronLeft className="icon-vsc" />
        Lorem ipsum dolor sit amet
        <VscChevronRight className="icon-vsc" />
        <VscChevronRight className="icon-vsc" />
      </h3>
      <h1 className="section__title">sit amet, consectetur adipiscing.</h1>
      <h4 className="section__sub-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua-2022.
      </h4>
    </div>
  );
};
export default Section;
