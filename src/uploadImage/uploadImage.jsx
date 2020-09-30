import React, { useState, useEffect } from 'react';
import {ComputerVisionClient} from '@azure/cognitiveservices-computervision';
import {ApiKeyCredentials} from '@azure/ms-rest-js'
import Results from '../results/results'
const giphy = require('../ImageSearch/gf')


const key = 'df2a046b2b024503bd3300445a6449ed';
const endpoint = 'https://anibout.cognitiveservices.azure.com/'

// create a connection to the AI service
const computerVisionClient = new ComputerVisionClient(
new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

function UploadImage(props) {
  const [encoded64, change64] = useState("");
  const [results, changeResults] = useState({});


  function encodeImageFileAsURL(e) {
    let output;
    // why the hell if I log just e it's null but e.taget.files is there
    let fileToLoad = e.target.files[0];

    let fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      let srcData = fileLoadedEvent.target.result; // <--- data: base64
      change64(srcData)
      console.log(encoded64);
    }
    fileReader.readAsDataURL(fileToLoad);
    return output
  }


  const makeblob = function (dataURL) {
    let BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        let parts = dataURL.split(',');
        let contentType = parts[0].split(':')[1];
        let raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    }
    let parts = dataURL.split(BASE64_MARKER);
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
  
    let uInt8Array = new Uint8Array(rawLength);
  
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }


  async function computerVision(dataBLOB) {
    const captionLocal = (await computerVisionClient.describeImageInStream(dataBLOB));
    console.log(captionLocal);
    let whatsThat;
    if(captionLocal.captions[0]) {whatsThat = captionLocal.captions[0].text}
    let tags = '';
    captionLocal.tags.forEach((tag, i) => {
      if (i<4) {
        tags += ` ${tag}`
      }
    })

    console.log(tags);
    const gifResults = await giphy(tags)
    const output = {
      what: whatsThat,
      gifResults: gifResults
    }
    changeResults(output)
  }

  function return64(e) {
    encodeImageFileAsURL(e);
  }

  useEffect(() => {
    if (encoded64.length) {
      const dataBLOB = makeblob(encoded64);
      computerVision(dataBLOB)
    }
  },[encoded64]);
  
    return (
      <div>
        <div className="input">
          <input id="inputFileToLoad" type="file" onChange={return64} />
          <div id="imgTest"></div>
        </div>
        <Results results={results}></Results>
      </div>
      
    );
}

export default UploadImage;