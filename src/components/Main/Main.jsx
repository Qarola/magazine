import React from "react";
import Header from "../Header/Header";
import Section from "../Section/Section";

const Main = () => {
  return (
      <div className="ctn">
        <Header />
      <br />
      <div>
        <div className="title">MAGAZINE WEBSITE</div>
        <p className="title__sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <br />
      <p className="title__sub-end">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod:
      </p>
      <Section />
    </div>
  );
};
export default Main;
