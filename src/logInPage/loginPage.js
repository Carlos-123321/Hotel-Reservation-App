import { useState } from "react";
import Navbar from "../mainpage/Navbar/Navbar";
import Footer from "../mainpage/Footer/Footer";
import { Link } from "react-router-dom";
import "./loginPage.css";

function LoginPage () {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showForgotPassword, setForgotPassword] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [placeholder, setPlaceholder] = useState("Enter your email here");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const showForgotPasswordMode = () => {
        setForgotPassword(true);
        setIsFadingOut(false);
    };

    const hideForgotPasswordMode = () => {
        setIsFadingOut(true);
        setTimeout(() => {
            setForgotPassword(false);
            setIsFadingOut(false);
        }, 1000);
    };


    const handleFocus = () => {
        setPlaceholder("");
    };

    const handleBlur = () => {
        setPlaceholder("Enter your email here");
    };


return(<>
    <div className="login-container">
        <Navbar />
            <div id="login-container-child">

                {showForgotPassword && (<>

                    <div className={`dimmed-overlay ${isFadingOut ? 'fade-out-dimmed-overlay' : 'fade-in-dimmed-overlay'}`} onClick={hideForgotPasswordMode}/>

                        <div id="showForgotPasswordMode" className={isFadingOut ? 'fade-out-forgot-password' : 'fade-in-forgot-password'}>
                            <i className="bi bi-x" style={{ position: "absolute", marginLeft: "750px", cursor: "pointer" }} onClick={hideForgotPasswordMode}/>

                            <div id="forgot-first-row">
                                <h5 className="cu-1" style={{ marginBottom: "30px" }}>Modify your password</h5>
                            </div>

                            <p className="cu-2" style={{ alignSelf: "center", textAlign: "center" }}>
                                In order to reset your password, please provide your email address.<br />
                                We will send you an email shortly. Please contact Customer Service for assistance.
                            </p>

                            <div id="forgot-password-email-row">
                                <p className="email-text" style={{ marginRight: "50px", marginLeft: "100px" }}>Email*</p>
                                <input type="email" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} style={{ border: "none", outline: "none", width: "540px" }}/>
                            </div>

                            <div id="forgot-password-line" />

                        </div>
                    </>
                )}

      
            <div id="rectangle-log-in">

                <div id="title">
                    <Link to="/log-in" className="log-in-button">
                        <h5 id="text-login" className="text-switch" style={{color: "black", backgroundColor: "white"}}>Login</h5>
                    </Link>

                    <Link to="/sign-up" className="sign-up-button">
                        <h5 id="text-sign-up" className="text-switch" style={{color: "white", backgroundColor: "black"}}>Sign Up</h5>
                    </Link>
                    <img src="/NN-White-Logo.jpg" alt="Noble Nests Logo" id="corner-logo"/>
                </div>

                <div id="line"/>

                <p className="email-text">Email*</p>

                <div id="section-email">
                    <input type="email" id="emailInput"/>
                    <i className="bi bi-envelope-fill envelope"/>
                </div>

                <p id="password-text">Password*</p>

                <div id="section-password">
                    <input type={passwordVisible ? 'text' : 'password'} id="passwordInput"/>
                    <i className={`bi ${passwordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'} eye`}
                        onClick={togglePasswordVisibility}/>
                </div>

                <div id="section-1">
                    <input type="checkbox" id="myCheckbox" name="myCheckbox"/>
                    <p id="remember">Remember me</p>
                    <p id="forgot-link" onClick={showForgotPasswordMode}>Forgot your password?</p>
                </div>

                <button id="bt-login">Login</button>

                <div id="section-2">
                    <p id="item-1">Don't have an account?</p>
                    <Link to="/sign-up" style={{textDecoration: "none"}}>
                    <p id="item-2">Sign Up</p>
                    </Link>
                </div>

            </div>
        
            </div>
          <Footer/>
    </div>
</>)

}

export default LoginPage;