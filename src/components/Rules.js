import rulesImage from '../images/image-rules.svg';

function Rules(props) {
    return (
        <>
        <div id='rules-container' className='flex'>
            <header id='rules-header' className='flex'>
                <h2>Rules</h2>
                <button id='close-btn' className='flex' onClick={props.CloseRules}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </button>
            </header>
            <div id='rules-image'>
                <img src={rulesImage} alt='Game Rules' />
            </div>
        </div>
        </>
    )
}

export default Rules;