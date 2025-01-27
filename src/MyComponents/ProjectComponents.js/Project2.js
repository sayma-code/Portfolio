import React from "react";
import work1 from '../../images/Consultancy.png';
import ResizableImage from "./ResizableImage";


export default function Project2() {
  return (
    <div className="project_column_div">
      <a
        href="https://consult.vegabondit.com/" // Replace with your desired link
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.stopPropagation(); // Prevents the link click from triggering the modal
        }}
      >
      <ResizableImage
        src={work1}
        alt="A computer and mobile"
      /></a>
      <div className="say_hello & project_name">
      Customer Relation Management
      </div>
    </div>
  );
}
