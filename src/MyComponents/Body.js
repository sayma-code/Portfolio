import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from '../images/about.png';
import header_connector from "../images/header_connector.png";
import Image from "react-bootstrap/Image";

export default function Body() {
  return (
    <div className="about">
      <Image
      className="head_image"
        src={header_connector}
        fluid
        alt="Header Connector"
        
      />
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
            <img
              className="body-image"
              id="image-section2"
              src={logo}
              alt="drink a coffee"
            />
          </Col>
          <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="body_content">
              <div className="body_header">
                <h1 className="mint">Hello, I am Sayma Obaida</h1>
              </div>
              <div className="body_text">
                <p className="adrella_text">
                  It's awesome to meet you! <span role="img" aria-label="star">&#127775;</span>. My adventure into technology
                  began when I successfully completed my degree in<span> 2020</span>. I began
                  as a <span>full-stack developer</span> full-stack developer and have subsequently shifted my
                  focus to <span>completion-based projects</span><span role="img" aria-label="computer_image">&#128187;</span>. My expertise spans both
                  the front and back ends, allowing me to create seamless
                  digital experiences. Beyond the intricacies of code, I have a fundamental understanding of <span>digital design. </span>. However, my
                  passion doesn't stop there—outside the digital world, I find
                  joy in the art of painting<span role="img" aria-label="paintings">&#127750;</span>. My paintings echo my enthusiasm
                  for freedom in creativity and self-expression. That's a lot of
                  embarrassing talks.  <span>Thanks for dropping by</span> my website! I'm
                  excited to share more of my story with you.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
