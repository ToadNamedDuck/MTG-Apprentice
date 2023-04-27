import { useNavigate } from "react-router-dom"
import "../header/headerProfile.css"

export function LogoutButton({ setEmptyUser, setLoggedInFavorites }) {

    const navigate = useNavigate()

    return <button id="logout__button" onClick={() => {
        setEmptyUser({})
        setLoggedInFavorites([])
        localStorage.removeItem("apprentice")
        navigate("/", {replace: true})
    } }>Log Out</button>
}