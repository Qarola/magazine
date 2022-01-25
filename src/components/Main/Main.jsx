import React from "react";
//import Header from "../Header/Header";
import Section from "../Section/Section";
import SectionTwo from "../Section/SectionTwo";
import SectionThree from "../../stylesheets/layout/SectionThree";
import PostDaily from "../PostDaily/PostDaily";
import Buttons from "../Buttons/Buttons";
import OurTeam from "../OurTeam/OurTeam";
//import Footer from "../Footer/Footer";

const Main = () => {
  return (
      <div className="container">
    {/*     <Header /> */}
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
      <br />
      <Section />
      <SectionTwo />
      <SectionThree />
      <PostDaily />
      <Buttons />
      <OurTeam />
    {/*   <Footer /> */}
    </div>
  );
};
export default Main;
