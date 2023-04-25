import { useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { SearchResults } from "../pages/SearchResults"
import { MyProfile } from "../pages/MyProfile"


export const ApplicationViews = ({cardNameSearch}) => {

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
            <Route path="/browse" element={<SearchResults cardNameSearch={cardNameSearch}/>}/>
            <Route path="/profile" element={<MyProfile/>}/>
        </Routes>
    )
}