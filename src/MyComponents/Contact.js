import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import background from "../assets/contact-background.png";
import Container from "react-bootstrap/Container";

export default function Contact() {
  return (
    <div className="say-hello" id="sayhello">
      <img
        className="say-hello-image"
        src="images/contact-img.png"
        alt="drink a coffee"
      />
      <div className="contact">

        <div className="contact-content">
          <div className="frn">
            <p className="frnl">Let's be friends</p>
            <button className="contact-email">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=saymaobaida2@gmail.com&tf=cm">
                Contact me
              </a>
            </button>
          </div>

          <div className="contact-icon">
            <label className="red">
              <AiFillGithub />
            </label>
            <label className="git">
              <AiFillLinkedin />
            </label>
            <label className="link">
              <MdEmail />
            </label>
          </div>

        </div>

        <div className="mail-address">
          <span className="in">Sayma Obaida</span>-saymaobaida2@gmail.com
        </div>
      </div>
    </div>
  );
}
