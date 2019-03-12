const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log("Listening in on Port 3000")
})