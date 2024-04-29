import './style.css';
import Nav from './components/Nav.js';
import State from './components/State.js';

function App() {
  
  let currentScore = 0;

  return (
    <div className="App">
      <Nav score={currentScore} />
      <State />
    </div>
  );
}

export default App;
