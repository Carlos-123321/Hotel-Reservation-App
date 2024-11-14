import { useState } from "react";
import Navbar from "../mainpage/Navbar/Navbar";
import Footer from "../mainpage/Footer/Footer";
import { Link } from 'react-router-dom';
import "./signUp.css";

function SignUpPage () {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [matchPasswords, setMatchPasswords] = useState(false);

    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
        };

    const handleMatchingPasswords = (e) => {
        if(e.target.value);

    }

    const handleInputFocus = () => {
        console.log("Input is focused");

        {<div id="password-Criteria">This is working!</div>}
    }

    return(<>

    <div id="signUp-page-container">


    <Navbar/>

        <div className="signUp-container">

        <div id="text-image-container">

            <div id="welcome-message">
            
            <p id="welcome">Welcome, Esteemed Guest</p>

            </div> 

            <div id="welcome-text-container">

                <div className="welcome-titles">
                <i className="bi bi-binoculars-fill left-page-logos"/>
                <h5 className="text-container-title">Explore the Extraordinary</h5>
                </div>

                <p className="text-container-text">Unlock access to the world’s most luxurious hotels and exclusive offers<br/>
                                                   available only to our esteemed members. Enjoy bespoke experiences<br/> 
                                                   and unparalleled hospitality in every corner of the globe.
                                            </p>
                
                <div className="welcome-titles">
                <i className="bi bi-star-fill left-page-logos"/>
                <h5 className="text-container-title">Discover the Benefits</h5>
                </div>

                <p className="text-container-text">

                <b className="bold-titles">Exclusive Member Discounts: </b><br/>
                Save more with special rates reserved just for our members.<br/><br/>
                <b className="bold-titles">Personalized Recommendations: </b><br/>
                Get tailored suggestions based on your unique preferences.<br/><br/>
                <b className="bold-titles">Priority Booking: </b><br/>Be the first to secure your stay at high-demand locations.<br/><br/>
                <b className="bold-titles">Loyalty Rewards: </b><br/>Earn points with every booking and redeem them for exclusive perks.<br/><br/>
                <b className="bold-titles">VIP Treatment: </b><br/>Enjoy room upgrades, complimentary amenities, and more.<br/>

                </p>

                <div className="welcome-titles">
                <i className="bi bi-award-fill left-page-logos"/>
                <h5 className="text-container-title">Join an Exclusive Community</h5>
                </div>

                <p className="text-container-text">By joining Noble Nests, you're not just booking a room—you're joining a community<br/>
                                                   of discerning travelers who value luxury, quality, and exclusivity. Network with<br/> 
                                                   like-minded individuals, share your experiences, and enjoy the benefits of being<br/>
                                                   part of a prestigious circle.
                                            </p>
                    
            </div>

            

        </div>
        
        <div id="space"/>

        <div id="right-side-page">
        
        <div id="rectangle-sign-up">

            <div id="title">
                <Link to="/sign-up" className="sign-up-button">
                    <h5 id="text-sign-up" className="text-switch">Sign Up</h5>
                </Link>

                <Link to="/log-in" className="log-in-button">
                    <h5 id="text-login" className="text-switch">Login</h5>
                </Link>

                <img src="/NN-White-Logo.jpg" alt="Noble Nests Logo" id="corner-logo"/>
            </div>

            <div id="line"/>

                

            <p className="p-text">Full Name*</p>

            <div className="inputBoxes-container">
                <input type="text" className="inputBoxes"/>
                <i className="bi bi-envelope-fill envelope"/>
            </div>

            <p className="p-text">Email*</p>

            <div className="inputBoxes-container">
                <input type="email" className="inputBoxes"/>
                <i className="bi bi-envelope-fill envelope"/>
            </div>

            <p className="p-text">Password*</p>

            <div className="inputBoxes-container">
                <input type={passwordVisible ? 'text' : 'password'} className="inputBoxes" onFocus={handleInputFocus}/>

                <i className={`bi ${passwordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'} eye`}
                    onClick={togglePasswordVisibility}/>
            </div>

            <p className="p-text">Confirm Password*</p>

            <div className="inputBoxes-container">
                <input type={confirmPasswordVisible ? 'text' : 'password'} onChange={(e) => handleMatchingPasswords} className="inputBoxes"/>
                <i className={`bi ${confirmPasswordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'} eye`}
                    onClick={toggleConfirmPasswordVisibility}/>
            </div>

            <div id="section-1">
                <input type="checkbox" id="myCheckbox" name="myCheckbox"/>
                <p id="remember">Remember me</p>
                <p id="forgot-link">Forgot your password?</p>
            </div>

            <button id="bt-login">Login</button>

            <div id="section-2">
                <p id="item-1">Already have an account?</p>
                <Link to="/log-in" style={{textDecoration: "none"}}>
                <p id="item-2">Log in</p>
                </Link>
            </div>

        
         
        </div>

        </div>

       

        </div>

              
        </div>

        

        <Footer/>


    
    </>)
}

export default SignUpPage;