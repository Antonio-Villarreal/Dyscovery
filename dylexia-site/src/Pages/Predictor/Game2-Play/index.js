import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import Game2 from '../../../Components/Games/Games2/Games2';
import './index.css'

const index = () => {
  return (
    <div>
      <div class="content2">GAME 2</div>
      <Link to='/game3-instruct' class="content22">
          <Button class="content2">CLICK HERE</Button>
      </Link>
      <Game2/>
    </div>
  )
}

export default index
