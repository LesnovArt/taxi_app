import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export const Map = () => {
	let mapContainer = React.createRef();
	mapboxgl.accessToken =
		'pk.eyJ1IjoiZGFuaWwwMDUyNCIsImEiOiJjazV0amd0NXYwNjA5M2VvYTE1ZmU4dThyIn0.Zn65a2N1HP929vgwZeimNQ';

	// useEffect(() => {
	// 		mapContainer = new mapboxgl.Map({
	// 			container: mapContainer,
	// 			mapStyle: 'mapbox://styles/mapbox/streets-v11',
	// 			center: [-74.5, 40],
	// 			zoom: 10,
	// 		});
	// 	}, []);

    useEffect(() => {
        mapContainer = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 10,
        });
    }, []);

	return (
		<div className='map-wrapper'>
			<div className='map' ref={(el) => (mapContainer = el)} />
		</div>
	);
};

// export class Map extends Component {
// 	map = null;
// 	mapContainer = React.createRef();

// 	componentDidMount() {
// 		mapboxgl.accessToken =
// 			'pk.eyJ1IjoibGVzbm92YXJ0ODgiLCJhIjoiY2tnYWoybzI3MDdrNzJ3bzR3NW8yODI1YiJ9.UQuGd997fXL8TOrL39Rzxw';

// 		this.map = new mapboxgl.Map({
// 			container: this.mapContainer,
// 			mapStyle: 'mapbox://styles/mapbox/streets-v9',
// 			center: [30.3056504, 59.9429126],
// 			zoom: 10,
// 			width: 100,
// 			height: 100,
// 		});
// 	}

// 	componentWillUnmount() {
// 		this.map.remove();
// 	}
// 	render() {
// 		return (
// 			<div className="map-wrapper">
// 				<div className="map" ref={el => this.mapContainer = el} />
// 			</div>
// 		);
// 	}
// }
