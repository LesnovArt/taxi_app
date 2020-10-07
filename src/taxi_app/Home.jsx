import React from 'react';

export const Home = (props) => {
	const onClick = (e) => {
		e.preventDefault();
		props.setPage("map")
	}

	return (

		<div className="login-wrapper">
			<form className="login-wrapper__form">
				<label htmlFor="email">Email:</label>
				<input className="login-wrapper__input" id="email" type="email" name="email" size="28"/>
				<label htmlFor="password">Password:</label>
				<input className="login-wrapper__input" id="password" type="password" name="password" size="28"/>
				<button onClick={onClick} className="login-wrapper__btn btn">LogIn</button>
			</form>
		</div>
	)
}