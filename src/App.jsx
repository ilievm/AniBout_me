import React, { useState } from 'react';
import './App.css';
import './welcomePage/welcome'
import Welcome from './welcomePage/welcome';
import Results from './results/results'

// let searchQuerry = {query: 'a big city'}

function App() {
  // Declare a new state variable, which we'll call "count"
  const [input, changeInput] = useState("");

  // make a request
  function getGifs(searchQuerry) {
    let searchQuerryJSON = JSON.stringify(searchQuerry)
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

  function handleChange(e) {
    changeInput(e.target.value);
    console.log(input);
  }

  return (
    <div className="App">
      <Welcome></Welcome>
      <input id="inputURL" type="text" value={input} onChange={handleChange}/>
      <Results></Results>
      <p>BBATOOON:</p>
      <button onClick={getGifs}>sup</button>
    </div>
  );
}

export default App;
