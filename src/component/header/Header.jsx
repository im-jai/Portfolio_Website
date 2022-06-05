import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/images/me3.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="contianer header__container">
        <h5>Hello I'm</h5>
        <h1>Jayaveerapandiyan D</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <div className="me">
          <img id="me-head" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
