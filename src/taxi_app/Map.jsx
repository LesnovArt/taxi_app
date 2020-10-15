import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

// export const Map = () => {
// 	let mapContainer = React.createRef();

// 	useEffect(() => {
// 		mapboxgl.accessToken =
// 			'pk.eyJ1IjoibGVzbm92YXJ0ODgiLCJhIjoiY2tnYWoybzI3MDdrNzJ3bzR3NW8yODI1YiJ9.UQuGd997fXL8TOrL39Rzxw';

// 		const map = new mapboxgl.Map({
// 			container: mapContainer,
// 			mapStyle: 'mapbox://styles/mapbox/streets-v9',
// 			center: [ 30.3056504, 59.9429126 ],
// 			zoom: 10,
// 			width: 100,
// 			height: 100,
// 		});
// 	});

// 	return (
// 		<div className='map-wrapper'>
// 			<div className='map' ref={(el) => (mapContainer = el)} />
// 		</div>
// 	);
// };

export class Map extends Component {
	map = null;
	mapContainer = React.createRef();

	componentDidMount() {
		mapboxgl.accessToken =
			'pk.eyJ1IjoibGVzbm92YXJ0ODgiLCJhIjoiY2tnYWoybzI3MDdrNzJ3bzR3NW8yODI1YiJ9.UQuGd997fXL8TOrL39Rzxw';

		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			mapStyle: 'mapbox://styles/mapbox/streets-v9',
			center: [30.3056504, 59.9429126],
			zoom: 10,
			width: 100,
			height: 100,
		});
	}

	componentWillUnmount() {
		this.map.remove();
	}
	render() {
		return (
			<div className="map-wrapper">
				<div className="map" ref={el => this.mapContainer = el} />
			</div>
		);
	}
}
