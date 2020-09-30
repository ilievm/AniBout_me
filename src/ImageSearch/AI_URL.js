const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

const giphy = require('./gf')


const key = 'df2a046b2b024503bd3300445a6449ed';
const endpoint = 'https://anibout.cognitiveservices.azure.com/'

// create a connection to the AI service
const computerVisionClient = new ComputerVisionClient(
new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

  // Analyze URL image
async function computerVision(describeURL) {
  const caption = (await computerVisionClient.describeImage(describeURL));
  const whatsThat = caption.captions[0].text;
  let tags = '';
  caption.tags.forEach((tag, i) => {
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
  return output
}

module.exports = computerVision