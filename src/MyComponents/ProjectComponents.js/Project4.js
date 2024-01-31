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
                src="images/discord_bot.png"
                alt="Project 4"
              />
            </Col>
            <Col xs={12} sm={12}  md={4} lg={4} xl={4} xxl={4}>
              <div className="body_header">Frndie</div>
              <div className="adrella_text">
              A Discord bot built with Python that tries to encourage and inspire you. Open to suggestions for additional features <span>&#129402;</span>. Have fun<span>&#9996;</span>
              </div>
              <a className="button_link" href="https://discord.com/api/oauth2/authorize?client_id=1164536790351360180&permissions=0&scope=bot">
                <Button className="project_button">Visit Site</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default function Project4() {
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
      <img />
      <div className="peackok_heading">Discord Bot</div>
    </div>
  );
}
