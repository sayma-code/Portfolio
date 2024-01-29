import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project1 from "./ProjectComponents.js/Project1";

export default function Project() {
  return (
    <Container fluid>
      <div className="project_name">
        <div id="text_shadows">Projects</div>
      </div>
      <Row>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <div className="project_column_div">
            <Project1 />
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <div className="project_column_div">
            <img
              className="project_image"
              src="images/work-1.png"
              alt="drink a coffee"
            />

            <div className="work-header">ERP</div>
            <div className="work-type">Angular</div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <div className="project_column_div">
            <img
              className="project_image"
              src="images/work-1.png"
              alt="drink a coffee"
            />

            <div className="work-header">ERP</div>
            <div className="work-type">Angular</div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <div className="project_column_div">
            <img
              className="project_image"
              src="images/work-1.png"
              alt="drink a coffee"
            />

            <div className="work-header">ERP</div>
            <div className="work-type">Angular</div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <div className="project_column_div">
            <img
              className="project_image"
              src="images/work-1.png"
              alt="drink a coffee"
            />

            <div className="work-header">ERP</div>
            <div className="work-type">Angular</div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <div className="project_column_div">
            <img
              className="project_image"
              src="images/work-1.png"
              alt="drink a coffee"
            />

            <div className="work-header">ERP</div>
            <div className="work-type">Angular</div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xxl={3} xl={3}>
          <div className="project_column_div">
            <img
              className="project_image"
              src="images/work-1.png"
              alt="drink a coffee"
            />

            <div className="work-header">ERP</div>
            <div className="work-type">Angular</div>
          </div>
        </Col>
      </Row>
      {/* <div className="background-works">
          <Lottie animationData={animationData} />
        </div> */}
    </Container>
  );
}
