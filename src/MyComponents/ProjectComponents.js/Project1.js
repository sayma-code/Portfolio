import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MydModalWithGrid1(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-dialog"
      contentClassName="modal-content"
    >
      <Modal.Header closeButton></Modal.Header>
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
              <a href="https://oms.ennovify.com/">
                <Button>Visit Site</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default function Project() {
  const [modalShow1, setModalShow1] = useState(false);
  return (
    <>
      <img
        variant="primary"
        onClick={() => setModalShow1(true)}
        className="workimage"
        src="images/work-1.png"
        alt="drink a coffee"
      />

      <MydModalWithGrid1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
      <div className="work-header">ERP</div>
      <div className="work-type">Angular</div>
    </>
  );
}
