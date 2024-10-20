import "./Navbar.css";
import Contact from "./Contact";
import { Link } from 'react-router-dom';
import Profile from "./Profile";

function Navbar () {

return(

  <>

    <div id="navbar-container">

      <Link to="/" className="unstyled-link">
        <video id="logo-video" autoPlay loop muted poster={`${process.env.PUBLIC_URL}/Logo.png`}>
          <source src={`${process.env.PUBLIC_URL}/NN.mp4`} type="video/mp4" />
          Video not supported
        </video>
      </Link>
      
      <div id="logo-text">
        <p>NOBLE NESTS</p>
      </div>

      <input id="inputBox" className="searchBar" type="text" placeholder="Search..."/>

      <Contact/>
      
      <Link to="/favourites" className="link-favourites hover-effect-navbar"><i className="bi bi-heart"/></Link>
      <Link to="/cart" className="link-cart hover-effect-navbar"><i className="bi bi-bag"/></Link>

      <Profile/>

  
      
    </div>

    <div id="navbar-margin"/> 
</>)

}

export default Navbar;

