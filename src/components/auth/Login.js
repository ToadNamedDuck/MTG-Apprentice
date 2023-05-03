import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserFavoriteCards } from "../../api-calls/LocalAPICalls";

export const Login = ({ setLoggedInFavorites }) => {
    const [email, set] = useState("")
    const navigate = useNavigate()
    let foundUser;

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    foundUser = foundUsers[0]
                    localStorage.setItem("apprentice", JSON.stringify({
                        id: user.id
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
            .then(() => {
                if (localStorage.getItem("apprentice")) {
                    getUserFavoriteCards(foundUser.id)
                        .then((favCards) => setLoggedInFavorites(favCards))
                }
            })

    }

    return (
        <main className="container--login">
            <div id="headers">
                <h1 className="signInH">Magic: The Gathering™ - Apprentice</h1>
                <h2 className="signInH">Please sign in</h2>
            </div>
            <form className="form--login" onSubmit={handleLogin}>
                <label htmlFor="inputEmail">Enter your Email</label>
                <input type="email"
                    value={email}
                    onChange={evt => set(evt.target.value)}
                    className="form-control"
                    placeholder="Email address"
                    required autoFocus />
                <button className="loginSignUpButtons" type="submit">
                    Sign in
                </button>
            </form>
            <Link id="registerLink" to="/register">Not a member yet?</Link>
        </main>
    )
}

