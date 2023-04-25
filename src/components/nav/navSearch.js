import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function NavSearch({ setCardNameSearch }) {
    const [searchBarInput, setSearchBarInput] = useState("")
    const navigate = useNavigate();

    function handleSubmit(){
        setCardNameSearch(searchBarInput);
        navigate("/browse")
    }

    return <div id="navSearch">
        <input id="nav--searchbar"
            type="text"
            placeholder="Looking for a card?"
            onChange={(e) => {
                        setSearchBarInput(e.target.value)
                    }
                }
            onKeyDown={(e) => {
                if(e.code === "Enter"){
                    handleSubmit()
                }
            } }
        >
        </input>
        <button id="navSearch--Button" type="button" onClick={handleSubmit}>Go!</button>
    </div>
}