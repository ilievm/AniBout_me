const axios = require("axios");
// const url = "https://api.giphy.com/v1/gifs/search?api_key=460KmfK00dmOkN56Jgc649ttFBoZa58a&q=api&limit=25&offset=0&rating=g&lang=en";

const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    let output = [];
    for (let i = 0; i < data.data.length; i++) {
      output.push(data.data[i].url);
    }
    return output;    
  } catch (error) {
    console.log(error);
  }
};

module.exports = getData;