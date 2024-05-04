import logo from '../images/logo.svg';

function Nav(props) {

    return (
        <>
            <header id="header" className="flex">
                <img src={logo} alt="Game logo" />

                {/* Score element */}
                <div id="score" className='flex'>
                    <p>score</p>
                    <p>{props.Score}</p>
                </div>
            </header>
        </>
    )
}

export default Nav;