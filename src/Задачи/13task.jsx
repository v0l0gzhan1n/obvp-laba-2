import React, { useState } from "react";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const addItem = () => {
    if (input1 && input2 && input3) {
      const newItem = `${input1}, ${input2}, ${input3}`;
      setItems([...items, newItem]);
      setInput1("");
      setInput2("");
      setInput3("");
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Введите первое значение"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Введите второе значение"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Введите третье значение"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
      />
      <button onClick={addItem}>Добавить элемент</button>
    </div>
  );
}

export default App;