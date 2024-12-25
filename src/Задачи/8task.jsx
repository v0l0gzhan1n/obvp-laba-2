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

  return (
    <div>
      <p>
        Дата: {date.year}-{date.month}-{date.day}
      </p>
      <p>День недели: {getDayOfWeek(date.year, date.month, date.day)}</p>
    </div>
  );
}

export default App;