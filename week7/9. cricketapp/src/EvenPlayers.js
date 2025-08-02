const EvenPlayers=({players})=>{
return (
    <ul>
      {players.filter((player, idx) => idx % 2 === 0).map((player, idx) => (
        <li key={idx}>{player.name} - {player.score}</li>
      ))}
    </ul>
  );
}
export default EvenPlayers;