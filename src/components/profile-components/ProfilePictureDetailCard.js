import { useEffect, useState } from "react";
import { getSingleUserById, getUserTags } from "../../api-calls/LocalAPICalls";
import "./profile.css"
import { EditProfileButton } from "../buttons/EditProfileButton";
import { LogoutButton } from "../buttons/LogoutButton";

export function ProfilePictureDetailCard({ id, setLoggedInFavorites }) {
    const [user, setUser] = useState(
        {
            userName: "Loading...",
            profilePictureUrl: "/green-icon.png",
            tagId: -1
        }
    )
    const [userTags, setUserTags] = useState([])
    const [currentUserTag, setCurrentTag] = useState({ name: "loading" })

    useEffect((() => {
        getSingleUserById(id)
            .then(userArray => setUser(userArray[0]))
    }),
        [id])

    useEffect((() => {
        getUserTags()
            .then(tagArray => setUserTags(tagArray))

    }), [user])

    useEffect((() => {
        if (user.tagId === -1) {
            setCurrentTag({ name: "No Tag" })
        }
        else {
            setCurrentTag(userTags.find(tag => tag.id === user.tagId))
        }
    }), [userTags])



    return <div id="userProfilePictureCard">
        <img id="userProfilePicture" width="75px" height="75px" src={user?.profilePictureUrl} />
        <div id="cardTextInfo">
            <div id="profile--card--headers">
                <h1 id="userNameCard">{user?.userName}'s Page</h1>
                <h2 id="userTag">{currentUserTag?.name}</h2>
            </div>
            {
                parseInt(JSON.parse(localStorage.getItem("apprentice"))?.id) === parseInt(id) ?
                    <LogoutButton setLoggedInFavorites={setLoggedInFavorites} />
                    : ""
            }
        </div>
        <EditProfileButton profileId={id} />
    </div>
}