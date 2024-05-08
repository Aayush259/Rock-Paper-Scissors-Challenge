function Message(props) {

    return (
        <>
        <div id='win-lose-msg' className='flex'>
            <p>{props.Message}</p>
            <button id='play-again-btn' onClick={() => {
                props.UpdateStep(1);
            }}>Play Again</button>
        </div>
        </>
    )
}

export default Message;