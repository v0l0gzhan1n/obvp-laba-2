import React, { useState } from "react";
import './App.css';

function App() {
  const initDate = { year: 2025, month: 12, day: 31 };
  const [date, setDate] = useState(initDate);

  const getDayOfWeek = (year, month, day) => {
    const daysOfWeek = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const dateObject = new Date(year, month - 1, day);
    return daysOfWeek[dateObject.getDay()];
  };

  const handleChange = (key, value) => {
    setDate((prevDate) => ({ ...prevDate, [key]: Number(value) }));
  };

  return (
    <div>
      <div>
        <label>
          Год: 
          <input
            type="number"
            value={date.year}
            onChange={(e) => handleChange("year", e.target.value)}
          />
        </label>
        <label>
          Месяц: 
          <input
            type="number"
            value={date.month}
            onChange={(e) => handleChange("month", e.target.value)}
          />
        </label>
        <label>
          День: 
          <input
            type="number"
            value={date.day}
            onChange={(e) => handleChange("day", e.target.value)}
          />
        </label>
      </div>
      <p>
        Дата: {date.year}-{date.month}-{date.day}
      </p>
      <p>День недели: {getDayOfWeek(date.year, date.month, date.day)}</p>
    </div>
  );
}

export default App;