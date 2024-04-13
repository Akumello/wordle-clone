import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import GameBoard from '../GameBoard/GameBoard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('in progress');

  const submitGuess = (guess) => {
    if (guesses.length == NUM_OF_GUESSES_ALLOWED)
      return;

    if (guesses.length == NUM_OF_GUESSES_ALLOWED - 1 && gameStatus === 'in progress')
      setGameStatus('loss');

    const nextGuesses = [...guesses, guess];

    setGuess(guess);
    setGuesses(nextGuesses);
  }
  return (<>
      <GameBoard guesses={guesses} answer={answer} gameStatus={gameStatus} setGameStatus={setGameStatus}/>
      <GuessInput submitGuess={submitGuess} gameStatus={gameStatus} />
      <GuessResult guesses={guesses} answer={answer} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
