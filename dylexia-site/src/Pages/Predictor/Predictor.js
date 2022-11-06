import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Predictor.css'
import { Button, Form } from 'react-bootstrap'
import img1 from "./Images/Dyslexia_image2.jpg";

const Predictor = () => {

  return (
    <div>
        <Navbar/>
        <div>
          <div className="App">
            <h1>ARE YOU DYSLEXIC?</h1>
          </div>
          <div className="App1">
            <h3>Want to find out?</h3>
            <p>
              Did you know that dyslexia affects over 10 percent of the world's
              population? With such a big number, around 38 million Americans remain
              undiagnosed with dyslexia. As a simple solution, we have come up with
              a gamified model that can detect whether or not children between the
              ages of 7 and 17 have dyslexia with an accuracy range of 80%-85%!
            </p>
            <p>
              Just enter your gender and age, then begin our test. It'll take less
              than five minutes to complete!
            </p>
          </div>
          <div>
          <Link to='/game1-instruct'>
            <Button>CLICK HERE</Button>
          </Link>
          </div>
          <div>
            <img className="Images" src={img1} alt="image loading..."></img>
          </div>
        </div>
    </div>
  )
}

export default Predictor
