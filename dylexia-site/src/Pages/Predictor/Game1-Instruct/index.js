import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';

const index = () => {
  return (
    <div>
      <div>GAME 1 INSTRUCTIONS</div>
        <Link to='/game1-play'>
          <Button>CLICK HERE</Button>
        </Link>
    </div>
  )
}

export default index
