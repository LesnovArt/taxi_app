import React, { Fragment } from 'react';
import { HomeWithAuth } from './views/Home/Home';
import { ProfileWithAuth } from './views/Profile/Profile';
import { Map } from './views/Map/Map';
import { RegistrationWithAuth } from './views/Registration/Registration';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
	return (
		<Fragment>
			<header>
				<nav>
					<ul className='header__wrapper'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/map'>Map</Link>
						</li>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section>
					<Switch>
						<Route path='/' component={HomeWithAuth} exact />
						<PrivateRoute path='/map' component={Map} />
						<PrivateRoute path='/profile' component={ProfileWithAuth} />
						<Route
							path='/registration'
							component={RegistrationWithAuth}
						/>
					</Switch>
				</section>
			</main>
		</Fragment>
	);
};

export default connect(state => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
