import React, { useState } from "react";
import './App.css';

function App() {
  const [ageGroup, setAgeGroup] = useState("");

  return (
    <div>
      <select value={ageGroup} onChange={(event) => setAgeGroup(event.target.value)}>
        <option value="0-12">От 0 до 12 лет</option>
        <option value="13-17">От 13 до 17 лет</option>
        <option value="18-25">От 18 до 25 лет</option>
        <option value="26+">Старше 25 лет</option>
      </select>
      <p>Ваша возрастная группа: {ageGroup}</p>
    </div>
  );
}

export default App;