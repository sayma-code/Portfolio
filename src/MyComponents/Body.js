import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/about.png";
import Image from "react-bootstrap/Image";
import header_connector from "../images/header_connector.png";

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
          <Col xs={12} md={12} lg={6} xl={6} xxl={6}>
            <img
              className="body-image"
              id="image-section2"
              src={logo}
              alt="drink a coffee"
            />
          </Col>
          <Col xs={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="body_content">
              <div className="body_header">
                <h1 className="mint">Hello, I am Sayma Obaida</h1>
              </div>

              <div className="body_text">
                <p className="adrella_text">
                  It's awesome to meet you!{" "}
                  <span role="img" aria-label="star">
                    &#127775;
                  </span>
                  . I’m a full stack software engineer specializing in building
                  exceptional digital products. Currently, I’m focused on
                  building accessible, human-centered products as a freelancer.
                  <span>Thanks for dropping by</span> my website! I'm excited to
                  share more of my story with you.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
