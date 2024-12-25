import React, { useState } from "react";
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleChange = (index, event) => {
    const newNumbers = [...numbers];
    newNumbers[index] = Number(event.target.value);
    setNumbers(newNumbers);
  };

  const average =
    numbers.reduce((sum, number) => sum + number, 0) / numbers.length;

  return (
    <div>
      {numbers.map((num, index) => (
        <input
          key={index}
          type="number"
          value={num}
          onChange={(e) => handleChange(index, e)}
        />
      ))}
      <p>Среднее арифметическое: {average}</p>
    </div>
  );
}

export default App;