import { Link } from 'react-router-dom';
import { useState } from 'react';
import profileStyles from "./Profile.module.css";
import navbarStyles from "./Navbar.module.css";

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

    const menu = 
                <div className='profile'>
                    <div className={profileStyles['options-menu']}>
                        <div className={profileStyles['signUp-container']}>
                            <Link to="/sign-up" className={`${profileStyles['menu-text']} 
                            ${profileStyles['hover-effect']}`}>Sign up</Link>
                        </div>
                        <div className={profileStyles['logIn-container']}>
                            <Link to="/log-in" className={`${profileStyles['menu-text']} 
                            ${profileStyles['hover-effect']}`}>Log in</Link>  
                        </div>                        
                    </div>
                </div>
                ;

    return(<>

    {!logoState ?
                      
        <Link onClick={showOptions} className={`${navbarStyles['link-profile']} 
        ${navbarStyles['hover-effect-navbar']}`}>
            <i className={`bi bi-person ${profileStyles['profile']} `}/>
        </Link>
   
    :

    <>
        <Link onClick={showOptions} className={`${navbarStyles['link-profile']}`}>
            <i className={`bi bi-person ${profileStyles['profile']} `}/>
        </Link>

        {menuState ? menu : null}
    </>

    }   

        
    </>)
}

export default Profile;