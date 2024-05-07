import React from 'react';
import paper from '../images/icon-paper.svg';
import scissor from '../images/icon-scissor.svg';
import rock from '../images/icon-rock.svg';

function Step2(props) {

    // Declaring two variables for reference to img source.
    let imgSrc;
    let compImgSrc;

    let winner = props.Winner;
    let userActive = '';
    let compActive = '';

    if(winner === 'User') {
        userActive = 'User';
    } else if(winner === 'Computer') {
        compActive = 'Computer';
    }

    // Setting image according to user choice.
    if (props.UserChoice === 'paper') {
        imgSrc = paper;
        userActive += '-paper';
    } else if (props.UserChoice === 'scissor') {
        imgSrc = scissor;
        userActive += '-scissor';
    } else if (props.UserChoice === 'rock') {
        imgSrc = rock;
        userActive += '-rock';
    }

    // Setting image according to computer choice.
    if (props.CompChoice === 'paper') {
        compImgSrc = paper;
        compActive += '-paper';
    } else if (props.CompChoice === 'scissor') {
        compImgSrc = scissor;
        compActive += '-scissor';
    } else if (props.CompChoice === 'rock') {
        compImgSrc = rock;
        compActive += '-rock';
    }

    return (
        <>
            <div className='step2Container flex'>
            
                <div id='user-choice' className='flex'>
                    <p>You Picked</p>
                    <button className={`${userActive} option-button flex`} id={props.UserChoice}>
                        <span className='flex'>
                            <img src={imgSrc} alt='Your choice' />
                        </span>
                    </button>
                </div>

                <div id='computer-choice' className='flex'>
                    <p>The House Picked</p>
                    <button className={`${compActive} option-button flex`} id={props.CompChoice}>
                        <span className='flex'>
                            <img src={compImgSrc} alt='Computer choice' />
                        </span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Step2;