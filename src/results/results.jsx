import React, { useState } from 'react';
import './results.css';

function Results(props) {
  console.log("HEEEEEEEEEEEY 🥏: ", props.results);
  return (
    <div className="Results">
      <ul>
        {props.results?props.results.map(el => {
          console.log(el);
          return (<li>
            <img src={el} alt="one of the gifs" width="250" />
          </li>)
        }):null}
      </ul>
    </div>
  );
}

export default Results;