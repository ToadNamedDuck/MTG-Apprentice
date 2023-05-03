import { addCardToUserFavorites, getUserFavoriteCards } from "../../api-calls/LocalAPICalls"
import "./FavoriteButtons.css"

export function AddToFavorites({setLoggedInFavorites, cardObj}){
    return <button 
    className="addToFavoritesButton"
    onClick={() => {
        addCardToUserFavorites(JSON.parse(localStorage.getItem("apprentice"))?.id, cardObj)
        .then(() => {getUserFavoriteCards(JSON.parse(localStorage.getItem("apprentice"))?.id).then((cards) => {setLoggedInFavorites(cards)})})
    } }>Add to Favorites</button>
}
