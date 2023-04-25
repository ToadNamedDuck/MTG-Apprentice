import { useEffect, useState } from "react";
import { getSingleUserById, getUserTags } from "../../api-calls/LocalAPICalls";

export function ProfilePictureDetailCard({id}){
    const [user, setUser] = useState(
        {
            userName: "Loading...",
            profilePictureUrl: "/green-icon.png",
            tagId: -1
        }
        )
    const [userTags, setUserTags] = useState([])
    const [currentUserTag, setCurrentTag] = useState({name: "loading"})

    useEffect((() => {
        getSingleUserById(id)
        .then(userArray => setUser(userArray[0]))    
    }),
    [])

    useEffect((()=>{
        getUserTags()
            .then(tagArray => setUserTags(tagArray))

        }),[user])

    useEffect((() => {
        if(user.tagId === -1){
            setCurrentTag({name: "No Tag"})
        }
        else{
            setCurrentTag(userTags.find(tag => tag.id === user.tagId))
        }
    }),[userTags])

    return <div id="userProfilePictureCard">
        <img width="75px" height="75px" src={user.profilePictureUrl}/>
        <h2>{user.userName}'s Page</h2>
        <p>{currentUserTag?.name}</p>
    </div>
}