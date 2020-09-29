import React, { useState, useEffect } from 'react';
import {ComputerVisionClient} from '@azure/cognitiveservices-computervision';
import {ApiKeyCredentials} from '@azure/ms-rest-js'


const key = 'df2a046b2b024503bd3300445a6449ed';
const endpoint = 'https://anibout.cognitiveservices.azure.com/'

// create a connection to the AI service
const computerVisionClient = new ComputerVisionClient(
new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

function UploadImage(props) {

  const [encoded64, change64] = useState("");


  async function submitLocal() {
    // const arrayOfResultsFromServer = await getGifs(input)
    // changeResults(arrayOfResultsFromServer);
    // changeInput('')
    const describeURL = 'data:image/jpeg;base64,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'

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

    const dataBLOB = makeblob(describeURL);
    async function computerVision(dataBLOB) {
      const captionLocal = (await computerVisionClient.describeImageInStream(dataBLOB)).captions[0];
      console.log(`This may be ${captionLocal.text} (${captionLocal.confidence.toFixed(2)} confidence)`);
    }
    computerVision(dataBLOB)
  }

  function encodeImageFileAsURL(e) {
      let output;
      // why the hell if I log just e it's null but e.taget.files is there
      let fileToLoad = e.target.files[0];
  
      let fileReader = new FileReader();
  
      fileReader.onload = function(fileLoadedEvent) {
        let srcData = fileLoadedEvent.target.result; // <--- data: base64
        console.log("Converted Base64 version is| ", srcData);
        change64(srcData)
        console.log(encoded64);
      }
      fileReader.readAsDataURL(fileToLoad);
  }

  function return64(e) {
    const matrixStuff = encodeImageFileAsURL(e);
    console.log("matrixStu🕵️‍♀️ffmatrixStuffmatrixStuff🕵️‍♀️🕵️‍♀️| ", matrixStuff);
    return matrixStuff
  }
  
    return (
      <div>
        <input id="inputFileToLoad" type="file" onChange={return64} />
        <div id="imgTest"></div>
      </div>
    );
}

export default UploadImage;