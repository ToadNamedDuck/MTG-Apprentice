
import { Route, Routes } from 'react-router-dom';
import './Apprentice.css';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './views/ApplicationViews';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Authorized } from './views/Authorized'
import { Header } from './header/Header';

function Apprentice() {
    return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<Header/>
					<NavBar/>
					<ApplicationViews/>
				</>
			</Authorized>

		} />
	</Routes>
}

export default Apprentice;
