import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';

const index = () => {
  return (
    <div>
        <div>
          <div className="App">
          <h1>Game 1</h1>
          </div>
          <div className="App1">
            <h2> Click on the 'b' among the other letters</h2>
          </div>
        </div>
        <Link to='/game1-play'>
          <Button>CLICK HERE</Button>
        </Link>
    </div>
  )
}

export default index
