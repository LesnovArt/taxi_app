import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions';

export const Profile = props => {
	const unauthenticate = () => {
		props.logOut();
	};

	return (
		<p>
			Profile
			<Button onClick={unauthenticate}>Log out</Button>
		</p>
	);
};

Profile.propTypes = {
	logOut : PropTypes.func,
};

Profile.defaultProps = {
	logOut : () => {},
};

export const ProfileWithAuth = connect(null, { logOut })(Profile);
