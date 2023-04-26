const API = "http://localhost:8088"

export function getCurrentUser(){
    if(JSON.parse(localStorage.getItem("apprentice"))?.id === null){
        return null
    }
    else {
        return fetch(`${API}/users?id=${JSON.parse(localStorage.getItem("apprentice"))?.id}`)
                .then((response) => response.json())
    }
}

export function getUserTags(){
    return fetch(`${API}/tags?isUserTag=true`)
        .then(res => res.json())
}

export function getSingleUserById(id){
    return fetch(`${API}/users?id=${id}`)
        .then(response => response.json())
}

export function getUserFavoriteCards(id){
    return fetch(`${API}/userFavoritedCards?userId=${id}`)
        .then((response) => response.json())
}

export function addCardToUserFavorites(userId, cardObj){
    const cardToSendToAPI = {
        id: cardObj.id,
        name: cardObj.name,
        setName: cardObj.setName,
        userId: userId
    }
    if(cardObj.hasOwnProperty("imageUrl")){
        cardToSendToAPI.imageUrl = cardObj.imageUrl;
    }
    else{
        cardToSendToAPI.imageUrl = "/no-card-image.jpg"
    }

    return fetch(`${API}/userFavoritedCards`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cardToSendToAPI)
    })
    .then((response) => response.json())
}