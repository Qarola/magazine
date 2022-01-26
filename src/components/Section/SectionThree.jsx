import React from "react";
import imgThree from "../../img/kids.jpg";

const SectionThree = () => {
  return (
    <div className="sectionThree">
      <img className="sectionThree__img-three" src={imgThree} alt={"girl-shopping"} />
      <h2 className="sectionThree__sect-title">
        Lorem ipsum etiam dignissim diam quis enim.
      </h2>
      <p className="sectionThree__sect-sub">
        Lorem ipsum aliquet eget sit amet tellus cras adipiscing enim eu. Quis
        hendrerit dolor magna eget est lorem ipsum dolor sit. Etiam dignissim diam quis enim
        lobortis scelerisque fermentum dui. Quis imperdiet massa tincidunt nunc.
        Integer enim neque volutpat ac tincidunt. 
      </p>
    </div>
  );
};
export default SectionThree;