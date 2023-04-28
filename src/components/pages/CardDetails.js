import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardExpandedInfo } from "../card-displays/card-expanded-info";
import { AnErrorOccurred } from "./AnErrorOccurred";

export function CardDetails() {
    const { cardId } = useParams()
    const [cardFromApi, setCardFromApi] = useState(
        {
            name: "Loading...",
            imageUrl: "/createcard.jpg"
        }
    )
    const [error, setError] = useState(null)

    useEffect((() => {

        if (cardId) {
            fetch(`https://api.magicthegathering.io/v1/cards?id=${cardId}`)
                .then((response) => {
                    if (response.ok) {
                        response.json()
                            .then((responseObject) => setCardFromApi(responseObject.cards[0]))
                    }
                    else {
                        setError("Error")
                    }
                })
        }
    }), [])


    return <div id="card--details--mDiv">
        {
            error === null ?
                <>
                    <h2>{cardFromApi.name}</h2>
                    <CardExpandedInfo cardObj={cardFromApi} />
                </>
                :
                <AnErrorOccurred />
        }
    </div>

}