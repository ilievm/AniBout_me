import React, { useState } from 'react';
import './results.css';


function Results(props) {
  return (
    <div className="Results">
      {props.results.what?<div className="whatsThat" ><p>This looks like {props.results.what}</p></div>:null}
        
      <ul>
        {props.results.gifResults?props.results.gifResults.map(el => {
          return (<li key={`${el[35]}${el[50]}${el[60]}${el[70]}}`}>
            <img src={el} alt="one of the gifs" width="400" />
          </li>)
        }):null}
      </ul>
    </div>
  );
}

export default Results;