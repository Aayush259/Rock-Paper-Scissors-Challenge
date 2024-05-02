import React from 'react';
import {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

function State() {

    // Initializing state for step 1 and step2Optin to null.
    const [gameState, setGameState] = useState({
        step: 1,
        step2Option: null,
    });

    // This function updates the step.
    const handleNextStep = (option) => {
        setGameState({
            step: 2,
            step2Option: option,
        });
    }

    return (
        <>
            {gameState.step === 1 ? <Step1 onNextStep={handleNextStep} /> : null}
            {gameState.step === 2 ? <Step2 option={gameState.step2Option} /> : null}
        </>
    );

}

export default State;