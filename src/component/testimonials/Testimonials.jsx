import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/images/avatar1.jpg";
import AVT2 from "../../assets/images/avatar2.jpg";
import AVT3 from "../../assets/images/avatar3.jpg";
import AVT4 from "../../assets/images/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avator: AVT1,
    clientName: "Alexa",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam culpa dicta ad aperiam libero molestias nisi! Eos ipsaquibusdam fuga aperiam tempora voluptatum error, repellat commodiillo officia tempore.",
  },
  {
    avator: AVT2,
    clientName: "Aditi",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam culpa dicta ad aperiam libero molestias nisi! Eos ipsaquibusdam fuga aperiam tempora voluptatum error, repellat commodiillo officia tempore.",
  },
  {
    avator: AVT3,
    clientName: "Wan Bissaka",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam culpa dicta ad aperiam libero molestias nisi! Eos ipsaquibusdam fuga aperiam tempora voluptatum error, repellat commodiillo officia tempore.",
  },
  {
    avator: AVT4,
    clientName: "James",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam culpa dicta ad aperiam libero molestias nisi! Eos ipsaquibusdam fuga aperiam tempora voluptatum error, repellat commodiillo officia tempore.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        Navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avator, clientName, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avator} alt="Avatar one" />
              </div>
              <h5 className="client__name">{clientName}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
