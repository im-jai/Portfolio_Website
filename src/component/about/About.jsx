import React from "react";
import "./about.css";
import ME from "../../assets/images/me4.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2> About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img id="img-about" src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Clients</h5>
              <small>2+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>3+</small>
            </article>
          </div>
          <p>
            Hi, I'm Jai who having 1.3 years of experience in Frontend
            Development have a basic understanding of the Web Application. And
            also having hands on experience in Mobile App Development.
            Passionate about working as a developer and also keep on creating
            new things.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
