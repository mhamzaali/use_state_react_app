import React, { useState } from 'react';
import './App.css';

function App() {
  let [Count,SetCount] = useState(1);
  let [IsMorning,SetMorning] = useState(false);

  return (
    <div className={`${IsMorning ? 'morning' : 'night'}`}>
      <h1>The Count is : {Count}</h1> 
      <button onClick={() => SetCount(++Count)}>Increment Counter</button>
      <h1>Good {IsMorning ? 'Morning' : 'Night'}</h1>
      <button onClick={ () => SetMorning(!IsMorning)}>Update Day</button>
    </div>
  );
}

export default App;
