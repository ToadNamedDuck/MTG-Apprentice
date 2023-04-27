import { useEffect, useState } from "react";
import { getSingleUserById, getUserTags } from "../../api-calls/LocalAPICalls";
import "./profile.css"
import { EditProfileButton } from "../buttons/EditProfileButton";

export function ProfilePictureDetailCard({ id }) {
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
                    <p id="userNameCard">{user?.userName}'s Page</p>
                    <p id="userTag">{currentUserTag?.name}</p>
                </div>
            <EditProfileButton profileId={id}/>
            </div>
}