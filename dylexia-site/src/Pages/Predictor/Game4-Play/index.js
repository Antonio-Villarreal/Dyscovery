import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import Game4 from '../../../Components/Games/Games4/Games4';

const index = () => {
  return (
    <div>
      <div>GAME 4</div>
      {/* <Link to='/game-complete'>
          <Button>CLICK HERE</Button>
      </Link> */}
      <Game4></Game4>
    </div>
  )
}

export default index
