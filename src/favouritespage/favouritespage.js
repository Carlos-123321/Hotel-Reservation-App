import { useEffect, useState } from "react";
import "./favouritespage.css";

function FavouritesPage() {
    const [elements, setElements] = useState([]);

    const handleKeyPressedEvent = (event) => {
        if (event.key === "Enter") {
            const userInput = parseInt(event.target.value, 10);
            const newElements = [];

            for (let i = 0; i < userInput; i++) {
                newElements.push(<h1 key={i}>Hello my name is</h1>);
            }

            setElements((prevElements) => [...prevElements, ...newElements]);
           
        }
    };

 

    return (
        <div id="favourites-page-container">
            <input placeholder="Enter a number" onKeyDown={handleKeyPressedEvent} />
            {elements}
        </div>
    );
}

export default FavouritesPage;
