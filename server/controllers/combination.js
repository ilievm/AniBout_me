const computerVision = require('./ImageSearch/AI');
const giphy = require('./GIPHYSearch/gf')

async function doTheThing(imageURL) {
  const imageRecognitionResult = await computerVision(imageURL);
  const gifResults = await giphy(
    `https://api.giphy.com/v1/gifs/search?api_key=460KmfK00dmOkN56Jgc649ttFBoZa58a&q=${imageRecognitionResult}&limit=25&offset=0&rating=g&lang=en`
  )
  return gifResults
}

module.exports = doTheThing