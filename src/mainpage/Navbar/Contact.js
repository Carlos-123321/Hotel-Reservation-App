import useToggleInformation from '../../customHooks/contactInfo/useToggleInformation';
import ContactElement from './ContactElement';
import navbarStyles from './Navbar.module.css';

function Contact() {

  const { showInformation, hideInformation, toggleInformation } = useToggleInformation();

  return(
    <>

      <a className={`${navbarStyles['contact']} ${navbarStyles['hover-effect-navbar']}`} onClick={toggleInformation}>Contact Us</a>
    
      {showInformation && (
      
      <ContactElement hideInformation={hideInformation} toggleInformation={toggleInformation}/>

      )}
    </>
  )
}

export default Contact;