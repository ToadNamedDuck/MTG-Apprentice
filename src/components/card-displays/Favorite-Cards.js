import { CardBasicInfo } from "./card-basic-info";
import "./favorites.css"

export function FavoriteCards({ loggedInUserId, favoritedCardsOwnerId, cardArray, loggedInFavorites }) {
    return<div id="UserFavorites">
            <h2 id="favorites--header">Favorite Cards</h2>

            <div id="favCardsList">
                {
                    cardArray.map(card => {
                        return <div className="individualFavorite" key={`${favoritedCardsOwnerId}--favorites--${card.id}`}>
                            {
                                parseInt(loggedInUserId) === parseInt(favoritedCardsOwnerId) ?
                                    <button className="removeFavorite">
                                        hi
                                    </button>
                                    :
                                    ""
                            }
                            <CardBasicInfo loggedInFavorites={loggedInFavorites} cardObject={card} />

                        </div>
                    }
                    )
                }
            </div>
        </div>
}