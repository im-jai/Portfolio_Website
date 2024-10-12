import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer__logo">
        Thank You
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        {/* <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook></BsFacebook>
        </a>
        <a href="https://instagram.com">
          <BsInstagram></BsInstagram>
        </a>
        <a href="https://twitter.com">
          <BsTwitter></BsTwitter>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Personal Portfolio Website. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
