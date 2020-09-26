'use strict';

const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

const key = 'df2a046b2b024503bd3300445a6449ed';
const endpoint = 'https://anibout.cognitiveservices.azure.com/'

// create a connection to the AI service
const computerVisionClient = new ComputerVisionClient(
new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

// const describeURL = 'https://docs.microsoft.com/en-us/azure/cognitive-services/Computer-vision/images/bw_buildings.png';

async function computerVision(describeURL) {
  // Analyze URL image
  const caption = (await computerVisionClient.describeImage(describeURL)).captions[0];
  console.log(`This may be: ${caption.text} (${caption.confidence.toFixed(2)} confidence)`);
  const spreadedResponse = caption.split(' ');
  const slicedResponse = spreadedResponse.slice(0,4);
  return slicedResponse;
}

module.exports = computerVision
