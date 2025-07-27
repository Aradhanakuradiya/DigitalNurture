import React from 'react';
import { Link } from 'react-router-dom';

function TrainerList({ trainersMock }) {
  return (
    <div>
      <h2>Trainers List</h2>
      <ul>
        {trainersMock.map(trainer => (
          <li key={trainer.trainerId}>
            <Link to={`/trainer/${trainer.trainerId}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerList;
