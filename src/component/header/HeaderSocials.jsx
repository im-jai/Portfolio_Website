import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" rel="noreferrer">
        {" "}
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com" rel="noreferrer">
        <FaGithub></FaGithub>
      </a>
      <a href="https://facebook.com" rel="noreferrer">
        <BsFacebook></BsFacebook>
      </a>
    </div>
  );
};

export default HeaderSocials;
