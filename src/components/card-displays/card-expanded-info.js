import "./card-expanded-info.css"

export function CardExpandedInfo({ cardObj }) {

    let rulingNumber = 0;
    let split = 0;

    return <div id="cardExpandedInfo">
        <div id="cardExpandedInfo-Left">
            <div id="image--power--toughness">
                {
                    cardObj.imageUrl ?
                        <img width="223px" height="311" src={cardObj.imageUrl} />
                        :
                        <img width="223" height="311" src="/no-card-image.jpg" />
                }
                <div id="P-T">
                    <p id="cardPower">Power: {cardObj.power}</p>
                    <p id="cardToughness">Toughness: {cardObj.toughness}</p>
                </div>
            </div>
            <p id="cardType">Type: {cardObj.type}</p>
            {
                //I definitely want to write code here to replace manacost with symbols
                <p id="manaCost">Mana Cost: {cardObj.manaCost}</p>
            }
            <p id="cardRarity">Rarity: {cardObj.rarity}</p>
            <div id="cardText">
                {
                    
                        cardObj?.text?.split("\n")?.map(piece => {
                            split++
                            return <div className="textSplit" key={`card--text--${split}`}>{piece}</div>
                        })
                    
                }
            </div>
            <p id="cardId">{cardObj.id}</p>
        </div>
        <div id="cardExpandedInfo-Right">
            <h2>Other Information</h2>
            <p id="cardArtist">Artist: {cardObj.artist}</p>
            <p id="cardSetName">Set: {cardObj.setName}</p>
            <p id="cardNumber">Number: {cardObj.number}</p>
            <div id="card--rulings">
                <h3>Rulings:</h3>
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