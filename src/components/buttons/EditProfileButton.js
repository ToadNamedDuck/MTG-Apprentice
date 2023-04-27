import { useNavigate } from "react-router-dom"

export function EditProfileButton({profileId}){
    const navigate = useNavigate();
    console.log(JSON.parse(localStorage.getItem("apprentice"))?.id)
    console.log(profileId)
    console.log(parseInt(JSON.parse(localStorage.getItem("apprentice"))?.id) === parseInt(profileId))
    if(parseInt(JSON.parse(localStorage.getItem("apprentice"))?.id) === parseInt(profileId)){
        return <button id="editProfileButton" onClick={() => {navigate("/editProfile")} }>Edit Profile</button>
    }
    else{return ""}
}