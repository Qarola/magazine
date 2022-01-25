import React from "react";
import profile from '../../img/profile-icon.png'

const OurTeam = () => {
  return (
    <div className="ourTeam">
      <h3 className="ourTeam__titl">We are your team</h3>
      <br/>
      <p className="ourTeam__sub-titl">
        Our crew consists of competent professionals. The best we could find. We
        are united by our passion for good development and programming.
      </p>
      <div id="threeCol-ourT">
          <h3 className="ourTeam__thinking">
          «Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.»
          </h3>
          <br />
          <img className="ourTeam__img-icon" src={profile} alt="profile img" />
          <p className='ourTeam__name'>
          Sapien Egett
          </p>
          <p className="ourTeam__area">Namrecp</p>
          <h3 className="ourTeam__thinking">
          «Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.»
          </h3>
          <br />
          <img className="ourTeam__img-icon"  src={profile} alt="profile img" />
          <p className='ourTeam__name'>
          Libero Faucibus
          </p>
          <p className="ourTeam__area">Consectetur </p>
          <h3 className="ourTeam__thinking">
          «Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.»
          </h3>
          <br />
          <img className="ourTeam__img-icon"  src={profile} alt="profile img" />
          <p className='ourTeam__name'>
          Nibh Venenatis
          </p>
          <p className="ourTeam__area">Pharetra</p>
      </div>
      <br />
        <div className="title">MAGAZINE WEBSITE</div>
    </div>
  );
};
export default OurTeam;
