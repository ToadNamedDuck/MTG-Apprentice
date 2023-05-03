import { Route, Routes } from "react-router-dom"
import { SearchResults } from "../pages/SearchResults"
import { Profile } from "../pages/Profile"
import { EditProfile } from "../pages/EditProfile"
import { CardDetails } from "../pages/CardDetails"
import { Random } from "../pages/Random"
import { Home } from "../pages/Home"


export const ApplicationViews = ({cardNameSearch, loggedInFavorites, setLoggedInFavorites}) => {

    return (
        <Routes>
            <Route path="/" element={<Home loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites}/>}>
            </Route>
            <Route path="/browse" element={<SearchResults cardNameSearch={cardNameSearch} loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites}/>}/>
            <Route path="/profile/:id" element={<Profile loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites}/>}/>
            <Route path="/editProfile" element={<EditProfile/>}/>
            <Route path="/cards/:cardId" element={<CardDetails/>}/>
            <Route path="/random" element={<Random loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites}/>}/>
        </Routes>
    )
}