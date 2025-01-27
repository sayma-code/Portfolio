import React from "react";
import work1 from '../../images/discord_bot.png';
import ResizableImage from "./ResizableImage";


export default function Project4() {
  return (
    <div className="project_column_div">
      <a
        href="https://github.com/sayma-code/Frndie" // Replace with your desired link
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
       Discord Bot
      </div>
    </div>
  );
}
