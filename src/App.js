import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './MyComponents/Contact';
import Header from './MyComponents/Header';
import Body from './MyComponents/Body';
import Project from './MyComponents/Project';
import Footer from './MyComponents/Footer';


function App() {
  return (
  <>
  <Header/>
  <Body/>
  <Project/>
  <Contact/>
  <Footer/>
  </>
  );
}

export default App;
