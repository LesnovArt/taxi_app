import React from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [ isLoggedIn, setIsLoggedin ] = React.useState(false);

	const logIn = (email, password) => {
		if (email !== 'russskey@gmail.com' || password !== 'password') {
			return;
		}
		setIsLoggedin(true);
	};

	const logOut = () => {
		setIsLoggedin(false);
	};

	return <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>{children}</AuthContext.Provider>;
};

export const withAuth = WrappedComponent => {
	return class extends React.Component {
		render () {
			return (
				<AuthContext.Consumer>
					{value => {
						return <WrappedComponent {...value} {...this.props} />;
					}}
				</AuthContext.Consumer>
			);
		}
	};
};
