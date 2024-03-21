const Cake = ({cake}) => {

    const ratingHandler = (rating) => {
        let starRating = ""
        for (let i = 0; i < rating; i++) { 
            starRating += "⭐" 
        } return starRating;
    }

    const starRating = ratingHandler(cake.rating);

    return(
        <div className="cake">
            <h3>{cake.cakeName}</h3>
            <h4>Ingredients:</h4>
            <ul>
                {cake.ingredients.map( ingredient => {
                    return <li>{ingredient}</li>
                })}
            </ul>
            <p>Rating: {starRating}</p>
            
        </div>
    )

}

export default Cake;