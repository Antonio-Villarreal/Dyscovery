import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import InsertData from '../src/Components/APIService';

//Components
import HomePage from './Pages/HomePage';
import Info_Dyslexia from './Pages/Info-Dyslexia/info-dyslexia';
import Info_Project from './Pages/Info-Project/info-project';
import Predictor from './Pages/Predictor/Predictor';
import Game1_Instruct from './Pages/Predictor/Game1-Instruct/index';
import Game1_Play from './Pages/Predictor/Game1-Play/index';
import Game2_Instruct from './Pages/Predictor/Game2-Instruct/index';
import Game2_Play from './Pages/Predictor/Game2-Play/index';
import Game3_Instruct from './Pages/Predictor/Game3-Instruct/index';
import Game3_Play from './Pages/Predictor/Game3-Play/index';
import Game4_Instruct from './Pages/Predictor/Game4-Instruct/index';
import Game4_Play from './Pages/Predictor/Game4-Play/index';
import Game_Complete from './Pages/Predictor/Game-complete/Complete';

const List = [1,7,2,2,0,2,1,0,3,3,0,3,1,8,5,3,2,3,0,6,0,4,9,1,0.1,0.1];


function App() {

  
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    penis: "",
    programming: "",
  });
  // Using useEffect for single rendering
  useEffect(() => {
      // Using fetch to fetch the api from 
      // flask server it will be redirected to proxy
      fetch("/data").then((res) =>
          res.json().then((data) => {
              // Setting a data from api
              setdata({
                  name: data.Name,
                  age: data.Age,
                  date: data.Date,
                  penis: data.Penis,
                  programming: data.programming,
              });
          })
      );
  }, []);

  const [out, setOut] = useState([]);
  const [blank, setBlank] = useState([]);

  let whole = [];

  const invokeAPI = (input, whole) => {
    fetch("http://localhost:8080/predict", {
        method: "POST",
        headers: {"Content-Type": "applications/json" },
        body: JSON.stringify(input)
    }).then((response) => response.json())
    .then((data) => {
      console.log(data);

      for(let i = 0; i<data.length; i++) {
        whole[i] = [...whole[i], data[i][0]];
      }



      whole = data;
      console.log(whole);
      setOut(whole);
    }).then(setBlank(false));
  }

  const func2 = () => {
    invokeAPI(out, whole);
  }

  const func = () => {
    InsertData(List);
  };

  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/info-dyslexia" element={<Info_Dyslexia/>}/>
          <Route path="/info-project" element={<Info_Project/>}/>
          <Route path="/predictor" element={<Predictor/>}/>
          <Route path="/game1-instruct" element={<Game1_Instruct/>}/>
          <Route path="/game1-play" element={<Game1_Play/>}/>
          <Route path="/game2-instruct" element={<Game2_Instruct/>}/>
          <Route path="/game2-play" element={<Game2_Play/>}/>
          <Route path="/game3-instruct" element={<Game3_Instruct/>}/>
          <Route path="/game3-play" element={<Game3_Play/>}/>
          <Route path="/game4-instruct" element={<Game4_Instruct/>}/>
          <Route path="/game4-play" element={<Game4_Play/>}/>
          <Route path="/game-complete" element={<Game_Complete/>}/>
        </Routes>
      </Router>
     </div>
  );
}

export default App;
