import React, { useState } from 'react';
import './App.css';
import './welcomePage/welcome'
import Welcome from './welcomePage/welcome';
import Results from './results/results'

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(23);


  return (
    <div className="App">
      <Welcome></Welcome>
      <Results test={count}></Results>
    </div>
  );
}

export default App;
