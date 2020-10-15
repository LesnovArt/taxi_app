import React, { useState } from 'react';
import { Home } from './taxi_app/Home';
import { Profile } from './taxi_app/Profile';
import { Map } from './taxi_app/Map';
import { Registration } from './taxi_app/Registration';

export const App = () => {
	const [currentPage, setCurrentPage] = useState({ currentPage: 'home' });

	const PAGES = {
		home: <Home setPage={setCurrentPage} />,
		profile: <Profile />,
		map: <Map />,
		registration: <Registration setPage={setCurrentPage} />,
	};

	return (
		<>
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
		</>
	);
};
