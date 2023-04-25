import { Link } from "react-router-dom";
import "./navbar.css"
import { NavSearch } from "./navSearch";
export function NavBar({ setCardNameSearch }) {
    return <nav id="main--navbar">
        <Link className="header__link" to="/">Home</Link>
        <Link className="header__link" to="profile">Profile</Link>
        <Link className="header__link" to="randomCards">Random Cards</Link>
        <NavSearch setCardNameSearch = {setCardNameSearch}/>
    </nav>
}