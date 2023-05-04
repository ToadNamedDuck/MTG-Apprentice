import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardExpandedInfo } from "../card-displays/card-expanded-info";
import { AnErrorOccurred } from "./AnErrorOccurred";
import "./carddetails.css"

export function CardDetails() {
    const { cardId } = useParams()
    const [cardFromApi, setCardFromApi] = useState(
        {
            name: "Loading...",
            imageUrl: "/createcard.jpg",
            id: "LoadingCardLOL",
            setName: "Loading..."
        }
    )
    const [error, setError] = useState(null)

    useEffect((() => {

        if (cardId && cardId !== "PotOfGreed" && cardId !== "CoolS" && cardId !== "LoadingCardLOL") {
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
        if(cardId === "PotOfGreed"){
            const PotOfGreed = {
                name: "Pot of Greed",
                imageUrl: "https://m.media-amazon.com/images/I/515zKdpiGoL._AC_UF894,1000_QL80_.jpg",
                setName: "Legends of Blue Eyes White Dragon",
                id: "PotOfGreed",
                type: "Spell",
                manaCost: 0,
                rarity: "Rare",
                artist: "Kazuki Takahashi",
                number: "55144522",
                text: "Draw two cards.",
                power: "♾",
                toughness: "♾"
            }
            setCardFromApi(PotOfGreed)
        }
        if(cardId === "CoolS"){
            const CoolS = {
                name: "Cool S",
                imageUrl: "/coolS.png",
                setName: "School Desk Adventures",
                id: "CoolS",
                type: "Artifact - School Desk",
                manaCost: 0,
                rarity: "Rare",
                artist: "Children Everywhere",
                number: "69",
                text: "Pay {B}: Praise the Sun\nPay {U}: Praise the Sun\nPay {R}: Praise the Sun",
                power: "♾",
                toughness: "♾"
            }
            setCardFromApi(CoolS)
        }
        if(cardId === "LoadingCardLOL"){
            const LoadingCard = {
                name: "Loading...",
                imageUrl: "/createcard.jpg",
                setName: "Loading...",
                id: "LoadingCardLOL",
                type: "Loading...",
                manaCost: "♾",
                rarity: "Common",
                artist: "Loading...",
                number: "Loading...",
                text: "Loading...\nLoading...\nLoading Complete",
                power: "♾",
                toughness: "♾"
            }
            setCardFromApi(LoadingCard)
        }
    }), [])


    return <div id="card--details--mDiv">
        {
            error === null ?
                <>
                    <h1>{cardFromApi.name}</h1>
                    <CardExpandedInfo cardObj={cardFromApi} />
                </>
                :
                <AnErrorOccurred onDetails={true}/>
        }
    </div>

}