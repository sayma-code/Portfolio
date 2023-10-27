import './App.css';
import Header from './MyComponents/Header';
import Body from './MyComponents/Body';
import Project from './MyComponents/Project';
import Contact from './MyComponents/Contact';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <>
  <Header/>
  <Body/>
  <Project/>
  <Contact/>
  </>
  );
}

export default App;
