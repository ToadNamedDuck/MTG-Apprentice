import { useEffect, useState } from "react"
import { getCurrentUser, getUserTags, submitEditedProfile } from "../../api-calls/LocalAPICalls"
import { useNavigate } from "react-router-dom"

export function EditProfile(){
    const [profile, setProfile] = useState({
        email: "",
        userName: "",
        tagId: -1,
    })
    const [userTags, setUserTags] = useState([])
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [tagId, setTagId] = useState(3)
    const [profilePictureUrl, setProfilePictureUrl] = useState("/green-icon.png")

    const navigate = useNavigate()

    useEffect((() => {
        getCurrentUser()
            .then((userArray) => setProfile(userArray[0]))
    }),[])

    useEffect((() => {
        getUserTags()
            .then((tagArray) => setUserTags(tagArray))
    }),[])

    useEffect((() => {
        setEmail(profile.email)
        setUserName(profile.userName)
        setTagId(profile.tagId)
        setProfilePictureUrl(profile.profilePictureUrl)
    }),[profile])

    const submitButtonAction = () => {
        if(email !== "" && userName !== ""){
            const userToSend = {
                email: email,
                userName: userName,
                tagId: parseInt(tagId),
            }
            if(profilePictureUrl === ""){
                userToSend.profilePictureUrl = "/green-icon.png"
            }
            else{
                userToSend.profilePictureUrl = profilePictureUrl
            }
    
            submitEditedProfile(userToSend)
            .then(() => navigate(`/profile/${profile.id}`, {replace: true}))
        }
        else{
            window.alert("Email or Username can't be left empty!")
        }
    }

    return <div id="editProfileForm">
        <label htmlFor="userEmail">Email: </label>
        <input type="text" id="userEmail" defaultValue={profile.email} placeholder="Enter a new email" onChange={(event) => {setEmail(event.target.value)} }></input>
        <label htmlFor="userUserName">Username: </label>
        <input type="text" id="userUserName" defaultValue={profile.userName} placeholder="Enter a new username" onChange={(event) => {setUserName(event.target.value)} }></input>
        <label htmlFor="userTag">Tag: </label>
        <select id="userTag" onChange={(event) => {setTagId(event.target.value)} }>
            <option name="userTag" value={-1}>Select a tag...</option>
        {
            userTags.map((tag) => {
                if(tag.id !== 3){
                    return <option key={`user--tag--edit--${tag.id}`} name="userTag" value={tag.id}>{tag.name}</option>
                }
            })
        }
        </select>
        <label htmlFor="userProfilePictureUrl">Profile Picture Url: </label>
        <input type="text" id="userProfilePictureUrl" defaultValue={profile.profilePictureUrl} placeholder="Enter a link to your new profile picture" onChange={(event) => {setProfilePictureUrl(event.target.value)} }></input>
        <button id="sendEditedProfile" onClick={submitButtonAction}>Submit Changes</button>
    </div>
}