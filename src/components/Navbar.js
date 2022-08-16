import logo from '../images/logo.svg';

const Navbar = ({ displayLinks }) => {
    const clear = () => {
        localStorage.clear()
    }
    return (
        <nav>
            <div id="nav-title">
                <img id="nav-title-image" src={logo} alt="logo" />
                <div id="nav-title-text">Windfall</div>
            </div>
            {displayLinks ? (
                <div id='nav-links'>
                    <a className='nav-link' id='physical' href='/bruh'>Daily Habits</a>
                    <div className='nav-link' id='mental'>Mental</div>
                    <div className='nav-link' id='spiritual'>Spiritual</div>
                    <div className='nav-link' id='social'>Social</div>
                    <a className='nav-link' id='logout' href='/' onClick={clear} >Log Out</a>
                </div>
            ) : (
            <></>
            )}
        </nav>
    )
}

export default Navbar;