import React from 'react';


export const Registration = (props) => {
	
	const toMap = (e) => {
		e.preventDefault();
		props.setPage("map")
	}
	const toHome = (e) => {
		props.setPage("home")
	}
	return (
		<div className="register-wrapper">
			<h1 className="register-wrapper__title">Registration</h1>
			<p>If You already have it - <a href="#login" className="register-wrapper__link" onClick={toHome}>WELLCOME</a></p>
			<form >
				<label htmlFor="email">Email address</label>
				<input className="register-wrapper__input" type="text" name="email"></input>
				<div className="register-wrapper__full-name">
					<div className="two-columns">
						<label htmlFor="name" className="label-fullname">Name</label>
						<input className="two-columns-input" type="text" name="name"></input>
					</div>
					<div className="two-columns">
						<label htmlFor="lastName" className="label-fullname">Last Name</label>
						<input className="two-columns-input" type="text" name="lastName"></input>
					</div>
				</div>
				<label htmlFor="lastName">Password</label>
				<input className="register-wrapper__input" type="text" name="password"></input>
			</form>
			<button onClick={toMap} className="register-wrapper__btn btn">log in</button>
		</div>
	);
}

