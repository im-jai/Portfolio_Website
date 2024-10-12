import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                {" "}
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                {" "}
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                {" "}
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>ReactJS</h4>
                <small>1+ Years Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Skills & Certifications</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                {" "}
                <h4>Client Communication</h4>
            <small>(Japanese & English)</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                {" "}
                <h4>Project Management</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                {" "}
                <h4>Team Leadership</h4>
                
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>AWS</h4>
              </div>
            </article>
                <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>JLPT N3</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
