import React, { useState } from "react";
import "../styles/IssueTracker.css";

// Replace with your Google Sheets API key and Sheet ID
const API_KEY = "YOUR_API_KEY";
const SHEET_ID = "1cRJiG1lKG2ok_DszYhBgP9VCRSfhmQu0gI9Et4gUJMU";
const SHEET_NAME = "Sheet1"; // Replace with your actual sheet name

const IssueTracker = () => {
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data
    const data = [[issue, description]];

    try {
      // Send data to Google Sheets
      await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A1:append?valueInputOption=RAW&key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: data,
          }),
        }
      );

      alert("Issue submitted successfully!");
      setIssue("");
      setDescription("");
    } catch (error) {
      console.error("Error submitting the issue:", error);
      alert("Failed to submit the issue.");
    }
  };

  return (
    <div className="issue-tracker">
      <h2>Issue Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Issue Title"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        />
        <textarea
          placeholder="Issue Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IssueTracker;
