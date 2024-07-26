import React from "react";

const GoogleSpreadsheet = ({ sheetUrl }) => (
  <div className="google-spreadsheet">
    <iframe
      src={sheetUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Google Spreadsheet"
    ></iframe>
  </div>
);

export default GoogleSpreadsheet;
