import './style.css';
import Nav from './components/Nav.js';

function App() {
  
  let currentScore = 0;

  return (
    <div className="App">
      <Nav score={currentScore} />
    </div>
  );
}

export default App;
