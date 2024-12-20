import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project1 from "./ProjectComponents.js/Project1";
import Project2 from "./ProjectComponents.js/Project2";
import Project3 from "./ProjectComponents.js/Project3";
import Project4 from "./ProjectComponents.js/Project4";
import body_connector from '../images/body_connector.png'
import Image from "react-bootstrap/Image";
import ballon from '../images/ballon.png'
import stroke from "../images/brush1.png";
export default function Project() {
  return (
    <div fluid id="work">
      <Image
        className="project_connector"
        src={body_connector}
        fluid
        alt="body connector"
      />
      <div className="ballon_container">
        {/* Balloon Image */}
        <div className="ballon_image_div">
          <Image
            className="ballon_image"
            src={ballon} /* Replace with your balloon image */
            fluid
            alt="body connector"
          />
        </div>

        {/* Projects Header */}
        <div className="project_name">
          <div id="text_shadows">Projects</div>
        </div>

        <div className="body_list_overlay">
          <div className="body_list">
            <div className="wrap">
              <div className="body_list_image">
                <img
                  src={stroke}
                  alt="drink a coffee"
                />
                <div className="body_list_div">
                  <ul className="body_list_ul">
                    <li className="body_list_li"><p className="body_list_text  & adrella_text_small"> C</p></li>
                    <li className="body_list_li"><p className="body_list_text & adrella_text_small">C++</p></li>
                    <li className="body_list_li"><p className="body_list_text & adrella_text_small">Python</p></li>
                    <li className="body_list_li"><p className="body_list_text  & adrella_text_small"> Laravel</p></li>
                    <li className="body_list_li"><p className="body_list_text & adrella_text_small">React</p></li>
                    <li className="body_list_li"><p className="body_list_text & adrella_text_small">MySQL</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div></div>
      </div>
      <Row>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <Project1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <Project2 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <Project3 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <Project4 />
        </Col>
      </Row>
    </div>
  );
}
