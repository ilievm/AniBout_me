import React from 'react';
import './results.css';


function Results(props) {
  return (
    <div className="Results">
      {props.results.what?<div className="whatsThat" ><p>This looks like {props.results.what}</p></div>:null}
        
      <ul>
        {props.results.gifResults?props.results.gifResults.map(el => {
          return (<li key={Math.random().toString(32).slice(2)}>
            <img src={el} alt="one of the gifs" width="400" />
          </li>)
        }):null}
      </ul>
    </div>
  );
}

export default Results;