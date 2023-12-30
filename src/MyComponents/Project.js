import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation_lnpcgfpj.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MydModalWithGrid(props) {
  return (
    <Modal {...props} dialogClassName="modal-dialog" contentClassName="modal-content">
      <Modal.Header closeButton>
        </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8} sm={12}>
              <img
                className="image"
                src="images/OMS.png"
                alt="drink a coffee"
              />
            </Col>
            <Col xs={6} md={4} sm={12}>
              <h1>OMS(Office Management System)</h1>
              <p></p>
              <Button onClick={props.onHide}>View</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default function Project() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container fluid className="works" id="work">
      <Row className="works-content justify-content-md-center">
        <Col xs={12} xxl={3} xl={3} lg={4} md={6} sm={12} className="items">
          <img
            variant="primary"
            onClick={() => setModalShow(true)}
            className="workimage"
            src="images/work-1.png"
            alt="drink a coffee"
          />

          <MydModalWithGrid
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <div className="work-header">ERP Project</div>
          <div className="work-type">Angular</div>
        </Col>
        <Col xs={12} xxl={3} xl={3} lg={4} md={6} sm={12} className="items">
          <div className="items">
            <a href="http://vegabondit.com/">
              <img
                className="workimage"
                src="images/work-2.png"
                alt="drink a coffee"
              />
            </a>
            <div className="work-header">Question</div>
            <div className="work-type">Laravel, Angular</div>
          </div>
        </Col>
        <Col xs={12} xxl={3} xl={3} lg={4} md={6} sm={12} className="items">
          <div className="items">
            <a href="http://vegabondit.com/">
              <img
                className="workimage"
                src="images/work-2.png"
                alt="drink a coffee"
              />
            </a>
            <div className="work-header">CRM</div>
            <div className="work-type">Type</div>
          </div>
        </Col>
        <Col xs={12} xxl={3} xl={3} lg={4} md={6} sm={12} className="items">
          <div className="items">
            <a href="https://discord.com/api/oauth2/authorize?client_id=1164536790351360180&permissions=2183991392320&scope=bot">
              <img
                className="workimage"
                src="images/work-1.png"
                alt="drink a coffee"
              />
            </a>
            <div className="work-header">Discord Bot</div>
            <div className="work-type">Python</div>
          </div>
        </Col>
      </Row>
      {/* <div className="background-works">
          <Lottie animationData={animationData} />
        </div> */}
    </Container>
  );
}
