const http = require('http');
const url = require("url");
const express = require('express')
const app = express()
const doTheThing = require('./controllers/combination')

  // for req.body
app.use(express.json())
  // for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

async function getData (picurl) {
  const results = await doTheThing(picurl)
  console.log(results);
  return results;
}

const toSend = {sup: 'yooo'}

app.get('/', (req, res) => {
  res.send('Sup, I\'m server')
})

app.post('/', (req, res) => {
  // need to handle what if it's not url
  //let results = getData(req.body.query)
  // res.send(JSON.stringify(results))
})



app.listen(5000, () => {
  console.log("i am serving a server 📮📮📮");
})
