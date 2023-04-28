import { useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { SearchResults } from "../pages/SearchResults"
import { Profile } from "../pages/Profile"
import { EditProfile } from "../pages/EditProfile"
import { CardDetails } from "../pages/CardDetails"
import { Random } from "../pages/Random"


export const ApplicationViews = ({cardNameSearch, loggedInFavorites, setLoggedInFavorites}) => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Magic: The Gathering™ - Apprentice</h1>
                    <p>bla bla bla bla bla bla bla bla bla</p>

                    <Outlet/>
                </>
            }>
            </Route>
            <Route path="/browse" element={<SearchResults cardNameSearch={cardNameSearch} loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites}/>}/>
            <Route path="/profile/:id" element={<Profile loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites}/>}/>
            <Route path="/editProfile" element={<EditProfile/>}/>
            <Route path="/cards/:cardId" element={<CardDetails/>}/>
            <Route path="/random" element={<Random loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites}/>}/>
        </Routes>
    )
}