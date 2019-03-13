import React from 'react';

const Candidates = ({ candidate,  vote}) => {
  return (
    <div>
      <p>{candidate.fName} {candidate.lName}</p>
      <p>{candidate.votes}</p>
      <button type="text" onClick={() => vote(candidate.fName, candidate.lName, candidate.votes)}>Add Vote</button>
    </div>
  )
}

export default Candidates;