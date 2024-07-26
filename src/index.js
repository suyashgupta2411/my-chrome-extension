// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
