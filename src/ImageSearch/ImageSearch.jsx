import React, { useState, useEffect } from 'react';
import computerVision from './AI_URL';
import Results from '../results/results'

function ImageSearch(props) {
  const [input, changeInput] = useState("");
  const [results, changeResults] = useState([]);

  async function handleSearch() {
    if (input.length>5) {
      const APIoutput = await computerVision(input);
      changeResults(APIoutput)
      changeInput("")
    } else {
      alert("URL is too short")
    }
  }

  function handleChange(e) {
    changeInput(e.target.value);
  }
  
    return (
      <div>
        SEARCH IMAGE URL
        <div className="input">
          <input id="inputURL" type="text" value={input} onChange={handleChange} required/>
          <button onClick={handleSearch}>SUBMIT</button>
        </div>
        <Results results={results}></Results>
      </div>
    );
}

export default ImageSearch;