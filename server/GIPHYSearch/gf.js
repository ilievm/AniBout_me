const axios = require("axios");
const url = "https://api.giphy.com/v1/gifs/search?api_key=460KmfK00dmOkN56Jgc649ttFBoZa58a&q=api&limit=25&offset=0&rating=g&lang=en";

const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    for (let i = 0; i < data.data.length; i++) {
      console.log(data.data[i].url);
      console.log(data.data.length);
      
    }
  } catch (error) {
    console.log(error);
  }
};

getData(url);