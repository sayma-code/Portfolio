import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./MyComponents/Contact";
import Body from "./MyComponents/Body";
import Project from "./MyComponents/Project";
import Footer from "./MyComponents/Footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid>
      <Body />
      <Project />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
