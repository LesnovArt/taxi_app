import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ImageLogo = ({
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
	)
}

ImageLogo.PropTypes = {
	src: PropTypes.srtring,
	alt: PropTypes.string,
	classNames: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	circle: PropTypes.bool,
}

ImageLogo.defaultProps = {
	src: '',
	alt: 'image name',
	className: '',
}

export default ImageLogo
