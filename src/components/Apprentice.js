
import { Route, Routes } from 'react-router-dom';
import './Apprentice.css';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './views/ApplicationViews';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Authorized } from './views/Authorized'
import { Header } from './header/Header';
import { useEffect, useState } from 'react';
import { getUserFavoriteCards } from '../api-calls/LocalAPICalls';
import { Footer } from './header/Footers';

function Apprentice() {
	const [cardNameSearch, setCardNameSearch] = useState("")
	const [loggedInFavorites, setLoggedInFavorites] = useState([])

	useEffect((() => {
		getUserFavoriteCards(JSON.parse(localStorage.getItem("apprentice"))?.id)
		.then(cardArray => setLoggedInFavorites(cardArray))
	}),[])

    return <Routes>
		<Route path="/login" element={<Login setLoggedInFavorites={setLoggedInFavorites}/>} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<Header setLoggedInFavorites={setLoggedInFavorites}/>
					<NavBar setCardNameSearch={setCardNameSearch}/>
					<ApplicationViews cardNameSearch={cardNameSearch}
						loggedInFavorites={loggedInFavorites}
						setLoggedInFavorites={setLoggedInFavorites}/>
					<Footer/>
				</>
			</Authorized>

		} />
	</Routes>
}

export default Apprentice;
