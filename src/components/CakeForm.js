import {useState} from "react";
const CakeForm = ({makeCake}) =>{
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState(0);
    
const handleSubmit () => {
    
}

 return(
    <>
        <h2> Create a new cake</h2>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="cakeName" 
            placeholder="Insert cake name" 
            value={cakeName} 
            onChange={(evt) => setCakeName(evt.target.value)} />
        <input 
            type="text"
            name="ingredients" 
            placeholder="List ingredients" 
            value={ingredients} 
            onChange={(evt) => setIngredients(evt.target.value)} />
        <input 
            type="number" 
            name="rating" 
            placeholder="Rate your cake" 
            value={rating} 
            onChange={(evt) => setRating(evt.target.value)} />

        </form>


    </>
 );

}