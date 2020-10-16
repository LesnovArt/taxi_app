import React, { useState } from 'react';
import { Home } from './taxi_app/Home';
import { Profile } from './taxi_app/Profile';
import { Map } from './taxi_app/Map';
import { Registration } from './taxi_app/Registration';

export const AuthContext = React.createContext({
	isAuth: false,
	toggleAuth: () => {},
});

export const App = () => {
	const [currentPage, setCurrentPage] = useState({ currentPage: 'home' });
	const [isAuth, toggleAuth] = useState({isAuth: false})

	const PAGES = {
		home: <Home setPage={setCurrentPage} />,
		profile: <Profile />,
		map: <Map />,
		registration: <Registration setPage={setCurrentPage} />,
	};

	console.log({isAuth})

	return (
		<AuthContext.Provider value={{isAuth, toggleAuth: toggleAuth}}>
			<header>
				<nav>
					<ul className="header__wrapper">
						<li>
							<button
								className="header__menu btn"
								onClick={() => {
									setCurrentPage('home');
								}}>
								Home
							</button>
						</li>
						<li>
							<button
								className="header__menu btn"
								onClick={() => {
									setCurrentPage('registration');
								}}>
								Registration
							</button>
						</li>
						<li>
							<button
								className="header__menu btn"
								onClick={() => {
									setCurrentPage('profile');
								}}>
								profile
							</button>
						</li>
						<li>
							<button
								className="header__menu btn"
								onClick={() => {
									setCurrentPage('map');
								}}>
								map
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section>{PAGES[currentPage]}</section>
			</main>
		</AuthContext.Provider>
	);
};
