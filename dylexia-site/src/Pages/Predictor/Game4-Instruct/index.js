import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';

const index = () => {
  return (
    <div>
      <div>
        <div className="App">
          <h1>Game 4</h1>
        </div>
        <div className="App1">
          <h2>Re-order the letters to write a correct word</h2>
        </div>
      </div>
      <Link to='/game4-play'>
          <Button>CLICK HERE</Button>
      </Link>
    </div>
  )
}

export default index
