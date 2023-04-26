import { useEffect, useState } from "react"
import { CardBasicInfo } from "../card-displays/card-basic-info"
import "./searchResults.css"
import { NoSearchResults } from "./NoSearchResults"
import { AnErrorOccurred } from "./AnErrorOccurred"

export function SearchResults({ cardNameSearch, loggedInFavorites, setLoggedInFavorites }) {
    //state for returned cards
    const [searchResults, setSearchResults] = useState({})
    //state for response status to put up the right information when there's an error
    const [responseStatus, setStatus] = useState(null)


    useEffect((() => {
        //Every time the search value changes (when they hit enter or search with the button)
        //We want to put the loading card up, or a loading panel later.
        setSearchResults({cards: [
            {
                name: "Loading",
                imageUrl: "/createcard.jpg",
                setName: "Loading..."
            }
        ]}
        )

        //Reset response status
        setStatus(null)

        if(cardNameSearch.length !== 0){
            fetch(`https://api.magicthegathering.io/v1/cards?name=${cardNameSearch}&pageSize=20`)
            .then((response) => {
                //check if response is ok
                if(response.ok){
                    return response.json().then(returnObject => setSearchResults(returnObject))
                }
                //Show the error component if not
                else{
                    setStatus("Error Occurred")
                }
            })
            .catch(() => setStatus("Error Occurred"))
        }
        

    }), [cardNameSearch])

    return <>
        <h2 id="searchResultsH2">Search Results</h2>
        <div id="resultsPanel">
        {   searchResults?.cards?.length > 0 && responseStatus === null?
            searchResults.cards.map(card => <CardBasicInfo loggedInFavorites={loggedInFavorites}
                setLoggedInFavorites={setLoggedInFavorites}
                cardObject={card}
                key={`simple-card--${card.id}`}/>)
            : 
                searchResults?.cards?.length === 0 && responseStatus === null ?
                <NoSearchResults/>
            : 
                <AnErrorOccurred/>
        }
        </div>
    </>
}