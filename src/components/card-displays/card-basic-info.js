import { Link } from "react-router-dom";
import { AddToFavorites } from "../buttons/AddToFavoritesButton";
import "./card-basic-info.css"
export function CardBasicInfo({ cardObject, loggedInFavorites, setLoggedInFavorites, onProfile }){

    if(!cardObject.imageUrl){
        cardObject.imageUrl = "/no-card-image.jpg"
    }

    if(cardObject.name.includes('//')){
        const [nameFrag1, nameFrag2] = cardObject.name.split("//")
        cardObject.name = nameFrag1;
        cardObject.secondaryNamePiece = nameFrag2;
    }



    return <div className="card--basic">
        {
            loggedInFavorites.find(card => card.cardId === cardObject.id | card.cardId === cardObject.cardId) ?
            <div className="emptyButtonSpot"></div>
            :
            //use the new component and pass setLoggedInFavorites
            <AddToFavorites setLoggedInFavorites={setLoggedInFavorites} cardObj={cardObject}/>
        }
        <div className="card--alignment">
        {
            cardObject.secondaryNamePiece ?
            <div className="card--basic--header">{cardObject.name}<br></br>
            {cardObject.secondaryNamePiece}
            </div>
            :
            <header className="card--basic--header">{`${cardObject.name}`}</header>
        }
        {
            typeof cardObject.id === "string" ?
            <Link to={`/cards/${cardObject.id}`}>
                <img src={cardObject.imageUrl} width="223" height="311"/>
            </Link>
            :
            <Link to={`/cards/${cardObject.cardId}`}>
                <img src={cardObject.imageUrl} width="223" height="311"/>
            </Link>
        }
        <footer className="card--basic--footer">{cardObject.setName}</footer>
        </div>
    </div>
}