import React from 'react';
import GameRow from '../GameRow/GameRow'

function GameBoard({guesses, answer, setGameStatus, gameStatus}) {
  return (
  <div className="guess-results">
    <GameRow guess={guesses[0]} answer={answer} setGameStatus={setGameStatus}/>
    <GameRow guess={guesses[1]} answer={answer} setGameStatus={setGameStatus}/>
    <GameRow guess={guesses[2]} answer={answer} setGameStatus={setGameStatus}/>
    <GameRow guess={guesses[3]} answer={answer} setGameStatus={setGameStatus}/>
    <GameRow guess={guesses[4]} answer={answer} setGameStatus={setGameStatus}/>
    <GameRow guess={guesses[5]} answer={answer} setGameStatus={setGameStatus}/>
  </div>
);
}

export default GameBoard;
