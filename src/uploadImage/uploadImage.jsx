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


  function encodeImageFileAsURL(e) {
    let output;
    // why the hell if I log just e it's null but e.taget.files is there
    let fileToLoad = e.target.files[0];

    let fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      let srcData = fileLoadedEvent.target.result; // <--- data: base64
      console.log("Converted Base64 version is| ", srcData);
      change64(srcData)
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
    console.log(dataBLOB);
    const captionLocal = (await computerVisionClient.describeImageInStream(dataBLOB)).captions[0];
    console.log(`This may be ${captionLocal.text} (${captionLocal.confidence.toFixed(2)} confidence)`);
    alert(`This may be ${captionLocal.text} (${captionLocal.confidence.toFixed(2)} confidence)`);
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
        <input id="inputFileToLoad" type="file" onChange={return64} />
        <div id="imgTest"></div>
      </div>
    );
}

export default UploadImage;