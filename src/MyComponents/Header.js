import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
    <div className="header">
      <nav>
        <div className="right">
          <div onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size="3x" />
          </div>
        </div>
        {isShown && (
          <div className="first">
            <h1>
              <a href="#work">Work</a>
            </h1>
            <h1>
              <a href="#sayhello">Say Hello</a>
            </h1>
          </div>
        )}
      </nav>
      <section className="home">
        <div className="header-image">
          <img src="images/head.png" alt="header" id="image-section" />
        </div>
      </section>
      {/* About Section */}
      
    </div>
    <div className="down-background">
    <img className="down" src="images/header-img.png" alt="drink a coffee" />
    </div>
    
    </div>
  );
}
