import iconRock from '../images/icon-rock.svg';
import iconPaper from '../images/icon-paper.svg';
import iconScissor from '../images/icon-scissors.svg';

function Step2(props) {

    console.log(props.option)

    let imgSrc;
    let buttonId;

    if (props.option === 'paper') {
        imgSrc = iconPaper;
        buttonId = 'paper-option'
    }
    else if (props.option === 'rock') {
        imgSrc = iconRock;
        buttonId = 'rock-option';
    }
    else if (props.option === 'scissor') {
        imgSrc = iconScissor;
        buttonId = 'scissor-option';
    }

    return (
        <>
        <div className="step2Container flex">
            <div id="user-choice" className='flex'>
                <p>You Picked</p>
                <button className='option-button flex' id={buttonId} disabled>
                    <span className='flex'>
                        <img src={imgSrc} alt="Selected option" className='op-img' />
                    </span>
                </button>
            </div>
            <div id="computer-choice" className='flex'>
                <p>The House Picked</p>
                <button className='option-button flex' id={buttonId} disabled>
                    <span className='flex'>
                        <img src={imgSrc} alt="Selected option" className='op-img' />
                    </span>
                </button>
            </div>
        </div>
        </>
    );

}

export default Step2;