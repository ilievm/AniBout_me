import getData from '../ImageSearch/gf'
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;



const key = 'df2a046b2b024503bd3300445a6449ed';
const endpoint = 'https://anibout.cognitiveservices.azure.com/'

// create a connection to the AI service
const computerVisionClient = new ComputerVisionClient(
new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

  // Analyze URL image
async function computerVision(describeURL) {
  const caption = (await computerVisionClient.describeImage(describeURL));
  const whatsThat = caption.captions[0]?caption.captions[0].text:'unrecognizable object';
  let tags = '';
  caption.tags.forEach((tag, i) => {
    if (i<3) {
      tags += ` ${tag}`
    }
  })
  const gifResults = await getData(tags);
  const output = {
    what: whatsThat,
    gifResults: gifResults
  }
  return output
}

export default computerVision
