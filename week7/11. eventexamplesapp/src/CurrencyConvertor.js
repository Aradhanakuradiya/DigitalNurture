import { useState } from "react";
const CurrencyConvertor = () => {
  const [amount, setamount] = useState('');
    const [inr, setinr] = useState('');

  const handleinp = (e) => {
    setamount(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
       e.preventDefault(); 
      const rate = 90.0;
      const converted = parseFloat(amount)*rate;
      alert(`Converted Amount: ${converted} INR`);
      setamount(''); 
      setinr('');


  };
  return (
    <>
      <h1 style={{ color: "green" }}>Currency Convertor</h1>

      <br></br>
      <label>Amount</label>
      <input type="number" value={amount} placeholder="Enter Amount" onChange={handleinp} />
      <br></br>
      <label>Currency</label>
      <input type="text" placeholder="Enter Currency" />
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
  
    </>
  );
};

export default CurrencyConvertor;
