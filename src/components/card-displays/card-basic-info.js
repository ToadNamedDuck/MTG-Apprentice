import { AddToFavorites } from "../buttons/AddToFavoritesButton";
import "./card-basic-info.css"
export function CardBasicInfo({ cardObject, loggedInFavorites, setLoggedInFavorites }){
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
            loggedInFavorites.find(card => card.id === cardObject.id) ?
            ""
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
        <img src={cardObject.imageUrl} width="223" height="311"/>
        <footer className="card--basic--footer">{cardObject.setName}</footer>
        </div>
    </div>
}