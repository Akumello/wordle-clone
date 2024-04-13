import React from 'react';

function GuessResult({guesses, answer, gameStatus}) {

  const getGameOverElem = () => {
    let gameOverElem = [];

    switch(gameStatus){
      case 'in progress':
        return;
      case 'win':
        gameOverElem.push(
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in{' '}
              <strong>{guesses.length} guess{guesses.length>1 && 'es'}</strong>.
            </p>
          </div>
        );
        break;
      case 'loss':
        gameOverElem.push(
          <div class="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
        );
        break;
    }

    return gameOverElem;
  }

  return (
    <div className='guess-results'>
      { gameStatus === 'in progress' &&
        guesses.map(
          (guess, i) => {
            return (<p className='guess' key={i}>{guess}</p>);
          }
        )
      }

      {getGameOverElem()}
    </div>
  );
}

export default GuessResult;
