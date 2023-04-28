import { useEffect, useState } from "react";
import { CardBasicInfo } from "../card-displays/card-basic-info";
import { AnErrorOccurred } from "./AnErrorOccurred";

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
        return <div id="randomCardDiv">
            {
                randomCards.map(card => {
                    return <CardBasicInfo key={`random--card--${card.id + card.name}`} cardObject={card} loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites} />
                })
            }
            <button onClick={() => {
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
        return <>
            <AnErrorOccurred />
            <button onClick={() => {
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
        </>
    }
}