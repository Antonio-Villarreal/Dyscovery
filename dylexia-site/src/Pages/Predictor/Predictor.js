import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Predictor.css'
import { Button, Form } from 'react-bootstrap'

const Predictor = () => {
  const [dataFinal, setdata] = useState([]);
  const [field, setField] = useState([]);
  const [out, setOut] = useState([]);
  const [blank, setBlank] = useState(true);

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    let gender = parseInt(e.target[0].value);
    let age = (e.target[1].value);
    let data = [[gender, age]]
    fetch("http://localhost:8080/predict", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((data) => {
      setdata(data);
      console.log(data);
      setOut(data);
    }).then(setBlank(false));
  }
  return (
    <div>
        <Navbar/>
        <p>PLAY OUR GAME</p>
        <Link to='/game1-instruct'>
          <Button>CLICK HERE</Button>
        </Link>

        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control type="number"></Form.Control>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Button variant="secondary" type="submit">Submit</Button>
        </Form>
        <div>{dataFinal}</div>
    </div>
  )
}

export default Predictor
