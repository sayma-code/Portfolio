import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project1 from "./ProjectComponents.js/Project1";
import Project2 from "./ProjectComponents.js/Project2";
import Project3 from "./ProjectComponents.js/Project3";
import Project4 from "./ProjectComponents.js/Project4";

export default function Project() {
  return (
    <div fluid id="work">
      <div className="project_name">
        <div id="text_shadows">Projects</div>
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
