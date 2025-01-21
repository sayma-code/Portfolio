import React from "react";

export default function ResizableImage({ src, alt, width, height, className, onClick }) {
  const style = {
    width: width || "auto",
    height: height || "auto",
    objectFit: "cover", // Adjust this as per your needs (e.g., "contain" or "cover")
  };

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={className}
      onClick={onClick}
    />
  );
}