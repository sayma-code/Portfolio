import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import work1 from '../../images/work-1.png';

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
                className="project_image3"
                src="images/spt.png"
                alt=" "
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <div className="project_sample_body">
              <div className="body_header">Car Renting Website</div>
              <div className="adrella_text">
                Contributed to the development of a car rental website utilizing
                Laravel.
              </div>
              <a className="button_link" href="https://spt.ebuzz-it.com/">
                <Button className="">Visit Site</Button>
              </a>
              </div>
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
        src={work1}
        alt=" "
      />
      <MydModalWithGrid1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
      <img />
      <div className="peackok_heading">Car Rental</div>
    </div>
  );
}
