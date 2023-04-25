import { useNavigate } from "react-router-dom"
import "../header/headerProfile.css"

export function LogoutButton({ setEmptyUser }) {

    const navigate = useNavigate()

    return <button id="logout__button" onClick={(e) => {
        setEmptyUser({})
        localStorage.removeItem("apprentice")
        navigate("/", {replace: true})
    } }>Log Out</button>
}