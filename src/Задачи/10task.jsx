import React, { useState } from "react";
import './App.css';

function App() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Добавить элемент</button>
    </div>
  );
}

export default App;