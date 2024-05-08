import './style.css';
import React, {useState} from 'react';
import Nav from './components/Nav';
import State from './components/State';
import Rules from './components/Rules';

function App() {
  
  // Initializing state for score.
  let [score, setScore] = useState(0);

  // Initializing useState for opacity (for main game) and rules.
  let [opacity, setOpacity] = useState(1);
  let [rules, setRules] = useState(<></>);
  
  // This function will updates the score.
  const updateScore = () => {
      setScore(prevScore => prevScore + 1);
  }

  // This function closes the rules pop-up window.
  const closeRules = () => {
    setRules(<></>);
    setOpacity(1);
  }

  // This function decrease the opacity of whole app except the rules and display the rules on screen.
  const ruleBtnHandler = () => {
    setOpacity(0.5);
    setRules(<Rules CloseRules={closeRules} />);
  }

  return (
    <div className='flex' style={{flexDirection: 'column', width: '100vw'}}>
      <div className='App flex' style={{opacity: opacity}}>
        <Nav Score={score} />
        <State UpdateScore={updateScore} />
        <button id='rules' onClick={ruleBtnHandler}>Rules</button>
        <div id='warning'>
          <p>This app is supposed to be run on device whose width is more than 230px</p>
        </div>
      </div>
      {rules}
    </div>
  );
}

export default App;
