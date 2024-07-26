import React from "react";

const GoogleMeet = ({ meetUrl }) => (
  <div className="google-meet">
    <iframe
      src={meetUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Google Meet"
    ></iframe>
  </div>
);

export default GoogleMeet;
