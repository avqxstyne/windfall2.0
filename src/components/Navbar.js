import logo from '../images/logo.svg';

const Navbar = ({ displayLinks }) => {
    
    return (
        <nav>
            <div id="nav-title">
                <img id="nav-title-image" src={logo} alt="logo" />
                <div id="nav-title-text">Windfall</div>
            </div>
            {displayLinks ? (
                <div id='nav-links'>
                    <div className='nav-link' id='physical'>Physical</div>
                    <div className='nav-link' id='mental'>Mental</div>
                    <div className='nav-link' id='spiritual'>Spiritual</div>
                    <div className='nav-link' id='social'>Social</div>
                </div>
            ) : (
                <div></div>
            )}
        </nav>
    )
}

export default Navbar;
/* 
<div id='nav-links'>
                
            </div> */