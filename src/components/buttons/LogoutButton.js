import { useNavigate } from "react-router-dom"
import "./logOutButton.css"

export function LogoutButton({ setLoggedInFavorites }) {

    const navigate = useNavigate()

    return <button id="logout__button" onClick={() => {
        setLoggedInFavorites([])
        localStorage.removeItem("apprentice")
        navigate("/", {replace: true})
    } }>Log Out</button>
}