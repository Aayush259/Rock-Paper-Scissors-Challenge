import React from 'react';
import {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

function State() {

    const [step, setStep] = useState(1);
    const [step2Option, setStep2Option] = useState(null);

    const handleNextStep = (option) => {
        setStep2Option(option);
        setStep(2);
    }

    return (
        <>
            {step === 1 ? <Step1 onNextStep={handleNextStep} /> : null}
            {step === 2 ? <Step2 option={step2Option} /> : null}
        </>
    );

}

export default State;