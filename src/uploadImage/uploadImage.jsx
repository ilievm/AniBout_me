import React from 'react';

function UploadImage(props) {

  let output

  function return64(e) {
    const matrixStuff = encodeImageFileAsURL(e);
    console.log("matrixStu🕵️‍♀️ffmatrixStuffmatrixStuff🕵️‍♀️🕵️‍♀️| ", matrixStuff);
    return matrixStuff
  }

  function encodeImageFileAsURL(e) {
    // why the hell if I log just e it's null but e.taget.files is there
      let fileToLoad = e.target.files[0];
  
      let fileReader = new FileReader();
  
      fileReader.onload = function(fileLoadedEvent) {
        let srcData = fileLoadedEvent.target.result; // <--- data: base64
        console.log("Converted Base64 version is| ", srcData);
        output = srcData
        console.log();
      }
      fileReader.readAsDataURL(fileToLoad);
      return output
  }

  
    return (
      <div>
        <input id="inputFileToLoad" type="file" onChange={return64} />
        <div id="imgTest"></div>
      </div>
    );
}

export default UploadImage;