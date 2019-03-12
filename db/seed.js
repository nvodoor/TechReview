const db = require('./index.js');
const voters = require('./voters.js');

const candidates = [{
    fName: 'Jesse',
    lName: 'Bell',
    votes: 2
  },
  {
    fName: 'Anait',
    lName: 'Balayan',
    votes: 4
  },
  {
    fName: 'Mike',
    lName: 'Lopez',
    votes: 3,
  },
  {
    fName: 'Vivek',
    lName: 'Patel',
    votes: 3000
  },
  {
    fName: 'Aarushi',
    lName: 'Sharma',
    votes: 5
  }
];

const insertVotes = () => {
  voters.insertMany(candidates, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res);
    }
  })
}

insertVotes();