import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import './Complete.css';

const Complete = () => {
  const [dataFinal, setdata] = useState([]);
  const [field, setField] = useState([]);
  const [out, setOut] = useState([]);
  const [blank, setBlank] = useState(true);

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const [submit, setSubmit] = useState(false);

  const func = () => {
      setSubmit(true);
  }

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
      {/* <div>DONE - RESULTS</div>
        <Link to='/info-project'>
          <Button>CLICK HERE</Button>
        </Link> */}

        <Form onSubmit={onFormSubmit} class="form">
          <Form.Group class="gender_group">
            <Form.Label class= "gender">Gender</Form.Label>
            <Form.Control as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>

              <option value="0">Female</option>
              <option value="1">Male</option>
            </Form.Control></center>
          </Form.Group>


          <Form.Group class="age_group">
            <Form.Label class="age">Age</Form.Label>
            <Form.Control type="number"></Form.Control>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <center><Button variant="secondary" type="submit" onClick={func}>Submit</Button></center>
        </Form>
        <center><div>{submit && <div>We predict based on our model that you are {dataFinal ? 'not dyslexic' : 'dyslexic'}</div>}</div></center>
    </div>
  )
}

export default Complete
