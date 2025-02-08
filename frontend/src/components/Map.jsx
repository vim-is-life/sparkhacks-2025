import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MyComponent() {
    const map = useMap();
    console.log('map center:', map.getCenter());
    return null;
}

function MyMapComponent() {
    return (
        <MapContainer center={[87,41]} zoom={20} style={{ height: '80vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MyComponent />
        </MapContainer>
    );
}

export default MyMapComponent;