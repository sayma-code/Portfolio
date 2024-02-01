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
        {/* <nav>
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
        </nav> */}
        <section className="home-image">
          <img
            src="images/head.png"
            className="home-image"
            alt="header"
            id="image-section"
          />
        </section>
        {/* About Section */}
      </div>
      <img
        className="head_image"
        src="images/header_connector.png"
        alt="drink a coffee"
      />
    </div>
  );
}
