import useToggleInformation from '../../customHooks/contactInfo/useToggleInformation';
import ContactElement from './ContactElement';
import "./Navbar.css";

function Contact() {

  const { showInformation, hideInformation, toggleInformation } = useToggleInformation();

  return(
    <>

      <a id="contact" className="hover-effect-navbar" onClick={toggleInformation}>Contact Us</a>
    
      {showInformation && (
      
      <ContactElement hideInformation={hideInformation} toggleInformation={toggleInformation}/>

      )}
    </>
  )
}

export default Contact;