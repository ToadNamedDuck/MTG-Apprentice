import { getUserFavoriteCards, removeFavorite } from "../../api-calls/LocalAPICalls";

export function RemoveFromFavorites({loggedInUserId, favoritedCardsOwnerId, favoriteId, setLoggedInFavorites, setFavCards}){

    function buttonClickHandler(){
        removeFavorite(favoriteId)
        .then(() => {getUserFavoriteCards(loggedInUserId).then((cards) => {setLoggedInFavorites(cards);setFavCards(cards)})})
    }

    return parseInt(loggedInUserId) === parseInt(favoritedCardsOwnerId) ?
    <button className="removeFavorite" onClick={buttonClickHandler}>
        Remove Favorite
    </button>
    :
    ""
}