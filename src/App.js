import './style.css';
import React, {useState} from 'react';
import Nav from './components/Nav';

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
    </div>
  );
}

export default App;
