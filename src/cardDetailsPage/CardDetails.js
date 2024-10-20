import Cards from "../mainpage/Card/Cards";
import { useParams } from 'react-router-dom';
import Navbar from "../mainpage/Navbar/Navbar";
import "./CardDetails.css";


function CardDetails () {

    //const { id } = useParams();
    //const card = cards.find(card => card.id === parseInt(id));

    return(<>
    
    <div id="card-details-page">

    <Navbar/>

    
    {/*<h1 id="title">{cards[0].title}</h1>*/}
    


    </div>
       
    </>)

}

export default CardDetails;