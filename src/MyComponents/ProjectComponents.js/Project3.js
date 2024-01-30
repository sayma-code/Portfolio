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
              <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <img
                  className="project_image"
                  src="images/OMS.png"
                  alt="drink a coffee"
                />
              </Col>
              <Col xs={12} sm={12}  md={4} lg={4} xl={4} xxl={4}>
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

export default function Project3() {
  const [modalShow1, setModalShow1] = useState(false);
  return (
    <div className="project_column_div">
      <img
        variant="primary"
        onClick={() => setModalShow1(true)}
        className="project_image"
        src="images/work-1.png"
        alt="drink a coffee"
      /> 
      <MydModalWithGrid1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
      <img
        
      />
      <div className="work-header">ERP</div>
      <div className="work-type">Angular</div>
      </div>
  );
}
