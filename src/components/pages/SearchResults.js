import { useEffect, useState } from "react"
import { CardBasicInfo } from "../card-displays/card-basic-info"
import "./searchResults.css"
import { NoSearchResults } from "./NoSearchResults"
import { AnErrorOccurred } from "./AnErrorOccurred"

export function SearchResults({ cardNameSearch, loggedInFavorites, setLoggedInFavorites, setCardNameSearch }) {
    //state for returned cards
    const [searchResults, setSearchResults] = useState({})
    //state for response status to put up the right information when there's an error
    const [responseStatus, setStatus] = useState(null)


    useEffect((() => {
        //Every time the search value changes (when they hit enter or search with the button)
        //We want to put the loading card up, or a loading panel later.
        setSearchResults({
            cards: [
                {
                    name: "Loading",
                    imageUrl: "/createcard.jpg",
                    setName: "Loading...",
                    id: "LoadingCardLOL"
                }
            ]
        }
        )

        //Reset response status
        setStatus(null)

        if (cardNameSearch.length !== 0) {
            if (cardNameSearch !== "Pot of Greed" && cardNameSearch !== "Cool S") {
                fetch(`https://api.magicthegathering.io/v1/cards?name=${cardNameSearch}&pageSize=20`)
                    .then((response) => {
                        //check if response is ok
                        if (response.ok) {
                            return response.json().then(returnObject => setSearchResults(returnObject))
                        }
                        //Show the error component if not
                        else {
                            setStatus("Error Occurred")
                        }
                    })
                    .catch(() => setStatus("Error Occurred"))
            }
            if(cardNameSearch === "Pot of Greed"){
                const PotOfGreed = {
                    cards: [
                        {
                            name: "Pot of Greed",
                            imageUrl: "https://m.media-amazon.com/images/I/515zKdpiGoL._AC_UF894,1000_QL80_.jpg",
                            setName: "Legends of Blue Eyes White Dragon",
                            id: "PotOfGreed"
                        }
                    ]
                }
                setSearchResults(PotOfGreed)
            }
            if(cardNameSearch === "Cool S"){
                const CoolS = {
                    cards: [
                        {
                            name: "Cool S",
                            imageUrl: "/coolS.png",
                            setName: "School Desk Adventures",
                            id: "CoolS"
                        }
                    ]
                }
                setSearchResults(CoolS)
            }
        }


    }), [cardNameSearch])

    return <div id="results">
        <h2 id="searchResultsH2">Search Results</h2>
        <div id="resultsPanel">
            {searchResults?.cards?.length > 0 && responseStatus === null ?
                searchResults.cards.map(card => <div className="individualResult" key={`simple-card--${card.id}` + `--${searchResults.cards.indexOf(card)}`}>
                    <CardBasicInfo loggedInFavorites={loggedInFavorites}
                        setLoggedInFavorites={setLoggedInFavorites}
                        cardObject={card}
                    />
                </div>)
                :
                searchResults?.cards?.length === 0 && responseStatus === null ?
                    <NoSearchResults />
                    :
                    <AnErrorOccurred onCardSearch={true} setCardNameSearch={setCardNameSearch} />
            }
        </div>
    </div>
}