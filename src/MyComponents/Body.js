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
                  <li className="body_list_li"><p className="body_list_text & adrella_text_small">UI/Ux Designer</p></li>
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
            <div className="language">
              <Row >
                <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                  <div>
                    <p className="language_text">Basic</p>
                    <p className="language_name"> C</p>
                    <p className="language_name"> C++</p>
                    <p className="language_name"> Java</p>
                    <p className="language_name"> Python</p>
                    <p className="language_name"> Javascript</p>
                    <p className="language_name"> Html</p>
                    <p className="language_name"> CSS</p>
                    
                  </div>
                </Col>
                <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                  <div>
                    <p className="language_text">Framework</p>
                    <p className="language_name"> Laravel</p>
                    <p className="language_name"> React</p>
                    <p className="language_name"> Angular</p>
                    <p className="language_name"> SpringBoot</p>
                  </div>
                </Col>
                <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                  <div>
                    <p className="language_text">Others</p>
                    <p className="language_name"> Git</p>
                    <p className="language_name"> MySql</p>
                    <p className="language_name"> Figma</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
