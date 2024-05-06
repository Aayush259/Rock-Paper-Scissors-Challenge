import React, {useState} from 'react';
import paper from '../images/icon-paper.svg';
import scissor from '../images/icon-scissor.svg';
import rock from '../images/icon-rock.svg';
import Step2 from './Step2';

// This function randomly returns one of the three options ['paper', 'scissor', or 'rock'].
const GetComputerChoice = () => {
    // Array of Options.
    const Options = ['paper', 'scissor', 'rock'];

    return Options[Math.floor(Math.random() * 3)];
}

function State(props) {
    
    // This function updates the step based on the selected userChoice.
    const updateStep = (stepNumber, selectedOption) => {

        // If the stepNumber is 2, then set Step2.
        if (stepNumber === 2){

            // Getting random computer choice.
            let computerChoice = GetComputerChoice();

            let Step2Component = <Step2 UserChoice={selectedOption} CompChoice={computerChoice} />
            
            setStep(Step2Component)
        }
    }

    // Step1 JSX.
    const Step1 = <>
        <div className="option-container">

            <button className="option-button flex" id='paper' onClick={() => {
                updateStep(2, 'paper')
            }}>
                <span className='flex'>
                    <img src={paper} alt="Paper option" />
                </span>
            </button>

            <button className="option-button flex" id='scissor' onClick={() => {
                updateStep(2, 'scissor')
            }}>
                <span className="flex">
                    <img src={scissor} alt="Scissor" />
                </span>
            </button>

            <button className="option-button flex" id='rock' onClick={() => {
                updateStep(2, 'rock')
            }}>
                <span className="flex">
                    <img src={rock} alt="Rock option" />
                </span>
            </button>
        </div>
    </>;

    // Initializing state for currentStep.
    let [currentStep, setStep] = useState(Step1)

    return currentStep;
}

export default State;