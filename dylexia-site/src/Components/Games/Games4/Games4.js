import React, {useState, useEffect} from 'react'
import './Games4.css'



const Games4 = () => {
    const wordBank = [['p', 'b', 'o', 'n', 'e', 'b', 'h'], ['q', 'o', 'u', 'r', 's', 'q', 'h'], ['c', 'o', 'm', 'd', 's', 'd', 'b'], ['f', 'l', 'o', 'a', 'r', 'a', 'u'], ['c', 'o', 'r', 'q', 's', 'q', 'd'], ['p', 'b', 'o', 'n', 'e', 'b', 'h'], ['q', 'o', 'u', 'r', 's', 'q', 'h'], ['c', 'o', 'm', 'd', 's', 'd', 'b'], ['f', 'l', 'o', 'a', 'r', 'a', 'u'], ['c', 'o', 'r', 'q', 's', 'q', 'd'], ['p', 'b', 'o', 'n', 'e', 'b', 'h'], ['q', 'o', 'u', 'r', 's', 'q', 'h'], ['c', 'o', 'm', 'd', 's', 'd', 'b'], ['f', 'l', 'o', 'a', 'r', 'a', 'u'], ['c', 'o', 'r', 'q', 's', 'q', 'd']]
    const letterBank = [['h', 'j', 'd', 't', 'u'], ['b', 'r', 'h', 'g', 'k'], ['j', 'b', 'g', 't', 's'], ['r', 'w', 'u', 'e', 'q'], ['d', 'x', 'a', 'y', 'f'], ['h', 'j', 'd', 't', 'u'], ['b', 'r', 'h', 'g', 'k'], ['j', 'b', 'g', 't', 's'], ['r', 'w', 'u', 'e', 'q'], ['d', 'x', 'a', 'y', 'f'], ['h', 'j', 'd', 't', 'u'], ['b', 'r', 'h', 'g', 'k'], ['j', 'b', 'g', 't', 's'], ['r', 'w', 'u', 'e', 'q'], ['d', 'x', 'a', 'y', 'f']]
    const [word, setWord] = useState(['h', 'e', 'l', 'f', 's', 'e', 'a'])
    const [letters, setLetters] = useState(['b', 'd', 'v', 'a', 'r'])
    const [score, setScore] = useState(0)
    const [index, setIndex] = useState(0)
    const [firstOptions, setOptions] = useState(false)
    const [active, setActive] = useState(false);
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [fifth, setFifth] = useState(false)
    const answerDict = {0: first, 1: second, 2: third, 3: fourth, 4: fifth}
    const [timerId, setTimerId] = useState();
    const [timer, setTimer] = useState(0);
    const [clicks, setClicks] = useState(0)
    
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
    


    const handleClick = (slot) => {
    if (letters[slot] == word[6] && answerDict[word.indexOf(word[5])]){
        setScore(score + 1)
    }
    setClicks(clicks + 1)
    setWord(wordBank[index])
    setLetters(letterBank[index])
    setIndex(index + 1)
    setActive(!active);
    } 

    const openOptions = (firstLetter) => {
        setOptions(true);
        setActive(!active);
        switch (firstLetter){
            case 0:
                setFirst(true);
                break;
            case 1:
                setSecond(true);
                break;
            case 2:
                setThird(true);
                break;
            case 3:
                setFourth(true);
                break;
            case 4:
                setFifth(true);
                break;
        }
    }



  return (
    <div class="container">
      <div class="grid">
        <div class="box" onClick={() => openOptions(0)} style={{ backgroundColor: active ? "#eee" : "white" }}><h1>{word[0]}</h1></div>
        <div class="box" onClick={() => openOptions(1)} style={{ backgroundColor: active ? "#eee" : "white" }}><h1>{word[1]}</h1></div>
        <div class="box" onClick={() => openOptions(2)} style={{ backgroundColor: active ? "#eee" : "white" }}><h1>{word[2]}</h1></div>
        <div class="box" onClick={() => openOptions(3)} style={{ backgroundColor: active ? "#eee" : "white" }}><h1>{word[3]}</h1></div>
        <div class="box" onClick={() => openOptions(4)} style={{ backgroundColor: active ? "#eee" : "white" }}><h1>{word[4]}</h1></div>
      </div>
      <div class="separator"><p></p></div>
        { firstOptions &&
        <div class="grid">
            <div class="box" onClick={() => handleClick(0)}><h1>{letters[0]}</h1></div>
            <div class="box" onClick={() => handleClick(1)}><h1>{letters[1]}</h1></div>
            <div class="box" onClick={() => handleClick(2)}><h1>{letters[2]}</h1></div>
            <div class="box" onClick={() => handleClick(3)}><h1>{letters[3]}</h1></div>
            <div class="box" onClick={() => handleClick(4)}><h1>{letters[4]}</h1></div>
        </div>
        }
      <div>
        <h1>{score}</h1>
      </div>
      <div>
      <h1 class="timer">{useEffect(() => {onStart()}, [])}</h1>
        {timer < 31 && <h1 class="timer">{timer}</h1>}
        {/* Move next */}
      </div>
    </div>
  )
}

export default Games4
