import React, { Fragment, useState } from 'react';
import { HomeWithAuth } from './views/Home';
import { ProfileWithAuth } from './views/Profile';
import { Map } from './views/Map';
import { Registration } from './views/Registration';
import { withAuth } from './AuthContext';
import PropTypes from 'prop-types';

const App = props => {
	const [ currentPage, setCurrentPage ] = useState({ currentPage: 'home' });

	const navigateTo = page => {
		if (props.isLoggedIn) {
			setCurrentPage(page);
		}
		else {
			setCurrentPage('home');
		}
	};

	const PAGES = {
		home         : <HomeWithAuth setPage={navigateTo} />,
		profile      : <ProfileWithAuth setPage={navigateTo} />,
		map          : <Map />,
		registration : <Registration setPage={navigateTo} />,
	};

	return (
		<Fragment>
			<header>
				<nav>
					<ul className='header__wrapper'>
						<li>
							<button
								className='header__menu btn'
								onClick={() => {
									navigateTo('home');
								}}
							>
								Home
							</button>
						</li>
						<li>
							<button
								className='header__menu btn'
								onClick={() => {
									navigateTo('registration');
								}}
							>
								Registration
							</button>
						</li>
						<li>
							<button
								className='header__menu btn'
								onClick={() => {
									navigateTo('profile');
								}}
							>
								profile
							</button>
						</li>
						<li>
							<button
								className='header__menu btn'
								onClick={() => {
									navigateTo('map');
								}}
							>
								map
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section>{PAGES[currentPage]}</section>
			</main>
		</Fragment>
	);
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
	isLoggedIn: false,
}

export default withAuth(App);
