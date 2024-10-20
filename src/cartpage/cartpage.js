import { json } from "react-router-dom";
import "./cartpage.css";
import { useState } from "react";

export default function CartPage () {

    const[textState, setTextState] = useState(false);
    const[fruitsState, setFruitsState] = useState(false);

    const fruitList = [
        {id: 1, name: "Peach", stock: 34},
        {id: 2, name: "Strawberry", stock: 24},
        {id: 3, name: "Banana", stock: 18},
        {id: 4, name: "Pineapple", stock: 44},
        {id: 5, name: "Mango", stock: 33},
        
    ];





    const handleAppear = () => {

        if(fruitsState){
        setTextState(false);
        }

        else{
        if(textState){
            alert("Text is already present");
        }
        else{
            setTextState(true);
        }
            }
        }

    
    const handleDisappear = () => {
        if(!textState){
            alert("Test is already absent");
        }
        else{
            setTextState(false);
        }

    }

    const handleFruits = () => {
       
            setTextState(false);
        
        

            if(fruitsState){
                alert("Fruits are already present!");
            }
            else{
                setFruitsState(!fruitsState);
            }
        }
    



    
    return(<>

    <div id="container">


        { textState ?
        <div id="text">
            <h1>Hello everyone</h1>
            <p>Lorem Ipsum anasndodsaodnioasnda</p>
        </div>
            
        :

        null

        }

        {fruitsState ? 
            <div id="fruits">
            <h1>Fruit List</h1>

            <ol>
                {fruitList.map(fruit => <li>{JSON.stringify(fruit)}</li>)}
            </ol>
            
        </div>

        :

        null

        }

        <div id="red-square">
        
        </div>

        <div id="buttons">
        <button id="appearButton" className="button" onClick={handleAppear}>Make text appear!</button>
        <button id="disappearButton" className="button" onClick={handleDisappear}>Make text disappear!</button>
        <button id="fruitsButton" className="button" onClick={handleFruits}>Make fruits appear!</button>
        </div>

    </div>

 
    </>)

}
