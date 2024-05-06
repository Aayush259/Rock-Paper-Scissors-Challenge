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
    <div className="App flex">
      <Nav Score={score} />
      <State UpdateScore={updateScore} />
      <button id='rules'>Rules</button>
      <div id="warning">
        <p>This app is supposed to be run on device whose width is more than 230px</p>
      </div>
    </div>
  );
}

export default App;
