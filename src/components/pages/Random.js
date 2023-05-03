import { useEffect, useState } from "react";
import { CardBasicInfo } from "../card-displays/card-basic-info";
import { AnErrorOccurred } from "./AnErrorOccurred";
import "./random.css"

export function Random({ loggedInFavorites, setLoggedInFavorites }) {
    const [randomCards, setRandomCards] = useState([
        {
            name: "Loading...",
            imageUrl: "/createcard.jpg",
            setName: "Loading"
        }
    ])
    const [error, setError] = useState(null)

    useEffect((() => {
        fetch(`https://api.magicthegathering.io/v1/cards?random=true&pageSize=20`)
            .then((response) => {
                if (response.ok) {
                    response.json()
                        .then((responseObject) => setRandomCards(responseObject.cards))
                }
                else {
                    setError("Error")
                }
            })
    }), [])

    if (error === null) {
        return <div id="random">
            <h2>Random Cards</h2>
            <div id="randomCardDiv">
            {
                randomCards.map(card => {
                    return <div id="individualCard" key={`random--card--${card.id + card.name + randomCards.indexOf(card)}`}>
                        <CardBasicInfo
                        cardObject={card}
                        loggedInFavorites={loggedInFavorites}
                        setLoggedInFavorites={setLoggedInFavorites}
                        />
                    </div>
                })
            }
            </div>
            <button className="goAgainButton" onClick={() => {
                fetch(`https://api.magicthegathering.io/v1/cards?random=true&pageSize=20`)
                    .then((response) => {
                        if (response.ok) {
                            response.json()
                                .then((responseObject) => setRandomCards(responseObject.cards))
                        }
                        else {
                            setError("Error")
                        }
                    })
                setError(null)
            }
            }>Go Again</button>
        </div>
    }
    else {
        return <div id="random">
        <h2>Random Cards</h2>
        <div id="randomCardDiv">
            <AnErrorOccurred onRandomSearch={true}/>
        </div>
            <button className="goAgainButton" onClick={() => {
                fetch(`https://api.magicthegathering.io/v1/cards?random=true&pageSize=20`)
                    .then((response) => {
                        if (response.ok) {
                            response.json()
                                .then((responseObject) => setRandomCards(responseObject.cards))
                        }
                        else {
                            setError("Error")
                        }
                    })

                setError(null)
            }
            }>Go Again</button>
        </div>
    }
}