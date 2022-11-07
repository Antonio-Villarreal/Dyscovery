import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import './Complete.css';
import Games1 from '../../../Components/Games/Games1/Games1';
import Games2 from '../../../Components/Games/Games2/Games2';
import Games3 from '../../../Components/Games/Games3/Games3';
import Games4 from '../../../Components/Games/Games4/Games4';

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

  const func2 = () => {
    return dataFinal;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    let gender = parseInt(e.target[0].value);
    let age = (e.target[1].value);
    let data = [[gender, age, Games1.list1[0], Games1.list1[1], Games1.list1[2], Games1.list1[3], Games1.list1[4], Games1.list1[5], Games2.list2[0], Games2.list2[1], Games2.list2[2], Games2.list2[3], Games2.list2[4], Games2.list2[5], Games3.list[0], Games3.list[1], Games3.list[2], Games3.list[3], Games3.list[4], Games3.list[5], Games4.list[0], Games4.list[1], Games4.list[2], Games4.list[3], Games4.list[4], Games4.list1[5]]];   
    console.log(data);

    fetch("http://localhost:8080/predict", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((data) => {
      //setdata(data);
      setdata(data[0]);
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
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <center><Form.Label>Gender</Form.Label></center>
            <center><Form.Control as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </Form.Control></center>
          </Form.Group>

          <Form.Group>
            <center><Form.Label>Age</Form.Label></center>
            <center><Form.Control type="number"></Form.Control></center>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <center><Button variant="secondary" type="submit" onClick={func}>Submit</Button></center>
        </Form>
        <center>{submit && <div>We predict based on our model that you are {func2 ? 'not dyslexic' : 'dyslexic'}</div>}</center>
    </div>
  )
}

export default Complete
