import {useState} from "react";
const CakeForm = ({makeCake}) =>{
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState(0);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        let ingredientsArray = ingredients.split(",");

        const newCake = {
            cakeName,
            ingredients: ingredientsArray,
            rating
        }

        makeCake(newCake);
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
            required 
            onChange={(evt) => setCakeName(evt.target.value)} />
        <input 
            type="text"
            name="ingredients" 
            placeholder="List ingredients" 
            value={ingredients}
            required 
            onChange={(evt) => setIngredients(evt.target.value)} />
        <input 
            type="number" 
            name="rating" 
            placeholder="Rate your cake" 
            value={rating}
            min={0} max={5} 
            onChange={(evt) => setRating(evt.target.value)} />
        <input 
            type="submit"
            value="Make your cake!" />
        </form>
    </>
 );

}

export default CakeForm;