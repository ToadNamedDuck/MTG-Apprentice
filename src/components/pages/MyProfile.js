import { ProfilePictureDetailCard } from "../profile-components/ProfilePictureDetailCard";

export function MyProfile(){
    return <div id="profile--container">
        <ProfilePictureDetailCard id={JSON.parse(localStorage.getItem("apprentice"))?.id}/>
    </div>
}