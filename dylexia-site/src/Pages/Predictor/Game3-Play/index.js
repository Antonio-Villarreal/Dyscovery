import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import Game3 from '../../../Components/Games/Games3/Games3';

const index = () => {
  return (
    <div>
      <div>GAME 3</div>
      <Link to='/game4-instruct'>
          <Button>CLICK HERE</Button>
      </Link>
      <Game3></Game3>
    </div>
  )
}

export default index
