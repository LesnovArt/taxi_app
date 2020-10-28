import React, { Fragment } from 'react';
import { Image } from '../components/Image';
import { Button } from '../components/Button';
import logo from '../assets/img/logo.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import { Link } from 'react-router-dom';

export const Home = props => {
	const authenticate = e => {
		e.preventDefault();
		const { email, password } = e.target;
		props.authenticate(email.value, password.value);
	};

	return (
		<Fragment>
			{props.isLoggedIn ? (
				<p>
					You are logged in - <Link to='/profile'>GO TO PROFILE</Link>
				</p>
			) : (
				<Fragment>
					<div className='logo-box'>
						<Image src={logo} alt='logo' className='logo' />
					</div>
					<div className='login-wrapper'>
						<h1 className='register-wrapper__title'>Log in</h1>
						<p>
							You are a new one? -{' '}
							<a href='#register' className='register-wrapper__link'>
								REGISTER
							</a>
						</p>
						<form onSubmit={authenticate} className='login-wrapper__form'>
							<label htmlFor='email'>Email:</label>
							<input
								className='login-wrapper__input'
								id='email'
								type='email'
								name='email'
								size='28'
								required
							/>
							<label htmlFor='password'>Password:</label>
							<input
								className='login-wrapper__input'
								id='password'
								type='password'
								name='password'
								size='28'
								required
							/>
							<Button type='submit' className='login-wrapper__btn btn'>
								Log In
							</Button>
						</form>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

Home.propTypes = {
	isLoggedIn   : PropTypes.bool,
	authenticate : PropTypes.func,
};

Home.defaultProps = {
	isLoggedIn   : false,
	authenticate : () => {},
};

export const HomeWithAuth = connect(
	state => ({ isLoggedIn: state.auth.isLoggedIn }),
	{ authenticate },
)(Home);
