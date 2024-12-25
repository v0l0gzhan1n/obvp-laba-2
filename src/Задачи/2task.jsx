import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
        <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        />
        <p>{value}</p>
    </div>
    );
}
export default App;