import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

export default function Header() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <div className='secone'>
    <nav>
    <div className='right'>
      <div  onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} size="3x"/>
      </div>
    </div>
    {isShown && (
        <div className= 'first'>
          <h1><a href="#work">Work</a></h1>
          <h1><a href="#sayhello">Say Hello</a></h1>
        </div>
      )}
    </nav>
    <section className="home">
    <img className="head" src="images/head.png" alt="header"/>
    </section>
    {/* About Section */}
    </div>
  )
}
