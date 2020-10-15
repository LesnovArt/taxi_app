import React from 'react';
import { Image } from './Image';
import logo from './img/logo.png';

export const Home = (props) => {
	const onClick = (e) => {
		e.preventDefault();
		props.setPage('map');
	};

	const toRegister = (e) => {
		props.setPage('registration')
	}
	return (
		<>
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
				<form className="login-wrapper__form">
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
					<button onClick={onClick} className="login-wrapper__btn btn">
						Log In
					</button>
				</form>
			</div>
		</>
	);
};
