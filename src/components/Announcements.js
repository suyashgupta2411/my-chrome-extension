import React from "react";
import "../styles/Announcements.css"; // Import the CSS file

const Announcements = () => {
  const announcementText =
    "🚀 New Feature Alert! Check out our updated Pomodoro Timer with new themes! 🌟"; // Random announcement text

  return (
    <div className="announcements">
      <div className="scrolling-text">{announcementText}</div>
    </div>
  );
};

export default Announcements;
