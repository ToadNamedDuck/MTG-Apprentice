import { Link } from "react-router-dom";
import { HeaderProfile } from "./HeaderProfile";
import "./header.css"
export function Header({setLoggedInFavorites}) {
    return <header id="header">
        <Link to="/">    
            <img id="header--logo" src="/Logo.png"/>
        </Link>
        <p id="header--name">Magic: The Gathering™ - Apprentice</p>
        <HeaderProfile setLoggedInFavorites={setLoggedInFavorites}/>
    </header>
}