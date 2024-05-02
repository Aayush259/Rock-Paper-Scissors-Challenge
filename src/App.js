import './style.css';
import Nav from './components/Nav.js';
import State from './components/State.js';

function App() {
  
  // Current score which is being dispayed on the top
  let currentScore = 0;

  return (
    <div className="App">
      <Nav score={currentScore} />
      <State />
    </div>
  );
}

export default App;
