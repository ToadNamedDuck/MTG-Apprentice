import { Link } from "react-router-dom";
import "./navbar.css"
import { NavSearch } from "./navSearch";
export function NavBar({ setCardNameSearch }) {
    return <nav id="main--navbar">
        <Link className="header__link" to="/">Home</Link>
        <Link className="header__link" to={`profile/${JSON.parse(localStorage.getItem("apprentice"))?.id}`}>Profile</Link>
        <Link className="header__link" to="random">Random Cards</Link>
        <NavSearch setCardNameSearch = {setCardNameSearch}/>
    </nav>
}