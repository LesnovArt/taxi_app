import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const Image = ({
	src, alt, className, width, height, circle, ...attrs
}) => {
	
	if(!src) {
		src = `http://via.placeholder.com/${width}x${height}`
	}

	const classes = classNames(
		className,
		{ circle }
	);

	return (
		<img
			src={src}
			alt={alt}
			className={classes}
			width={width}
			height={height}
			{...attrs}
		/>
	);
};

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	classNames: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	circle: PropTypes.bool,
}

Image.defaultProps = {
	src: " ",
	alt: "image name",
   className: " ",
   width: 200,
   heigth: 200,
};


