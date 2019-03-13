import React from 'react';
import Candidate from './candidates.jsx';
import Create from './create.jsx';

class Election extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: [],
      fName: '',
      lName: '',
    }

    this.updateName = this.updateName.bind(this);
    this.addCandidate = this.addCandidate.bind(this);
    this.Vote = this.Vote.bind(this);
  }

  updateName(e) {
    if (e.target.name === 'fName') {
      this.setState({
        fName: e.target.value
      })
    } else {
      this.setState({
        lName: e.target.value
      })
    }
  }

  getCandidates() {
    fetch('/all')
    .then(res => res.json())
    .then(candidates => 
      this.setState({
        candidates: candidates
      })
    )
  }

  componentDidMount() {
    this.getCandidates()
  }

  addCandidate() {
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fName: this.state.fName,
        lName: this.state.lName
      })
    }).then(() => this.getCandidates())
  }

  Vote(fName, lName, votes) {
    const record = {
      fName: fName,
      lName: lName,
      votes: votes += 1
    }
    fetch('/votes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
    })
    .then(() => this.getCandidates())
  }

  render() {
    const { candidates, fName, lName } = this.state;
    return (
      <div>
        <Create first={fName} last={lName} update={this.updateName} clicked={this.addCandidate}/>
        {candidates.map((candid, id) => <Candidate candidate={candid} key={id} vote={this.Vote}/>)}
      </div>
    )
  }
}

export default Election;