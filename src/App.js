import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./MyComponents/Contact";
import Body from "./MyComponents/Body";
import Project from "./MyComponents/Project";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <>
      <Body />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
