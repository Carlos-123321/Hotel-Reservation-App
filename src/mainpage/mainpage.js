import Navbar from "./Navbar/Navbar";
import Cards from "./Card/Cards";
import Footer from "./Footer/Footer";
import mainpageStyles from './mainpage.module.css';

function Mainpage () {

    return(
    
    <>
    <div className={mainpageStyles.mainpage}>
    <Navbar/>
    <Cards/>
    <Cards/>
    <Footer/>
    </div>
    </>

)

}

export default Mainpage;