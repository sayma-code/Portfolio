import React from "react";
import Container from "react-bootstrap/Container";

function GetYear() {
  return new Date().getFullYear();
}
export default function Footer() {
  return (
    <div>
      <Container fluid className="foot">
        <div className="foot_align">
          <span>© <GetYear /> Sayma Obaida</span>
        </div>
      </Container>
    </div>
  );
}
