import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import './index.css'

const index = () => {
  return (
    <div>
      <div>
        <div>
          <h1 class="content3">Game 3</h1>
        </div>
        <div class="App1">
          <h2 class="content33">Unscramble the five letter word</h2>
        </div>
      </div>
      <Link to='/game3-play' class="content333">
          <Button>CLICK HERE</Button>
      </Link>
    </div>
  )
}

export default index
