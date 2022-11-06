import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';

const index = () => {
  return (
    <div>
      <div>DONE - RESULTS</div>
        <Link to='/info-project'>
          <Button>CLICK HERE</Button>
        </Link>
    </div>
  )
}

export default index
