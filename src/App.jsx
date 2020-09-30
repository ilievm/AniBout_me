import React, { useState, useEffect } from 'react';
import './App.css';
import './welcomePage/welcome'
import Welcome from './welcomePage/welcome';
import Results from './results/results';
import UploadImage from './uploadImage/uploadImage';
import ImageSearch from './ImageSearch/ImageSearch'


function App() {
  // Declare a new state variable, which we'll call "count"

  useEffect(() => { });


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
      <ImageSearch></ImageSearch>
      <UploadImage/>
      {/* <footer>Created by Mykhailo Iliev</footer> */}
    </div>
  );
}

export default App;
