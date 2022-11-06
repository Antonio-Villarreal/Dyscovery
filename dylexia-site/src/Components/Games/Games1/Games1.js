import React, {useState, useEffect} from 'react'
import './Games1.css';



const Games1 = () => {
  const charArray = ['q', 'd', 'p', 'b'];
  const [hits, setHits] = useState(0);
  const [letter, setLetter] = useState(['q', 'b', 'p', 'q', 'p', 'b', 'd', 'd', 'p', 'q', 'b', 'd', 'p', 'q', 'd', 'p', 'q', 'b', 'q', 'p', 'b', 'd', 'd', 'p', 'q']);
  const [clicks, setClicks] = useState(0)
  const [misses, setMisses] = useState(0)
  const [timerId, setTimerId] = useState();
  const [timer, setTimer] = useState(0);

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

  const updateValues = (index) => {
    if (letter[index] == 'b'){
      setHits(hits + 1)
    }
    else{
      setMisses(misses + 1)
    }
    setClicks(clicks + 1)
  }

  const getRandomChar = () => {
    let arr = new Array(25)
    for (let i = 0; i < letter.length; i++){
      arr[i] = charArray[Math.floor(Math.random() * charArray.length)]
    }
    return arr
  };

  const handleClick = (index) => {
    updateValues(index)

    const randomChar = getRandomChar();
    setLetter(randomChar);
  };



  return (
    <div>
      <div class="grid">
        <div class="box" onClick={() => handleClick(0)}><h1>{letter[0]}</h1></div>
        <div class="box" onClick={() => handleClick(1)}><h1>{letter[1]}</h1></div>
        <div class="box" onClick={() => handleClick(2)}><h1>{letter[2]}</h1></div>
        <div class="box" onClick={() => handleClick(3)}><h1>{letter[3]}</h1></div>
        <div class="box" onClick={() => handleClick(4)}><h1>{letter[4]}</h1></div>
        <div class="box" onClick={() => handleClick(5)}><h1>{letter[5]}</h1></div>
        <div class="box" onClick={() => handleClick(6)}><h1>{letter[6]}</h1></div>
        <div class="box" onClick={() => handleClick(7)}><h1>{letter[7]}</h1></div>
        <div class="box" onClick={() => handleClick(8)}><h1>{letter[8]}</h1></div>
        <div class="box" onClick={() => handleClick(9)}><h1>{letter[9]}</h1></div>
        <div class="box" onClick={() => handleClick(10)}><h1>{letter[10]}</h1></div>
        <div class="box" onClick={() => handleClick(11)}><h1>{letter[11]}</h1></div>
        <div class="box" onClick={() => handleClick(12)}><h1>{letter[12]}</h1></div>
        <div class="box" onClick={() => handleClick(13)}><h1>{letter[13]}</h1></div>
        <div class="box" onClick={() => handleClick(14)}><h1>{letter[14]}</h1></div>
        <div class="box" onClick={() => handleClick(15)}><h1>{letter[15]}</h1></div>
        <div class="box" onClick={() => handleClick(16)}><h1>{letter[16]}</h1></div>
        <div class="box" onClick={() => handleClick(17)}><h1>{letter[17]}</h1></div>
        <div class="box" onClick={() => handleClick(18)}><h1>{letter[18]}</h1></div>
        <div class="box" onClick={() => handleClick(19)}><h1>{letter[19]}</h1></div>
        <div class="box" onClick={() => handleClick(20)}><h1>{letter[20]}</h1></div>
        <div class="box" onClick={() => handleClick(21)}><h1>{letter[21]}</h1></div>
        <div class="box" onClick={() => handleClick(22)}><h1>{letter[22]}</h1></div>
        <div class="box" onClick={() => handleClick(23)}><h1>{letter[23]}</h1></div>
        <div class="box" onClick={() => handleClick(24)}><h1>{letter[24]}</h1></div>
      </div>
      <div>
        <h1 class="score">{hits}</h1>
      </div>
      <div>
        <h1 class="timer">{useEffect(() => {onStart()}, [])}</h1>
        {timer < 15 && <h1 class="timer">{timer}</h1>}
        {/* Move next */}
      </div>
    </div>
  )
}

export default Games1
