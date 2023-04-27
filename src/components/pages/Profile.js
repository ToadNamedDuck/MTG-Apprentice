import { useParams } from "react-router-dom";
import { ProfilePictureDetailCard } from "../profile-components/ProfilePictureDetailCard";
import { FavoriteCards } from "../card-displays/Favorite-Cards";
import { useEffect, useState } from "react";
import { getUserFavoriteCards } from "../../api-calls/LocalAPICalls";

export function Profile({loggedInFavorites, setLoggedInFavorites}){

    const { id } = useParams()
    const [pageId, setPageId] = useState(id)

    useEffect((() => {
        setPageId(parseInt(id))
        getUserFavoriteCards(id)
        .then((cardArray) => setFavCards(cardArray))
    }
    ),[id])
    
    const [favCards, setFavCards] = useState(
    [
        {
            name: "Loading...",
            imageUrl: "/createcard.jpg",
            setName: "Loading...",
            id: -1
        }
    ]
    );

    useEffect((() => {
        getUserFavoriteCards(id)
        .then((cardArray) => setFavCards(cardArray))
    }),[])

    return <div id="profile--container">
        <ProfilePictureDetailCard id={pageId}/>
        <FavoriteCards loggedInFavorites={loggedInFavorites}
            loggedInUserId={JSON.parse(localStorage.getItem("apprentice"))?.id}
            favoritedCardsOwnerId={pageId}
            cardArray={favCards}
            setLoggedInFavorites={setLoggedInFavorites}
            setFavCards={setFavCards}/>
    </div>
}