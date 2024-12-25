import React, { useState } from "react";

function App() {
  const [values, setValues] = useState([0, 0, 0, 0, 0]);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = Number(event.target.value);
    setValues(newValues);
  };

  const average =
    values.reduce((sum, current) => sum + current, 0) / values.length;

  return (
    <div>
      {values.map((val, idx) => (
        <input
          key={idx}
          type="number"
          value={val}
          onChange={(e) => handleChange(idx, e)}
        />
      ))}
      <p>Среднее арифметическое: {average}</p>
    </div>
  );
}
export default App;