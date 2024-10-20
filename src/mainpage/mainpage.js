import Navbar from "./Navbar/Navbar";
import Cards from "./Card/Cards";
import Footer from "./Footer/Footer";

function Mainpage () {

    return(
    
    <>
    <div id="mainpage" style={{backgroundColor: "rgb(56, 56, 56)"}}>
    <Navbar/>
    <Cards/>
    <Cards/>
    <Footer/>
    </div>
    </>

)

}

export default Mainpage;