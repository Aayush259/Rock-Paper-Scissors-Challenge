import './style.css';
import Nav from './components/Nav.js';
import Step1 from './components/Step1.js';

function App() {
  
  let currentScore = 0;

  return (
    <div className="App">
      <Nav score={currentScore} />
      <Step1 />
    </div>
  );
}

export default App;
