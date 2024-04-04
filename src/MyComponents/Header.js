import React from "react";
import coverImage from "../images/head.png";
import header_connector from "../images/header_connector.png";
import Image from "react-bootstrap/Image";

export default function Header() {
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
        <section >
          <Image src={coverImage} fluid alt="header" className="home-image"/>
        </section>
        {/* About Section  */}
      </div>
    </div>
  );
}
