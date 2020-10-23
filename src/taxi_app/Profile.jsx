import React from 'react';
import { withAuth } from './AuthContext';
import { Button } from './_helpers/Button'

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

export const ProfileWithAuth = withAuth(Profile);
