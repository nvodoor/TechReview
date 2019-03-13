const voters = require('./voters.js');

const findAll = (callback) => {
  voters.find({}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs)
    }
  })
}

const AddOne = (record, callback) => {
  voters.create(record, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  })
}

const updateOne = (record, callback) => {
  const update = { fName: record.fName, lName: record.lName }
  voters.findOneAndUpdate(update, {votes: record.votes}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  })
}

module.exports.findAll = findAll;
module.exports.AddOne = AddOne;
module.exports.updateOne = updateOne;