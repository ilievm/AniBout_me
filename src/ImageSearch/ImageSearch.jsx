import React, { useState} from 'react';
import  './ImageSearch.css'
import computerVision from './AI_URL';
import Results from '../results/results'
import Loader from '../Loader/Loader'

function ImageSearch(props) {
  const [input, changeInput] = useState("");
  const [results, changeResults] = useState([]);
  const [loaderState, changeLoaderState] = useState(false);

  async function handleSearch() {
    if (input.length>5) {
      changeLoaderState(true)
      const APIoutput = await computerVision(input);
      changeLoaderState(false)
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
      <div className="searchDiv">
        <p className="searchInstructions">Search image URL</p>
        <input id="inputURL" type="text" value={input} onChange={handleChange} required/>
        <button className="searchButton" onClick={handleSearch}>SUBMIT</button>
        <Loader display={loaderState}></Loader>
        <Results results={results}></Results>
      </div>
    );
}

export default ImageSearch;