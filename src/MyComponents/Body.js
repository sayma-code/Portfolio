import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Body() {
  return (
    <div className="about">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
            <img
              className="body-image"
              id="image-section2"
              src="images/about.png"
              alt="drink a coffee"
            />
          </Col>
          <Col xs={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="body_content">
              <div className="body_header">
                <h1 className="mint">Hello, I am Sayma Obaida</h1>
              </div>
              <div className="body-text">
                it's awesome to meet you! 🌟. My
                adventure into technology began when I successfully completed my
                degree in 2020. I began as a full-stack developer and have
                subsequently shifted my focus to completion-based projects. My
                expertise spans both the front and back ends, allowing me to
                create seamless digital experiences. Beyond the intricacies of
                code, I possess a fundamental understanding of digital design.
                However, my passion doesn't stop there—outside the digital
                world, I find joy in the art of painting. My paintings echo my
                enthusiasm for freedom in creativity and self-expression. That's
                a lot of embarrassing talks. Thanks for dropping by my website!
                I'm excited to share more of my story with you.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
