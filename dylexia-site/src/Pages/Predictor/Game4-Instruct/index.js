import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import './index.css'
const index = () => {
  return (
    <div>
      <div>
        <div class="App">
          <h1 class="content4">Game 4</h1>
        </div>
        <div class="App1">
          <h2 class="content4">Re-order the letters to write a correct word</h2>
        </div>
      </div>
      <Link to='/game4-play' class="content4">
          <Button>CLICK HERE</Button>
      </Link>
    </div>
  )
}

export default index
