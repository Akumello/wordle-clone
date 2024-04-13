import React from 'react';
import {checkGuess} from '../../game-helpers';

function GameRow({guess, answer,  setGameStatus}) {
  const result = checkGuess(guess, answer);

  const buildSpan = () => {
    let correctCount = 0;
    let span = []
    for(let i = 0; i < 5; i++) {
      span.push(<span key={i} className={`cell ${result && result[i].status}`} >{guess && guess[i]}</span>);
      correctCount += result && result[i].status === 'correct' ? 1 : 0; 
    }
    if(correctCount == 5)
      setGameStatus('win');
    
    return span;
  }
//${result && result[{i}] && result[{i}].status}
  return (
    <p className="guess">
      {
        buildSpan()
      }
      {/* <span className={`cell`} >{guess && guess[0]}</span>
      <span className={`cell`} >{guess && guess[1]}</span>
      <span className={`cell`} >{guess && guess[2]}</span>
      <span className={`cell`} >{guess && guess[3]}</span>
      <span className={`cell`} >{guess && guess[4]}</span> */}
    </p>
  );
}

export default GameRow;
