import React from "react";
import Flight from "./Flight";

const UserGreeting = () => {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <Flight />
      <button>Book Ticket</button>
    </div>
  );
};

export default UserGreeting;
