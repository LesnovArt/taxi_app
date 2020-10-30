import React, { Fragment } from 'react';
import { Image } from '../../components/Image';
import { Button } from '../../components/Button';
import logo from '../../assets/img/logo.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registration } from '../../store/actions';
import { Link } from 'react-router-dom';

export const Registration = props => {
	const registration = e => {
		e.preventDefault();
		const { email, password, name, lastName } = e.target;
		props.registration(
			email.value,
			password.value,
			name.value,
			lastName.value,
		);
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
					<Link to='/' className='register-wrapper__link'>
						WELLCOME
					</Link>
				</p>
				<form onSubmit={registration}>
					<label htmlFor='email'>Email address</label>
					<input
						className='register-wrapper__input'
						type='email'
						name='email'
						size='28'
						required
					/>
					<div className='register-wrapper__full-name'>
						<div className='two-columns'>
							<label htmlFor='name' className='label-fullname'>
								Name
							</label>
							<input
								className='two-columns-input'
								type='text'
								name='name'
								required
							/>
						</div>
						<div className='two-columns'>
							<label htmlFor='lastName' className='label-fullname'>
								Last Name
							</label>
							<input
								className='two-columns-input'
								type='text'
								name='lastName'
								required
							/>
						</div>
					</div>
					<label htmlFor='lastName'>Password</label>
					<input
						className='register-wrapper__input'
						type='text'
						name='password'
						size='28'
						required
					/>
					<Button type='submit' className='register-wrapper__btn btn'>
						log in
					</Button>
				</form>
			</div>
		</Fragment>
	);
};

Registration.propTypes = {
	isLoggedIn   : PropTypes.bool,
	registration : PropTypes.func,
};
Registration.defaultProps = {
	isLoggedIn   : false,
	registration : () => {},
};

export const RegistrationWithAuth = connect(
	state => ({ isLoggedIn: state.auth.isLoggedIn }),
	{ registration },
)(Registration);
