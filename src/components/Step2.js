import iconRock from '../images/icon-rock.svg';
import iconPaper from '../images/icon-paper.svg';
import iconScissor from '../images/icon-scissors.svg';

function Step2(props) {

    console.log(props.option)

    const ButtonsIdArray = ['paper-option', 'rock-option', 'scissor-option']

    let imgSrc;
    let buttonId;
    let compImgSrc;
    let compButtonId = ButtonsIdArray[Math.floor(Math.random() * 3)];

    if (props.option === 'paper') {
        imgSrc = iconPaper;
        buttonId = ButtonsIdArray[0];
    }
    else if (props.option === 'rock') {
        imgSrc = iconRock;
        buttonId = ButtonsIdArray[1];
    }
    else if (props.option === 'scissor') {
        imgSrc = iconScissor;
        buttonId = ButtonsIdArray[2];
    }

    if (compButtonId === 'paper-option') {
        compImgSrc = iconPaper;
    } else if (compButtonId === 'rock-option') {
        compImgSrc = iconRock;
    } else if (compButtonId === 'scissor-option') {
        compImgSrc = iconScissor;
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
                <button className='option-button flex' id={compButtonId} disabled>
                    <span className='flex'>
                        <img src={compImgSrc} alt="Selected option" className='op-img' />
                    </span>
                </button>
            </div>
        </div>
        </>
    );

}

export default Step2;