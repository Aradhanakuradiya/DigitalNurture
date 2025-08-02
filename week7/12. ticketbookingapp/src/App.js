import React, { useState } from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserGreeting />;
  } else {
    pageContent = <GuestGreeting />;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {pageContent}
    </div>
  );
}

export default App;
