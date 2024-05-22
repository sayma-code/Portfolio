import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import footer_connector from "../images/footer_connector.png"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bottom from '../images/portfolio-bottom.png'
import Image from "react-bootstrap/Image";

export default function Contact() {
  return (
    <div id="sayhello">
      <Image
        className="footer_connector"
        src={footer_connector}
        fluid
        alt="footer connector" 
      />
      <div fluid className="footer">
        <Row>
          <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
            <div>
              <img
                id="footer_image"
                src={bottom}
                alt="drink a coffee"
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="footer_text">
              <div className="say_hello_div">
                <h1 className="say_hello">Say Hello</h1>
              </div>

              <div className="contact_email_div">
                <button className="contact-email">
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=saymaobaida2@gmail.com&tf=cm">
                    Contact me
                  </a>
                </button>
              </div>

              <div className="contact_icon">
                <label className="icon">
                  <a href="https://github.com/sayma-code">
                    <AiFillGithub size={50} />
                  </a>
                </label>
                <label className="icon">
                  <a href="https://www.linkedin.com/in/sayma-obaida-288590204/">
                    <AiFillLinkedin size={50} />
                  </a>
                </label>
                <label className="icon">
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=saymaobaida2@gmail.com&tf=cm">
                    <MdEmail size={50} />
                  </a>
                </label>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
