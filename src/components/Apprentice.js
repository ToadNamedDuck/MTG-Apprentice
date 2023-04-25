
import { Route, Routes } from 'react-router-dom';
import './Apprentice.css';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './views/ApplicationViews';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Authorized } from './views/Authorized'
import { Header } from './header/Header';
import { useState } from 'react';

function Apprentice() {
	const [cardNameSearch, setCardNameSearch] = useState("")
    return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<Header/>
					<NavBar setCardNameSearch={setCardNameSearch}/>
					<ApplicationViews cardNameSearch={cardNameSearch}/>
				</>
			</Authorized>

		} />
	</Routes>
}

export default Apprentice;
