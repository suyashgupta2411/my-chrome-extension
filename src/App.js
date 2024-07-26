import React from "react";
import "./styles/App.css";
import GoogleSlide from "./components/GoogleSlide";
import PomodoroTimer from "./components/PomodoroTimer";
import Poll from "./components/Poll";
import BookQuote from "./components/BookQuote";
import IssueTracker from "./components/IssueTracker";
import DGChecklist from "./components/DGChecklist";
import Announcements from "./components/Announcements";
import GoogleSpreadsheet from "./components/GoogleSpreadsheet";
import GoogleForm from "./components/GoogleForm";
import GoogleMeet from "./components/GoogleMeet";
import GoogleKeep from "./components/GoogleKeep";

const App = () => (
  <div className="app-container josefin-sans">
    <div className="left-pane">
      <div className="logo-container">
        <img src="/logo.png" alt="Hyperverge Logo" className="logo" />
      </div>
      <div className="company-name">Hyperverge</div>
      <div className="search-bar">
        <form
          action="https://www.google.com/search"
          method="GET"
          className="search-form"
        >
          <input type="text" name="q" placeholder="Search Google..." />
          <button type="submit" className="search-button">
            <img
              src="/google-logo.png"
              alt="Google Logo"
              className="google-logo"
            />
          </button>
        </form>
      </div>
      <PomodoroTimer />
      <div className="music-player">
        <iframe
          src="https://open.spotify.com/embed/playlist/5mej72M9qKQ6MeZIRgilhO"
          width="100%"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </div>
    <div className="right-pane">
      <Announcements />
      <GoogleSlide slideUrl="https://docs.google.com/presentation/d/18NJ6F8svf0_HlmcQRhJFhbCT0Z7ojsDB19S7hOysV-8/edit?usp=sharing" />
      <div className="calendar-widget">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE&mode=DAY"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="yes"
          title="Google Calendar Day View"
        ></iframe>
      </div>
      <Poll />
      <BookQuote />
      <IssueTracker />
      <DGChecklist />
      <GoogleSpreadsheet sheetUrl="https://docs.google.com/spreadsheets/d/1s4X2Nm9urI8v4406UypjNW5Ch7qPwG_9sG3rtDDeTvE/edit?usp=sharing" />
      <GoogleForm formUrl="https://docs.google.com/forms/d/1sT20YM63PXLjU5T6irg0b1U3V96czIjJPchwq4_MjaQ/prefill" />
      <GoogleMeet meetUrl="https://meet.google.com/iev-cfay-cyk" />
      <GoogleKeep keepUrl="https://keep.google.com/" />
    </div>
  </div>
);

export default App;
