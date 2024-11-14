import Contact from "./Contact";
import Profile from "./Profile";
import { Link } from 'react-router-dom';
import navbarStyles from './Navbar.module.css';

function Navbar () {

return(

  <>
    <div className={navbarStyles['navbar-container']}>

      <Link to="/" className={navbarStyles['unstyled-link']}>
        <video className={navbarStyles['logo-video']} 
        autoPlay loop muted poster={`${process.env.PUBLIC_URL}/Logo.png`}>
          <source src={`${process.env.PUBLIC_URL}/NN.mp4`} type="video/mp4" />
          Video not supported
        </video>
      </Link>
      
      

      <input className={`${navbarStyles['searchBar']} ${navbarStyles['input-box']}`} 
      type="text" placeholder="Search..."/>

      <div className={navbarStyles['logo-text']}>
        <p>NOBLE NESTS</p>
      </div>
      
      <Contact/>
      
      <Link to="/favourites" className={`${navbarStyles['link-favourites']} ${navbarStyles['hover-effect-navbar']}`}>
      <i className="bi bi-heart"/>
      </Link>
      
      <Link to="/cart" className={`${navbarStyles['link-cart']} ${navbarStyles['hover-effect-navbar']}`}>
      <i className="bi bi-bag"/>
      </Link>

      <Profile/>

  
    </div>

    <div className={navbarStyles['navbar-margin']}/> 
</>)

}

export default Navbar;

