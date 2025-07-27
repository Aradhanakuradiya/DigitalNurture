import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainerList from './TrainerList';
import TrainerDetails from './TrainerDetails';
import trainersMock from './trainersMock';

function App() {
  return (
    <BrowserRouter>
      <h1>My Academy Trainers App</h1>
      <nav style={{ background: '#ddd', padding: '10px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/trainers">Show Trainers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainerList trainersMock={trainersMock} />} />
        <Route path="/trainer/:id" element={<TrainerDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
