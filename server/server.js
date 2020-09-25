const http = require('http');
const url = require("url");
const express = require('express')
const app = express()
// const getData = require('./controllers/combination')

  // for req.body
// app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json())
  // for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let imageURL;
let gifQuerry;

const toSend = {sup: 'yooo'}

app.get('/', (req, res) => {
  res.send('Sup, I\'m server')
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body))
})

app.listen(5000, () => {
  console.log("i am serving a server");
})
