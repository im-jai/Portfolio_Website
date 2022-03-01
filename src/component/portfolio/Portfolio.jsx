import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/images/port1.jpg";
import IMG2 from "../../assets/images/port2.jpg";
import IMG3 from "../../assets/images/port3.jpg";
import IMG4 from "../../assets/images/port4.jpg";
import IMG5 from "../../assets/images/port5.jpg";
import IMG6 from "../../assets/images/port6.jpg";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualisation",
    github: "https://github.com",
    Linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Crypto Currency Dashboard & Financial Visualisation",
    github: "https://github.com",
    Linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Crypto Currency Dashboard & Financial Visualisation",
    github: "https://github.com",
    Linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Crypto Currency Dashboard & Financial Visualisation",
    github: "https://github.com",
    Linkedin: "https://linkedin.com",
  },

  {
    id: 5,
    Image: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualisation",
    github: "https://github.com",
    Linkedin: "https://linkedin.com",
  },
  {
    id: 6,
    Image: IMG6,
    title: "Crypto Currency Dashboard & Financial Visualisation",
    github: "https://github.com",
    Linkedin: "https://linkedin.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, Image, title, github, Linkedin }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Image} alt={title} />
              </div>
              <h3>this is portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={Linkedin} className="btn btn-primary ">
                  LinkedIn
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
