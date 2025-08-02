const OddPlayers = ({ players }) => {
  return (
    <ul>
      {players.filter((_, idx) => idx % 2 === 1).map((player, idx) => (
        <li key={idx}>{player.name} - {player.score}</li>
      ))}
    </ul>
  );
};

export default OddPlayers;