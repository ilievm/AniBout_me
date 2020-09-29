import React, { Component } from 'react';
import './welcome.css'

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <h1></h1>
        <h1 class="c-article__title">
          INTELLIGENCE OF AI FOR YOU        
        </h1>
        <p className="welcome-p">use the power of image recognition to find gifs</p>
        <h3 className="welcome-h3">To get started just upload an image or insert image URL</h3>
      </div>
    );
  }
}

export default Welcome;