import { useState } from 'react';
import caFlag from './ca.svg';
import useToggleInformation from '../../customHooks/contactInfo/useToggleInformation';
import ContactElement from "../Navbar/ContactElement";
import "./Footer.css";

function Footer () {

const { showInformation, hideInformation, toggleInformation } = useToggleInformation();
const [faqStateSection, setFaqStateSection] = useState(false);

const toggleFaqSection = () => {
    setFaqStateSection(prevState => !prevState);
  };

    
return(
<>

    {showInformation && (<ContactElement hideInformation={hideInformation} toggleInformation={toggleInformation}/>)}

    <div id="footer-container">
    
        <div id="first-section">

            <div id="first-column" className="columns">

                <p >Help</p>
                <p onClick={toggleInformation}>Contact Us</p>
                <p onClick={toggleFaqSection}>FAQ</p>
                <p >Locations</p>

            </div>

            <div id="second-column" className="columns">

            <p >Services</p>
            <p >Special Requests</p>
            <p >Refunds</p>
            <p >File a complaint</p>
            <p >Download our application</p>
                
            </div>

            <div id="third-column" className="columns">

            <p >About Noble Nests</p>
            <p >Jobs</p>
            <p >New Arrivals</p>
            <p >Noble Nests Foundation</p>
                
            </div>

            <div id="fourth-column" className="columns">

            <p >Subscribe to the newsletter</p>
            <p >Subscribe to Noble Nests's emails and receive the latest news from the House</p>
            <p >Follow us</p>
                
            </div>


        </div>

        <div id="faq-section" className={faqStateSection ? 'expanded' : ''}>
          <div id="faq-section-content">
            <h2>FAQ Section</h2>
            <p>This is the content of the FAQ section.</p>
          </div>
        </div>

        <div id="second-section">

            <div id="first-row">

                
                <div id="country">
                <p style={{margin: "0px"}}>Country of Delivery :&nbsp;
                <img src={caFlag} width="16px" height="12px" alt="Canada Flag" loading="lazy"/>
                &nbsp;Canada
                </p>
                
                </div>

                <div id="right-side-footer">
                <p>Site Map</p>
                <p>Legal Notice</p>
                <p>Privacy</p>
                <p>Supply Chain Law</p>
                <p>Cookies</p>
                </div>

            </div>

            <img src="/NN-White-Logo.jpg" alt="Noble Nests Logo" id="bottom-logo"/>

        </div>

    </div>
    
</>);
}

export default Footer;