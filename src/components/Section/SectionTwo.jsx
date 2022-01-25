import React from "react";
import imgTwo from "../../img/lady-shopping-cartoon.png";

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <img className="sectionTwo__img-two" src={imgTwo} alt={"girl-shopping"} />
      <h2 className="sectionTwo__sect-title">
        Lorem ipsum dolor sit amet?
      </h2>
      <p className="sectionTwo__sect-sub">
        Lorem ipsum aliquet eget sit amet tellus cras adipiscing enim eu. Quis
        hendrerit dolor magna eget est lorem ipsum dolor sit. Id faucibus nisl
        tincidunt eget nullam non nisi est sit. Etiam dignissim diam quis enim
        lobortis scelerisque fermentum dui.
        <p className='sectionTwo__sect-sub-s'>
        Quis imperdiet massa tincidunt nunc.
        Integer enim neque volutpat ac tincidunt.
        </p> 
      </p>
    </div>
  );
};
export default SectionTwo;
