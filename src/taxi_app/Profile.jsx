import React from 'react';
import { withAuth } from './AuthContext';
import { Button } from './_helpers/Button';
import PropTypes from 'prop-types';

export const Profile = ({ logOut, setPage }) => {
	const unauthenticate = () => {
		logOut();
		setPage('home');
	};

	return (
		<p>
			Profile
			<Button type='submit' onClick={unauthenticate}>
				Log out
			</Button>
		</p>
	);
};

Profile.propTypes = {
	logOut: PropTypes.func,
	setPage: PropTypes.func,
}

Profile.defaultProps = {
	logOut: () => {},
	setPage: () => {},
}

export const ProfileWithAuth = withAuth(Profile);
