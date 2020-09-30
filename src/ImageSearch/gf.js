const axios = require("axios");
const url = "https://api.giphy.com/v1/gifs/search?api_key=460KmfK00dmOkN56Jgc649ttFBoZa58a&q=api&limit=25&offset=0&rating=g&lang=en";

const getData = async querry => {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=460KmfK00dmOkN56Jgc649ttFBoZa58a&q=${querry}&limit=50&offset=0&rating=g&lang=en`);
    const data = response.data;
    let output = [];
    for (let i = 0; i < data.data.length; i++) {
      output.push(data.data[i].images.original.url);
    }
    console.log(output);
    return output;    
  } catch (error) {
    console.log(error);
  }
};

module.exports = getData;