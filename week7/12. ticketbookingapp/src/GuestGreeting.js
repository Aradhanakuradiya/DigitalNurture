import React from "react";
import Flight from "./Flight";

const GusestGreeting = () => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <Flight />
      <p>Please log in to book tickets.</p>
    </div>
  );
};

export default GusestGreeting;
