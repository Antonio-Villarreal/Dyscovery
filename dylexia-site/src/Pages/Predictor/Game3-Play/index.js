import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';

const index = () => {
  return (
    <div>
      <div>GAME 3</div>
      <Link to='/game4-instruct'>
          <Button>CLICK HERE</Button>
      </Link>
    </div>
  )
}

export default index
