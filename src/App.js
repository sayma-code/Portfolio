import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './MyComponents/Contact';
import Header from './MyComponents/Header';
import Body from './MyComponents/Body';
import Project from './MyComponents/Project';
import Footer from './MyComponents/Footer';
import BodyConnector from './MyComponents/Connector/BodyConnector';
import FooterConnector from './MyComponents/Connector/FooterConnector';


function App() {
  return (
  <>
  <Header/>
  <Body/>
  <BodyConnector/>
  <Project/>
  <FooterConnector/>
  <Contact/>
  <Footer/>
  </>
  );
}

export default App;
