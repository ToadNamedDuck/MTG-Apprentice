import { useEffect, useState } from "react"
import { getCurrentUser, getUserTags, submitEditedProfile } from "../../api-calls/LocalAPICalls"
import { useNavigate } from "react-router-dom"
import "./editProfile.css"

export function EditProfile(){
    const [userTags, setUserTags] = useState([])
    const [profile, setProfile] = useState({
        userName: "",
        tagId: 0
    })
    const [userName, setUserName] = useState("")
    const [tagId, setTagId] = useState(3)
    const [profilePictureUrl, setProfilePictureUrl] = useState("/green-icon.png")

    const navigate = useNavigate()

    useEffect((() => {
        getUserTags()
            .then((tagArray) => setUserTags(tagArray))
    }),[])

    useEffect((() => {
        getCurrentUser()
            .then((userArray) => setProfile(userArray[0]))
    }),[])


    useEffect((() => {
        setUserName(profile.userName)
        setTagId(profile.tagId)
        setProfilePictureUrl(profile.profilePictureUrl)
    }),[profile])

    const submitButtonAction = () => {
        if(userName !== ""){
            const userToSend = {
                email: profile.email,
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

    function optionBuilder(){
       return userTags.map((tag) => {
            if(tag.id !== 3){
                return <option key={`user--tag--edit--${tag.id}`} name="userTag" value={parseInt(tag.id)}>{tag.name}</option>
            }
        })
    }

    return <div id="editProfileForm">
        <h2 id="editHeader">Edit Profile</h2>
        <label htmlFor="userUserName">Username: </label>
        <input type="text" id="userUserName" defaultValue={profile.userName} placeholder="Enter a new username" onChange={(event) => {setUserName(event.target.value)} }></input>
        <label htmlFor="userTagEdit">Tag: </label>
        <select id="userTagEdit" value={tagId} onChange={(event) => {setTagId(parseInt(event.target.value))} }>
        {
            optionBuilder()
        }
        </select>
        <div id="profilePictureEditDiv">
            <label htmlFor="userProfilePictureUrl">Profile Picture Url: </label>
            <input type="text" id="userProfilePictureUrl" defaultValue={profile.profilePictureUrl} placeholder="Enter an image link" onChange={(event) => {setProfilePictureUrl(event.target.value)} }></input>
            {
                profilePictureUrl !== "" ?
                <img id="newPFP" src={profilePictureUrl} height="50px" width="50px"/>
                :
                <img id="newPFP" src="/green-icon.png" height="50px" width="50px"/>
            }
        </div>
        <button id="sendEditedProfile" onClick={submitButtonAction}>Submit Changes</button>
    </div>
}