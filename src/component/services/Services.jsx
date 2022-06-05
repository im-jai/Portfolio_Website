import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      {/* <h5>What I Offer</h5> */}
      <h5>My recent works</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Educational Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Dating Application </p>{" "}
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Personal Portfolio Web Application</p>{" "}
            </li>
            {/* <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Personal Portfolio Web application using React Js </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Japanese language learning Web application</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>E-commerce Web application</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Japanese Language Learning Application using Flutter</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Dating Application using Flutter</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
