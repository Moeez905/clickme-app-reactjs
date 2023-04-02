import React, { useState } from "react";

function Game() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTime(10);
  };

  const endGame = () => {
    setIsPlaying(false);
    alert(`Game over! Your final score is ${score}.`);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementTime = () => {
    setTime(time - 1);
  };

  // This effect runs when the game is playing and time is not zero.
  // It decrements the time every second.
  React.useEffect(() => {
    if (isPlaying && time > 0) {
      const intervalId = setInterval(decrementTime, 1000);
      return () => clearInterval(intervalId);
    } else if (time === 0) {
      endGame();
    }
  }, [isPlaying, time]);

  return (
    <div>
      <h1>Simple Game</h1>
      <p>Score: {score}</p>
      <p>Time: {time}</p>
      {!isPlaying ? (
        <button onClick={startGame}>Start game</button>
      ) : (
        <button onClick={incrementScore}>Click me!</button>
      )}
    </div>
  );
}

export default Game;