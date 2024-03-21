import {useState} from "react";
const SearchForm = ({filterCakes}) => {
    const [searchInput, setSearchInput] = useState("");


const handleSubmit = (evt) => {
    evt.preventDefault();
    filterCakes(searchInput);
}        

return(
        <>
            <h2>Search cake</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="cakeName" 
                    placeholder="Search for cake" 
                    value={searchInput}
                    onChange={(evt) => setSearchInput(evt.target.value)} />
                <input
                    type = "submit"
                    name = "&#128269" />
            </form>
        </>
    )}

export default SearchForm;