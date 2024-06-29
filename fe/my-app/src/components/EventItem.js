import React from "react";

function EventItem({ image, name, date, location }) {
  return (
    <div className="eventItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1>{name}</h1>
      <h3>{date}</h3>
      <p>{location}</p>
    </div>
  );
}

export default EventItem;
