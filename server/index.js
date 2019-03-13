const express = require('express');
const path = require('path');
const queries = require('../db/queries.js');
const parser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(parser());

app.get('/all', (req, res) => {
  queries.findAll((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
})

app.post('/submit', (req, res) => {
  const { fName, lName } = req.body;
  const rec = {
    fName: fName,
    lName: lName,
    votes: 0
  }
  queries.AddOne([rec], (err, response) => {
    if (err) {
      res.send(err)
    } else {
      res.send(response)
    }
  })
})

app.put('/votes', (req, res) => {
  const { fName, lName, votes } = req.body;
  const rec = {
    fName: fName,
    lName: lName,
    votes: votes
  }
  console.log(rec)
  queries.updateOne(rec, (err, response) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      console.log(response)
      res.send(response)
    }
  })
})

app.listen(3000, () => {
  console.log("Listening in on Port 3000")
})