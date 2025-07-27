import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './trainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainersMock.find(t => t.trainerId === id);

  if (!trainer) {
    return <h3>Trainer not found</h3>;
  }

  return (
    <div>
      <h2>Trainer Details</h2>
      <h3>{trainer.name} - {trainer.technology}</h3>
      <p>Email: {trainer.email}</p>
      <p>Phone: {trainer.phone}</p>
      <h4>Skills:</h4>
      <ul>
        {trainer.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetails;
