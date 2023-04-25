import { useEffect, useState } from "react"
import { CardBasicInfo } from "../card-displays/card-basic-info"
import "./searchResults.css"

export function SearchResults({ cardNameSearch }) {
    const [searchResults, setSearchResults] = useState({cards: [
        {
            name: "Loading",
            imageUrl: "/createcard.jpg",
            setName: "Loading..."
        }
    ]})

    useEffect((() => {
        setSearchResults({cards: [
            {
                name: "Loading",
                imageUrl: "/createcard.jpg",
                setName: "Loading..."
            }
        ]})
        fetch(`https://api.magicthegathering.io/v1/cards?name=${cardNameSearch}&pageSize=20`)
        .then((response) => response.json())
        .then((cardArray) => {
            if(!cardArray.cards){
                setSearchResults(
                    {cards: [
                        {
                            name: "There Was an Error",
                            imageUrl: "/error-card.jpg",
                            setName: "Try again momentarily..."
                        }
                    ]}
                )
                }
            else{setSearchResults(cardArray)}
        }
        )
    }), [cardNameSearch])


    return <>
        <h2 id="searchResultsH2">Search Results</h2>
        <div id="resultsPanel">
        {
            searchResults.cards.map(card => <CardBasicInfo cardObject={card} key={`simple-card--${card.id}`}/>)

        }
        </div>
    </>
}