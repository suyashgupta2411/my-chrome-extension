import React from "react";
import "../styles/GoogleSlide.css";

const GoogleSlide = ({ slideUrl }) => (
  <div className="iframe-container">
    <iframe src={slideUrl} title="Google Slide" />
  </div>
);

export default GoogleSlide;
