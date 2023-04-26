import { addCardToUserFavorites, getUserFavoriteCards } from "../../api-calls/LocalAPICalls"

export function AddToFavorites({cardObj, setLoggedInFavorites}){
    let currentUserId = JSON.parse(localStorage.getItem("apprentice"))?.id
    return <button 
    id="addToFavoritesButton"
    onClick={(evt) => {
        evt.preventDefault()
        addCardToUserFavorites(currentUserId, cardObj)
        .then(() => {
            getUserFavoriteCards(currentUserId)
            .then(cardArray => setLoggedInFavorites(cardArray))
        }
        )
    } }>Add to Favorites</button>
}