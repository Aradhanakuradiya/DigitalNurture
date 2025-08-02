import CurrencyConvertor from "./CurrencyConvertor";
import { use, useState } from "react";
const App = () => {
  const [incr, setincre] = useState(0);
  const handleIncre = () => {
    setincre(incr + 1);
    alert("Hello Member 1");
  };
  const handledecre = () => {
    setincre(incr - 1);
  };
  const handlewelcome = ({ welcome }) => {
    alert(`${welcome}`);
  };
  const handleClick = () => {
    alert(`I am clicked`);
  };
  return (
    <>
      <h3>{incr}</h3>
      <button onClick={handleIncre}>Increment</button>
      <br></br>
      <button onClick={handledecre}>Decrement</button>
      <br></br>
      <button
        onClick={() => {
          handlewelcome({ welcome: "Welcome" });
        }}
      >
        Say Welcome
      </button>
      <br></br>
      <button onClick={handleClick}>Click on me</button>

      <CurrencyConvertor />
    </>
  );
};

export default App;
