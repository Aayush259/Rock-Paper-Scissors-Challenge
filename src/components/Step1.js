import iconRock from '../images/icon-rock.svg';
import iconPaper from '../images/icon-paper.svg';
import iconScissor from '../images/icon-scissors.svg';

function Step1({onNextStep}) {
    return (
        <>
            <div className="option-container">
                <button onClick={() => {onNextStep('paper')}} className='option-button flex' id="paper-option">
                    <span className='flex'>
                        <img src={iconPaper} alt="Paper" className='op-img' />
                    </span>
                </button>

                <button onClick={() => {onNextStep('scissor')}}  id="scissor-option" className='option-button flex'>
                    <span className='flex'>
                        <img src={iconScissor} alt="Scissor" className='op-img' />
                    </span>
                </button>

                <button onClick={() => {onNextStep('rock')}}  id="rock-option" className='option-button flex'>
                    <span className='flex'>
                        <img src={iconRock} alt="Rock" className='op-img' />
                    </span>
                </button>
            </div>
        </>
    )
}

export default Step1;