import React from 'react';
import './Loader.css'

function Loader (props) {

  if (props.display === true) {
    return (
      <div className="loader">
        <h1>Analyzing image...</h1>
        <div className="spinner-box">
          <div className="leo-border-1">
            <div className="leo-core-1"></div>
          </div>
          <div className="leo-border-2">
            <div className="leo-core-2"></div>
          </div>
        </div>
      </div>
      
    );
  } else {
    return (
      <div>

      </div>
    )
  }
    
}

export default Loader;