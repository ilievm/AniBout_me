import React, { useState, useEffect } from 'react';
import './App.css';
import './welcomePage/welcome'
import Welcome from './welcomePage/welcome';
import Results from './results/results';
import UploadImage from './uploadImage/uploadImage';

// make a request
async  function getGifs(searchQuerry) {
    let searchQuerryOBJ = {query: searchQuerry}
    let searchQuerryJSON = JSON.stringify(searchQuerryOBJ)
    return await fetch('http://localhost:5000/', {
      method: 'post',
      headers: { "Content-Type": "application/json"},
      // "X-Content-Type-Options": "nosniff" },
      
      body: searchQuerryJSON
    })
    .then(data => data.json())
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
      return data
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
}


function App() {
  // Declare a new state variable, which we'll call "count"
  const [input, changeInput] = useState("");
  const [results, changeResults] = useState([]);

  useEffect(() => { });

  function handleChange(e) {
    changeInput(e.target.value);
    console.log(input);
  }

  async function submitOnline() {
    // const arrayOfResultsFromServer = await getGifs(input)
    // changeResults(arrayOfResultsFromServer);
    // changeInput('')
    
  }

  function testfunc() {
    alert('AAAAAAAAAA')
  }

  return (
    <div className="App">
      <Welcome></Welcome>
      <div className="input">
        {/* for url */}
        <div>
          <input id="inputURL" type="text" value={input} onChange={handleChange}/>
          <button onClick={submitOnline}>SUBMIT</button>
        </div>

        {/* local */}
        <p>Or upload file from your computer</p>
        {/* <UploadImage/> */}
      </div>
      <Results results={results}></Results>

    </div>
  );
}

export default App;
