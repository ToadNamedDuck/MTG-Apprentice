import { useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"


export const ApplicationViews = () => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Magic: The Gathering™ - Apprentice</h1>
                    <p>bla bla bla bla bla bla bla bla bla</p>

                    <Outlet />
                </>
            }>
            </Route>
            <Route path="/browse">
                <></>
            </Route>
        </Routes>
    )
}