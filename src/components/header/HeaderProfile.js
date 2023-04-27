import { useEffect, useState } from "react"
import { LogoutButton } from "../buttons/LogoutButton"
import { getCurrentUser } from "../../api-calls/LocalAPICalls"
import "./headerProfile.css"

export function HeaderProfile({setLoggedInFavorites}) {
    const [currentUser, setUser] = useState(
        {
            profilePictureUrl: "",
            userName: "Loading..."
        }
    )

    useEffect((() => {
        getCurrentUser()
            .then((currentUser) => setUser(currentUser[0]))
    }), [])

    return currentUser ? <div id="header--profile" height="50px" width="150px">

        <img id="profile__picture__header" width="50px" height="50px" src={currentUser.profilePictureUrl} />
        <p id="userName">{currentUser.userName}</p>

        <LogoutButton setEmptyUser={setUser} setLoggedInFavorites={setLoggedInFavorites}/>
    </div>
    :
    ""
}