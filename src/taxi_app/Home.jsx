import React from 'react';
import { Image } from './_helpers/Image';
import { Button } from './_helpers/Button';
import logo from './img/logo.png';
import PropTypes from 'prop-types';
import { AuthContext } from '../App';

export const Home = ({setPage}) => {

	Home.propTypes = {
		setPage: PropTypes.func,
	}

	// const onClick = (e) => {
	// 	e.preventDefault();
	// 	setPage('map');
	// };

	const toRegister = () => {
		setPage('registration')
	}

	const handleSubmit = ({}) => {
		console.log()
	}

	return (
		<AuthContext.Consumer>
			<div className="login-wrapper__box">
				<Image src={logo} alt="logo" className="logo" />
			</div>
			<div className="login-wrapper">
			<h1 className="register-wrapper__title">Log in</h1>
				<p>
					You are a new one? -{' '}
					<a href="#register" className="register-wrapper__link" onClick={toRegister}>
						REGISTER
					</a>
				</p>
				<form onSubmit={handleSubmit} className="login-wrapper__form">
					<label htmlFor="email">Email:</label>
					<input
						className="login-wrapper__input"
						id="email"
						type="email"
						name="email"
						size="28"
					/>
					<label htmlFor="password">Password:</label>
					<input
						className="login-wrapper__input"
						id="password"
						type="password"
						name="password"
						size="28"
					/>
					<Button type="submit" className="login-wrapper__btn btn">
						Log In
					</Button>
				</form>
			</div>
		</AuthContext.Consumer>
	);
};
