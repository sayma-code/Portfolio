import React from "react";

export default function ResizableImage({ src, alt, className, onClick }) {
  const style = {
    width: "400px",
    height: "200px",
    objectFit: "cover", // Adjust this as per your needs (e.g., "contain" or "cover")
  };

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className="project_image"
      onClick={onClick}
    />
  );
}