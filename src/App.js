import './style.css';
import React, {useState} from 'react';
import Nav from './components/Nav';
import State from './components/State';

function App() {

  // Initializing state for score.
  let [score, setScore] = useState(0)
  
  // This function will updates the score.
  const updateScore = () => {
      setScore(score + 1)
  }

  return (
    <div className="App">
      <Nav Score={score} />
      <State UpdateScore={updateScore} />
    </div>
  );
}

export default App;
