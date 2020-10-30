import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Map = () => {
	let mapContainer = React.createRef();
	mapboxgl.accessToken =
		'pk.eyJ1IjoiZGFuaWwwMDUyNCIsImEiOiJjazV0amd0NXYwNjA5M2VvYTE1ZmU4dThyIn0.Zn65a2N1HP929vgwZeimNQ';

	useEffect(() => {
		new mapboxgl.Map({
			container: mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ -74.5, 40 ],
			zoom: 10,
		});
	}, [mapContainer]);

	return (
		<div className='map-wrapper'>
			<div className='map' ref={(el) => (mapContainer = el)} />
		</div>
	);
};

