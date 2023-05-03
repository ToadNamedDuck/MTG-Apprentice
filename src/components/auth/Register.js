import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserTags } from "../../api-calls/LocalAPICalls"

export const Register = (props) => {

    //Pull tags from local database for a user to select.
    const [userTags, setUserTags] = useState([])

    useEffect((() => {
        getUserTags().then(tagArray => setUserTags(tagArray))
    }),[])
    //Build the user object to send to the api
    const [apprenticeUser, setApprentice] = useState({
        email: "",
        userName: "",
        tagId: -1,
        featuredFavoriteCardId: "",
        profilePictureUrl: "/green-icon.png"

    })


    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apprenticeUser)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("apprentice", JSON.stringify({
                        id: createdUser.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${apprenticeUser.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateApprenticeUser = (evt) => {
        const copy = {...apprenticeUser}
        if(evt.target.id === "tagId"){
            copy[evt.target.id] = parseInt(evt.target.value)    
        }
        else if(evt.target.id === "profilePictureUrl"){
                if(evt.target.value === ""){
                    copy[evt.target.id] = "/green-icon.png"
                }
                else{
                    copy[evt.target.id] = evt.target.value 
                }
        }
        else{
                copy[evt.target.id] = evt.target.value
            }
        setApprentice(copy)
    }

    return (
        <main className="container--login" style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Magic: The Gathering™ - Apprentice</h1>

                    <label htmlFor="userName"> Username </label>
                    <input onChange={updateApprenticeUser}
                           type="text" id="userName" className="form-control"
                           placeholder="This name is public." required autoFocus />

                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateApprenticeUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />

                    <label htmlFor="userTag">Select a tag to display on your profile.</label>
                    <select className="form-control" id="tagId" onChange={updateApprenticeUser}>
                        {
                            userTags.map(tag => {
                                if(tag.id !== 3){
                                    return <option name="tagSelect" value={tag.id} key={`tag--key--${tag.id}`}>{tag.name}</option>
                                }
                            }
                                )
                        }
                    </select>

                    <label htmlFor="profilePictureUrl">Enter a url to upload a profile picture.</label>
                    <input onChange={updateApprenticeUser} className="form-control" type="text" id="profilePictureUrl" placeholder="Put a link here"></input>
                    <img id="profilePictureSignUp" width="50px" height="50px" src={apprenticeUser.profilePictureUrl}/>

                    <button id="registerButton--form" className="loginSignUpButtons" type="submit"> Register </button>

            </form>
        </main>
    )
}

