const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/voterdemo';

const db = mongoose.connect(mongoUri);

module.exports = db;