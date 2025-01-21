import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/about.png";
import Image from "react-bootstrap/Image";
import starblue from "../images/starblue.png";

import stardarkpink from "../images/stardarkpink.png";
export default function Body() {
  return (
    <div className="about">

      {/* <div className="head">
      <Image
        className="head_image"
        src={arch}
        fluid
        alt="Arched head"
      /></div> */}
      <div className="body-all">
        <Row>
          <Col xs={12} md={12} lg={6} xl={6} xxl={6}>
            <img
              className="body-image"
              src={logo}
              alt="drink a coffee"
            />
          </Col>
          <Col xs={12} md={12} lg={6} xl={6} xxl={6}>

            <div className="body_content">

              <Image
                className="star"
                src={starblue}
                fluid
                alt="Header Connector"
              />
              <Image
                className="stardarkpink"
                src={stardarkpink}
                fluid
                alt="Header Connector"
              />
              <div className="body_header">
                <h1 className="mint">Hello, I am Sayma Obaida</h1>
              </div>
              <div className="body_list">
                <ul className="body_list_ul">
                  <li className="body_list_li"><p className="body_list_text  & adrella_text_small"> Full-stack</p></li>
                  <li className="body_list_li"><p className="body_list_text & adrella_text_small">Freelancer</p></li>
                </ul>
              </div>


              <div className="body_text">
                <p className="adrella_text">
                  It's awesome to meet you! I’m a full stack software engineer specializing in building
                  exceptional digital products. Currently, I’m focused on
                  building accessible, human-centered products as a freelancer.
                  <span>Thanks for dropping by</span> my website! I'm excited to
                  share more of my story with you.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
