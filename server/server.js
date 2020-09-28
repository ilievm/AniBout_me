const http = require('http');
const url = require("url");
const express = require('express')
const app = express()
// const doTheThing = require('./controllers/combination')

const urls = [
  'https://media4.giphy.com/media/5fBH6zsQ5HVp73dNB9m/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media3.giphy.com/media/1hBWHsBYoqYOfsmAsL/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media1.giphy.com/media/kfidjf2y3H4jYHpowo/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media3.giphy.com/media/hriwNR5NVCTxERlj6C/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media2.giphy.com/media/kswu825pnCCZCw0Pv7/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media2.giphy.com/media/26lCQFgWA1AFVXniM/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media2.giphy.com/media/l4EoOem3YzIxAOV8s/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media3.giphy.com/media/Y4IzVD0jZuNElymdQV/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media2.giphy.com/media/l41m1hQsUjQnBSAOk/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media0.giphy.com/media/z83WsPTkRumLC/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media1.giphy.com/media/1nawHZ8nENKCRUNDLb/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media2.giphy.com/media/S664uEUYYd5IM5EtPv/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media3.giphy.com/media/3oEdv8LvEKOUN49wf6/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media4.giphy.com/media/3ohjUXRQO2NpRtt4J2/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media4.giphy.com/media/xUNd9PYbeSNPu5GxB6/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media3.giphy.com/media/Cc2lafq8xjgu4/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media1.giphy.com/media/xT1Ra101a4RAQRVP6U/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media4.giphy.com/media/xT1Ra0gSknchfbBlrW/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media1.giphy.com/media/L3WxbaFptiKwNEdMGq/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media1.giphy.com/media/3ohjVbsEUWoRise9PO/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media3.giphy.com/media/EpbEPSa383aULlRxov/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media3.giphy.com/media/sb9COmtksZd96/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media2.giphy.com/media/1i4YbQJccO8e6QsVkO/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media0.giphy.com/media/uFlGQiAorswocDhCrz/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif',
  'https://media3.giphy.com/media/l4Ep8H7Wr5IRyxK1i/giphy.gif?cid=ccb007b0u009fal0pc3y95m4whkh2h44qs1rcna1iecw06fw&rid=giphy.gif'
]


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

app.get('/', (req, res) => {
  res.send('Sup, I\'m server')
})

app.post('/', (req, res) => {
  // need to handle what if it's not url
  // let results = getData(req.body.query)
  // console.log(results);
  res.send(JSON.stringify(urls))
})



app.listen(5000, () => {
  console.log("i am serving a server 📮📮📮");
})
