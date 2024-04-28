import logo from '../images/logo.svg';

function Nav(props) {
    return (
        <>
            <header id="header" className='flex'>
                <img src={logo} alt="header text" />
                <div id="score" className='flex'>
                    <p>score</p>
                    <p>{props.score}</p>
                </div>
            </header>
        </>
    )
}

export default Nav;