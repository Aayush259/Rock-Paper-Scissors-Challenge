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

// This function checks for a winner and return the winner if any, else returns draw.
const CheckWinner = (userChoice, computerChoice) => {

    let isUserWin = false;
    let isDraw = false;

    // Checking whether the user wins or its a tie.
    if (userChoice === computerChoice) {
        isDraw = true;
    } else if ((userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissor' && computerChoice === 'paper') || (userChoice === 'rock' && computerChoice === 'scissor')) {
        isUserWin = true;
    }

    // Returning the string for winner or draw.
    if (isUserWin) {
        return `User`;
    } else if (isDraw) {
        return `Draw`;
    } else {
        return `Computer`;
    }
}

function State(props) {
    
    // This function updates the step based on the selected userChoice.
    const updateStep = (stepNumber, selectedOption) => {

        // If the stepNumber is 2, then set Step2.
        if (stepNumber === 2){

            // Getting random computer choice.
            let computerChoice = GetComputerChoice();

            // Getting winner.
            let winner = CheckWinner(selectedOption, computerChoice)

            let Step2Component = <Step2 UserChoice={selectedOption} CompChoice={computerChoice} />
            
            // Setting step and updating score.
            setStep(Step2Component);
            if (winner === `User`) {
                props.UpdateScore();
            }
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