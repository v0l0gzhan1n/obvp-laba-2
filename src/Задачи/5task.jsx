import React, { useState } from "react";
import './App.css';

function App() {
  const [value, setValue] = useState("");

  function handleChange(event){
    setValue(event.target.value);
  }
  return(
    <div>
        <select value={value} onChange={handleChange}>
            <option>Москва</option>
            <option>Париж</option>
            <option>Лондон</option>
            <option>Киев</option>
        </select>
        <p>выбор пользователя: {value}</p>
    </div>
  );
}
export default App;