import React from 'react';
import paper from '../images/icon-paper.svg';
import scissor from '../images/icon-scissor.svg';
import rock from '../images/icon-rock.svg';

function Step2(props) {

    let imgSrc;

    if (props.UserChoice === 'paper') {
        imgSrc = paper;
    } else if (props.UserChoice === 'scissor') {
        imgSrc = scissor;
    } else if (props.UserChoice === 'rock') {
        imgSrc = rock;
    }

    return (
        <>
            <div className="step2Container flex">
            
                <div id="user-choice">
                    <p>You Picked</p>
                    <button className="option-button flex" id={props.UserChoice}>
                        <span className='flex'>
                            <img src={imgSrc} alt="Your choice" />
                        </span>
                    </button>
                </div>

                <div id="computer-choice">
                    <p>The House Picked</p>
                </div>

            </div>
        </>
    )
}

export default Step2;