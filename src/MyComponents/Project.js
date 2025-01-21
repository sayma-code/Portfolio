import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project1 from "./ProjectComponents.js/Project1";
import Project2 from "./ProjectComponents.js/Project2";
import Project3 from "./ProjectComponents.js/Project3";
import Project4 from "./ProjectComponents.js/Project4";
import body_connector from '../images/body_connector_1.png'
import Image from "react-bootstrap/Image";
import ballon from '../images/ballon.png'
export default function Project() {
  return (
    <div fluid>
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
      </div>
      <Row className="mx-3 g-4">
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3} className="project-col">
          <Project1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3} className="project-col">
          <Project2 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3} className="project-col">
          <Project3 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3} className="project-col">
          <Project4 />
        </Col>
      </Row>
    </div>
  );
}
