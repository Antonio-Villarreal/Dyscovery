import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';

const index = () => {
  return (
    <div>
      <div>GAME 4 Instructions</div>
      <Link to='/game4-play'>
          <Button>CLICK HERE</Button>
      </Link>
    </div>
  )
}

export default index
