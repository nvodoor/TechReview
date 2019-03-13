import React from 'react';

const Create = ({ first, last, update, clicked }) => {
  return (
    <div>
      <input type="text" value={first} name="fName" onChange={update} placeholder="Enter First Name"/>
      <input type="text" value={last} name="lName" onChange={update} placeholder="Enter Last Name"/>
      <button type="text" onClick={clicked}>Add Candidate</button>
    </div>
  )
}

export default Create;