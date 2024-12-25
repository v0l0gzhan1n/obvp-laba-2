import React, { useState } from "react";
import './App.css';

function App() {
  const [checked, setChecked] = useState(true);
  let mssg;
  if (checked){
    mssg = (<h2>Ура, вам уже есть 18</h2>, <p>здесь расположен контент только для взрослых</p>);
  } else{
    mssg = <p>увы, вам еще нет 18 лет:(</p>;
  }
  return(
    <div>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <div>{mssg}</div>
    </div>
  )
}
export default App;