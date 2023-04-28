export function CardExpandedInfo({cardObj}) {

    let rulingNumber = 0;

    return <div id="cardExpandedInfo">
        <div id="cardExpandedInfo-Left">
            <div id="image--power--toughness">
                {
                    cardObj.imageUrl ?
                        <img width="223px" height="311" src={cardObj.imageUrl} />
                        :
                        <img width="223" height="311" src="/no-card-image.jpg" />
                }
                <p id="cardPower">{cardObj.power}</p>
                <p id="cardToughness">{cardObj.toughness}</p>
            </div>
            <p id="cardType">{cardObj.type}</p>
            {
                //I definitely want to write code here to replace manacost with symbols
                <p id="manaCost">{cardObj.manaCost}</p>
            }
            <p id="cardRarity">{cardObj.rarity}</p>
            <p id="cardText">{cardObj.text}</p>
            <p id="cardId">{cardObj.id}</p>
        </div>
        <div id="cardExpandedInfo-Right">
            <h3>Other Information</h3>
            <p id="cardArtist">{cardObj.artist}</p>
            <p id="cardSetName">{cardObj.setName}</p>
            <p id="cardNumber">{cardObj.number}</p>
            <div id="card--rulings">
                <ul>
                    {
                        cardObj?.rulings?.map(ruling => {
                            rulingNumber++
                            return <div key={`cardRuling--${rulingNumber}`}>
                                    <h5>{ruling.date}</h5>
                                    <li>{ruling.text}</li>
                                </div>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
}