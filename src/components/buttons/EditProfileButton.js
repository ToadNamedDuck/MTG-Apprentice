import { useNavigate } from "react-router-dom"
import "./editProfileButton.css"
export function EditProfileButton({profileId}){
    const navigate = useNavigate();
    if(parseInt(JSON.parse(localStorage.getItem("apprentice"))?.id) === parseInt(profileId)){
        return <button id="editProfileButton" onClick={() => {navigate("/editProfile")} }></button>
    }
    else{return ""}
}