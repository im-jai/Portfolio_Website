import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dowx7yw",
      "template_tm9mq8r",
      form.current,
      "wugEG0SCrpYAteDbL"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className=" container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact_option-icon"></HiOutlineMail>
            <h4>Email</h4>
            <h5>Jayaveerapandiyan.d@gmail.com</h5>
            <a
              href="mailto:Markanthony@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Messege
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact_option-icon"></ImWhatsapp>
            <h4>WhatsApp</h4>
            <h5>+91 9976314995</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919898987678"
              target="_blank"
              rel="noreferrer"
            >
              Send a Messege
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact_option-icon"></FaFacebookMessenger>
            <h4>Messenger</h4>
            <h5>ジャイ</h5>
            <a href="https://m.me/fb_id" target="_blank" rel="noreferrer">
              Send a Messege
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
