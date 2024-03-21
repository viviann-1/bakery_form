import { useState } from "react";
import Cake from "../components/Cake";
import CakeForm from "../components/CakeForm";

const CakeContainer = () => {

    const [cakes, setCakes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
      ]);

    const makeCake = (newCake) => {
        setCakes([...cakes, newCake]);
    }

    const mappedCakes = cakes.map((cake, id) => {
        return <Cake 
                    cake={cake}
                    />
    })

    return(
        <>
            <div className="container">
                {mappedCakes}
            </div>
            <div className="cakeForm">
                <CakeForm makeCake={makeCake}/>
            </div>
            
        </>
    )

}

export default CakeContainer;
