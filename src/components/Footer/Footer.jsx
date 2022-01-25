import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div id="social-icons">
        <RiInstagramFill className="footer__social-icon" />
        <BsFacebook className="footer__social-icon" />
        <BsTwitter className="footer__social-icon" />
      </div>
      <br />
      <hr className="line"></hr>
      <div className="footer__infoLinks">
        <div className="footer__sixCol">
          <h4 className="footer__top-col1">Magazine web site</h4>
          <br />
          <p className="footer__title-col">Consectetur adipiscing</p>
          <br />
          <p className="footer__title-col">magazine@email.com</p>
          <br />
          <p className="footer__title-col">Feugiat ad 2022</p>
          <br />
          <h4 className="footer__top-col">Become a member</h4>
          <br />
          <p className="footer__title-col">Consectetur nen ad ad</p>
          <br />
          <p className="footer__title-col">Etiam sit nan ad ti of</p>
          <br />
          <p className="footer__title-col">Non arcu let</p>
          <br />
          <h4 className="footer__top-col">Community</h4>
          <br />
          <p className="footer__title-col">Feugiat in let ad</p>
          <br />
          <p className="footer__title-col">Non arcu let</p>
          <br />
          <p className="footer__title-col">Consectetur adipiscing</p>
          <br />
          <h4 className="footer__top-col">Legal</h4>
          <br />
          <p className="footer__title-col">Etiam sit ad nen mass</p>
          <br />
          <p className="footer__title-col">Feugiat att le nen</p>
          <br />
          <p className="footer__title-col">Non arcu le ligi ad</p>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Footer;
