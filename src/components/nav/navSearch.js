import { useNavigate } from "react-router-dom"
export function NavSearch({}){
    const navigate = useNavigate();
    return <div id="navSearch">
        <input id="nav--searchbar" type="text" placeholder="Looking for a card?"></input>
        <button type="button" onClick={() => navigate("/browse")}>Go!</button>
    </div>
}