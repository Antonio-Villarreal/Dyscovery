import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import './index.css'

const index = () => {
  return (
    <div>
      <div>
        <div class="App">
          <h1 class="content">Game 2</h1>
        </div>
        <div class="App1">
          <h2 class="content">Find the 'F' among the 'E'</h2>
        </div>
      </div>
      <Link to='/game2-play' class="content">
          <Button>CLICK HERE</Button>
      </Link>
    </div>
  )
}

export default index
