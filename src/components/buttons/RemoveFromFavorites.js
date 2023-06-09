import { getUserFavoriteCards, removeFavorite } from "../../api-calls/LocalAPICalls";
import "./FavoriteButtons.css"
export function RemoveFromFavorites({loggedInUserId, favoritedCardsOwnerId, favoriteId, setLoggedInFavorites, setFavCards}){

    function buttonClickHandler(){
        removeFavorite(favoriteId)
        .then(() => {getUserFavoriteCards(loggedInUserId).then((cards) => {setLoggedInFavorites(cards);setFavCards(cards)})})
    }

    return parseInt(loggedInUserId) === parseInt(favoritedCardsOwnerId) ?
    <button className="removeFavorite" onClick={buttonClickHandler}>
        X
    </button>
    :
    ""
}