import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({
	children, onClick, className, disable, active,
}) => {

	const classes = classNames(
		'btn',
		className,
		{ active },
	);

	return (
		<button
			className={classes}
			disable={disable}
			onClick={onClick}
		>{children}</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
};

Button.defaultProps = {
	children: 'Default button',
	onClick: () => {},
	className: '',
	disabled: false,
	active: false
}