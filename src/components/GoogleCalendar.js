import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const GoogleCalendar = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: "AIzaSyAqtJl2XYPtG7ij9V4fJJZc-mnumzJgbf8", // Replace with your API key
          clientId:
            "316518471427-qd3m0u7sphq95re9rfgafttecbq8726e.apps.googleusercontent.com.apps.googleusercontent.com", // Replace with your client ID
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/calendar.readonly",
        })
        .then(() => {
          gapi.auth2
            .getAuthInstance()
            .signIn()
            .then(() => {
              listUpcomingEvents();
            });
        });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const listUpcomingEvents = () => {
    gapi.client.calendar.events
      .list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      })
      .then((response) => {
        const events = response.result.items;
        if (events.length > 0) {
          const calendarDiv = document.getElementById("calendar");
          for (let i = 0; i < events.length; i++) {
            const event = events[i];
            const when = event.start.dateTime
              ? event.start.dateTime
              : event.start.date;
            const listItem = document.createElement("li");
            listItem.appendChild(
              document.createTextNode(`${event.summary} (${when})`)
            );
            calendarDiv.appendChild(listItem);
          }
        } else {
          document.getElementById("calendar").innerHTML =
            "No upcoming events found.";
        }
      });
  };

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul id="calendar"></ul>
    </div>
  );
};

export default GoogleCalendar;
