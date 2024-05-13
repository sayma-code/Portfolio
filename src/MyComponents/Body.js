import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/about.png";
import Image from "react-bootstrap/Image";
import header_connector from "../images/header_connector.png";
import about_image_1 from "../images/aboutimage1.png";
import digital_art from "../images/digital_art.png";
import painting from "../images/painting.png";
export default function Body() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
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
              {/* <Row>
                <Col xs={12} md={4} lg={4} xl={4} xxl={4}>
                  <div
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                  >
                    <div className="image-for-row">
                      <Image
                        className="bounce animated size"
                        src={about_image_1}
                        alt="Header Connector"
                      />
                    </div>
                    <div>
                    {isHovered1 && <p>Show this text on hover</p>}
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4} xl={4} xxl={4}>
                  <div
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                  >
                    <div className="image-for-row">
                      <Image
                        className="bounce animated size"
                        src={digital_art}
                        alt="Header Connector"
                      />
                    </div>
                    <div>
                      {isHovered2 && (
                        <p>
                          Beyond the intricacies of code, I have a fundamental
                          understanding of digital design.
                        </p>
                      )}
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4} xl={4} xxl={4}>
                  <div
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                  >
                    <div className="image-for-row">
                    <Image
                      className="bounce animated size"
                      src={painting}
                      alt="Header Connector"
                    />
                    </div>
                    <div>
                    {isHovered3 && (
                      <p>outside the digital world, I find joy in the art.</p>
                    )}
                    </div>
                  </div>
                </Col>
              </Row> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
