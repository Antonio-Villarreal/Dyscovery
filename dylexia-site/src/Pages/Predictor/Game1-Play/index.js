import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import Game1 from '../../../Components/Games/Games1/Games1';

const index = () => {
  return (
    <div>
      <div>GAME 1</div>
      <Link to='/game2-instruct'>
          <Button>CLICK HERE</Button>
      </Link>
      <Game1></Game1>
    </div>
  )
}

export default index
