import React from "react";

const GoogleKeep = ({ keepUrl }) => (
  <div className="google-keep">
    <iframe
      src={keepUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Google Keep"
    ></iframe>
  </div>
);

export default GoogleKeep;
