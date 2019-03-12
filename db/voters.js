const mongoose = require('mongoose');
const schema = mongoose.Schema;


const voterSchema =  new schema({
  fName: String,
  lName: String,
  votes: Number,
})

const voters = mongoose.model('Voters', voterSchema);

module.exports = voters;

