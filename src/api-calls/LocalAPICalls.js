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