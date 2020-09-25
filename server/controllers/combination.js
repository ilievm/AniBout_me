const computerVision = require('./ImageSearch/AI');
const giphy = require('./GIPHYSearch/gf')

async function doTheThing(imageURL, gifQuerry) {
  const imageRecognitionResult = await computerVision();
  const gifResults = await giphy()
  console.log("img: ", imageRecognitionResult);
  console.log("gif: ", gifResults);

}

doTheThing()

module.exports = doTheThing