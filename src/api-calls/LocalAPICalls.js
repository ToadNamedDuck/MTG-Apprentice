const API = "http://localhost:8088"
const apprenticeId = JSON.parse(localStorage.getItem("apprentice"))?.id

export function getCurrentUser(){
    if(apprenticeId === null){
        return null
    }
    else {
        return fetch(`${API}/users?id=${apprenticeId}`)
                .then((response) => response.json())
    }
}