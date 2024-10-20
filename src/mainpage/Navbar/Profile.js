import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.css";
import "./Profile.css";


function Profile () {

    const[menuState, setMenuState] = useState(false);
    const[logoState, setLogoState] = useState(false);

    const handleLogoState = () => {
        setLogoState(!logoState);

    }

    const showOptions = () => {

        handleLogoState();

        setMenuState(!menuState);
        console.log(!menuState)
        
    }

    const menu = <div className='options-menu'>

                    <Link to="/sign-up" className='menu-text hover-effect'>Sign up</Link>
                    <Link to="/log-in" className='menu-text hover-effect'>Log in</Link>
                                    
                </div>;

    return(<>

    
    {!logoState ?

    <Link onClick={showOptions} className="link-profile hover-effect-navbar" style={{color: "black"}}><i className="bi bi-person" id="profile"/></Link>

    :

    <Link onClick={showOptions} className="link-profile " style={{color: "black"}}><i className="bi bi-person" id="profile"/></Link>

    }   


    {menuState ? menu : null}


    


    
    </>)

}

export default Profile;