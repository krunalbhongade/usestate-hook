import React, { useState } from "react";

function App() {
  const state = useState(12);
  let [age] = useState(35);

  function increase() {
    state[0]++;
    console.log(state[0]);
    console.log(age++);
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
