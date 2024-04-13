import React from 'react';

function GuessInput({submitGuess, gameStatus}) {
  const [guessInput, setGuessInput] = React.useState('');

  return (
      <form 
        onSubmit={e => {
          e.preventDefault();
          if(gameStatus !== 'in progress')
            return;
          
          submitGuess(e.target.lastChild.value);
          setGuessInput('');
        }} 
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" pattern='[A-Z]{5}' title='Must be exactly 5 letters' value={guessInput} onChange={e => {
          let nextGuess = guessInput;
          if(e.target.value.length <= 5)
            nextGuess = e.target.value.toUpperCase()

          setGuessInput(nextGuess);
        }
        } 
        />
      </form>
  );
}

export default GuessInput;
