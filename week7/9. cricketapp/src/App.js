import Scorebelow70 from "./Scorebelow70";
import ListofPlayers from "./ListofPlayers";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers.js";

const App = () => {
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "Raghu", score: 40 },
    { name: "Veer", score: 61 },
    { name: "Sarman", score: 95 },
    { name: "Ajay", score: 100 },
    { name: "Vijay", score: 84 },
    { name: "Shiv", score: 64 },
    { name: "Kv", score: 75 },
    { name: "Jacky", score: 80 },
    { name: "Rocky", score: 50 }
  ];

  const flag = true; 

  return (
    <>
      {flag && (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List of Players having score less than 70</h1>
          <Scorebelow70 players={players} />
        </div>
      )}
      {!flag &&(
        <>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <OddPlayers players={players}/>
        <hr/>
        <h1>Even Players</h1>
        <EvenPlayers players={players}/>
        <hr/>
        <h1>List of Indian Players Merged</h1>
        <ListofIndianPlayers />
        </>
      )}
    </>
  );
};

export default App;