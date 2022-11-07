import React, {useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import './Games3.css'



const Games3 = () => {
  const navigate = useNavigate();
  
  const stringArray = [['r', 'e', 'g', 'a', 'l'], ['r', 'i', 'v', 'a', 'l'], ['c', 'h', 'o', 'm', 'p'], ['c', 'h', 'a', 'r', 's'],  ['s', 'p', 'a', 'c', 'e'], ['s', 't', 'a', 'm', 'p'], ['l', 'i', 'v', 'e', 's']]
  const stringArray2 = [['r', 'e', 'g', 'a', 'l'], ['r', 'i', 'v', 'a', 'l'], ['c', 'h', 'o', 'm', 'p'], ['c', 'h', 'a', 'r', 's'],  ['s', 'p', 'a', 'c', 'e'], ['s', 't', 'a', 'm', 'p'], ['l', 'i', 'v', 'e', 's']]
  const [word, setWord] = useState(['g', 'a', 't', 'o', 'r']);
  const [scramble, setScramble] = useState(['o', 't', 'a', 'g', 'r'])
  const [index, setIndex] = useState(0)
  const [solution, setSolution] = useState([])
  const [score, setScore] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [timerId, setTimerId] = useState();
  const [timer, setTimer] = useState(0);
  let list = [clicks, score, clicks-score, score, score/clicks, (clicks-score)/clicks];

  const navigateToNext = () => {
    navigate('/game4-instruct');
  };
  
  const onStart = () => {
    setTimerId(
      setInterval(() => {
        setTimer(state => state + 1);
      }, 1000)
    );
  };

  const onStop = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    clearInterval(timerId);
  }, [timerId]);

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const updateSolution = (slot) => {
    setSolution(solution => [...solution, scramble[slot]])
    if (solution.length == 5){
      if (solution[0] == word[0] && solution[1] == word[1] && solution[2] == word[2] && solution[3] == word[3] && solution[4] == word[4]){
        setScore(score + 1);
      };
      setClicks(clicks + 1)
      setWord(stringArray[index]);
      setScramble(shuffle(stringArray2[index]));
      setSolution([]);
      setIndex(index + 1)
    };
  };

  const handleClick = (slot) => {
    updateSolution(slot);
    }




  return (
    <div class="container3">
      <div class="grid3">
        <div class="box3"><h1>{solution[0]}</h1></div>
        <div class="box3"><h1>{solution[1]}</h1></div>
        <div class="box3"><h1>{solution[2]}</h1></div>
        <div class="box3"><h1>{solution[3]}</h1></div>
        <div class="box3"><h1>{solution[4]}</h1></div>
        <div class="box3" onClick={() => handleClick(0)}><h1>{scramble[0]}</h1></div>
        <div class="box3" onClick={() => handleClick(1)}><h1>{scramble[1]}</h1></div>
        <div class="box3" onClick={() => handleClick(2)}><h1>{scramble[2]}</h1></div>
        <div class="box3" onClick={() => handleClick(3)}><h1>{scramble[3]}</h1></div>
        <div class="box3" onClick={() => handleClick(4)}><h1>{scramble[4]}</h1></div>
      </div>
      <div>
        <h1 class="score3">{score}</h1>
      </div>
      <div>
        <h1 class="timer3">{useEffect(() => {onStart()}, [])}</h1>
        {timer < 31 && <h1 class="timer3">{timer}</h1>}
        {timer > 30 && navigateToNext()}
      </div>
    </div>
  )
}

export default Games3
