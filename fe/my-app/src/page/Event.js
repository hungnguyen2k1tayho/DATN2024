import React from "react";
import { Eventlist } from "../helpers/Eventlist";
import EventItem from "../components/EventItem";
import "../Styles/Event.css";
function Event() {
  return (
    <div className="event">
      <h1 className="eventTitle">Our Event</h1>
      <div className="eventList">
        {Eventlist.map((eventItem, key) => {
          return (
            <EventItem
              key={key}
              image={eventItem.image}
              name={eventItem.name}
              date={eventItem.date}
              location={eventItem.location}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Event;
