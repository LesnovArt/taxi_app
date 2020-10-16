import React from 'react';
import { Image } from './_helpers/Image';
import { Button } from './_helpers/Button';
import logo from './img/logo.png';
import PropTypes from 'prop-types';

export const Registration = ({setPage}) => {
	
	Registration.propTypes = {
		setPage: PropTypes.func,
	}

	const toMap = (e) => {
		e.preventDefault();
		setPage('map');
	};
	const toHome = () => {
		setPage('home');
	};

	return (
		<>
			<div className="register-wrapper__box">
				<Image src={logo} alt="logo" className="logo" />
			</div>
			<div className="register-wrapper">
				<h1 className="register-wrapper__title">Registration</h1>
				<p>
					If You already have it -{' '}
					<a href="#login" className="register-wrapper__link" onClick={toHome}>
						WELLCOME
					</a>
				</p>
				<form >
					<label htmlFor="email">Email address</label>
					<input className="register-wrapper__input" type="text" name="email"></input>
					<div className="register-wrapper__full-name">
						<div className="two-columns">
							<label htmlFor="name" className="label-fullname">
								Name
							</label>
							<input className="two-columns-input" type="text" name="name"></input>
						</div>
						<div className="two-columns">
							<label htmlFor="lastName" className="label-fullname">
								Last Name
							</label>
							<input className="two-columns-input" type="text" name="lastName"></input>
						</div>
					</div>
					<label htmlFor="lastName">Password</label>
					<input className="register-wrapper__input" type="text" name="password"></input>
					<Button onClick={toMap} className="register-wrapper__btn btn">
					log in
				</Button>
				</form>
			</div>
		</>
	);
};
