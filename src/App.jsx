import React, { useState } from 'react';
import './App.css';
import './welcomePage/welcome'
import Welcome from './welcomePage/welcome';
import Results from './results/results'

let searchQuerry = {query: 'a big city'}
let searchQuerryJSON = JSON.stringify(searchQuerry)

function getGifs() {
  fetch('http://localhost:5000/', {
    method: 'post',
    // headers: {
    //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    // },
    headers: { "Content-Type": "application/json" },
    body: searchQuerryJSON
  })
  .then(data => data.json())
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
}

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(23);

  return (
    <div className="App">
      <Welcome></Welcome>
      <Results></Results>
      <p>BBATOOON:</p>
      <button onClick={getGifs}>sup</button>
    </div>
  );
}

export default App;
