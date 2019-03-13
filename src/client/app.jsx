import React from 'react';
import ReactDOM from 'react-dom';
import Election from './Election.jsx';


const App = () => {
  return (
    <div>
      <h1>Election App</h1>
      <Election />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));