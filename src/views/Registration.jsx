import React, { Fragment } from 'react';
import { Image } from '../components/Image';
import { Button } from '../components/Button';
import logo from '../assets/img/logo.png';
import PropTypes from 'prop-types';

export const Registration = ({ setPage }) => {
	const toProfile = e => {
		e.preventDefault();
		setPage('profile');
	};
	const toHome = () => {
		setPage('home');
	};

	return (
		<Fragment>
			<div className='register-wrapper__box'>
				<Image src={logo} alt='logo' className='logo' />
			</div>
			<div className='register-wrapper'>
				<h1 className='register-wrapper__title'>Registration</h1>
				<p>
					If You already have it -{' '}
					<a href='#login' className='register-wrapper__link' onClick={toHome}>
						WELLCOME
					</a>
				</p>
				<form>
					<label htmlFor='email'>Email address</label>
					<input className='register-wrapper__input' type='email' name='email' required />
					<div className='register-wrapper__full-name'>
						<div className='two-columns'>
							<label htmlFor='name' className='label-fullname'>
								Name
							</label>
							<input className='two-columns-input' type='text' name='name' required />
						</div>
						<div className='two-columns'>
							<label htmlFor='lastName' className='label-fullname'>
								Last Name
							</label>
							<input className='two-columns-input' type='text' name='lastName' required />
						</div>
					</div>
					<label htmlFor='lastName'>Password</label>
					<input className='register-wrapper__input' type='text' name='password' required />
					<Button onClick={toProfile} className='register-wrapper__btn btn'>
						log in
					</Button>
				</form>
			</div>
		</Fragment>
	);
};

Registration.propTypes = {
	setPage : PropTypes.func,
};
Registration.defaultProps = {
	setPage : () => {},
};
