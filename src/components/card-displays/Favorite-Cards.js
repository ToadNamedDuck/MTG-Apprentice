import { RemoveFromFavorites } from "../buttons/RemoveFromFavorites";
import { CardBasicInfo } from "./card-basic-info";
import "./favorites.css"

export function FavoriteCards({ loggedInUserId, favoritedCardsOwnerId, cardArray, loggedInFavorites, setLoggedInFavorites, setFavCards }) {
    return<div id="UserFavorites">
            <h2 id="favorites--header">Favorite Cards</h2>

            <div id="favCardsList">
                {
                    cardArray.map(card => {
                        return <div className="individualFavorite" key={`${favoritedCardsOwnerId}--favorites--${card.id}`}>
                            <RemoveFromFavorites loggedInUserId={loggedInUserId}
                                favoritedCardsOwnerId={favoritedCardsOwnerId}
                                favoriteId={card.id}
                                setLoggedInFavorites={setLoggedInFavorites}
                                setFavCards={setFavCards}/>
                            <CardBasicInfo onProfile={true} setLoggedInFavorites={setLoggedInFavorites} loggedInFavorites={loggedInFavorites} cardObject={card} />
                        </div>
                    }
                    )
                }
            </div>
        </div>
}