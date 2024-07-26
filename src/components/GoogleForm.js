import React from "react";

const GoogleForm = ({ formUrl }) => (
  <div className="google-form">
    <iframe
      src={formUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Google Form"
    ></iframe>
  </div>
);

export default GoogleForm;
