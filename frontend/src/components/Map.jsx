import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
 
function MyComponent() {
    const map = useMap();
    console.log('map center:', map.getCenter());
    return null;
}
 
function MyMapComponent() {
    const [userLocation, setUserLocation] = useState(null); // Start with null to indicate no location yet
    const [locationFound, setLocationFound] = useState(false);
 
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log('User location found:', latitude, longitude); // Debugging
                    setUserLocation({ lat: latitude, lng: longitude });
                    setLocationFound(true);
                },
                (error) => {
                    console.error('Error getting user location:', error); // Debugging
                    // Fallback to a default location if geolocation fails
                    setUserLocation({ lat: 41.8781, lng: -87.6298 }); // Default to Chicago, IL
                    setLocationFound(false);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.'); // Debugging
            // Fallback to a default location if geolocation is not supported
            setUserLocation({ lat: 41.8781, lng: -87.6298 }); // Default to Chicago, IL
            setLocationFound(false);
        }
    }, []);
 
    // Render the map only after userLocation is set
    if (!userLocation) {
        return <div>Loading map...</div>; // Show a loading message while waiting for location
    }
 
    return (
        <MapContainer
            center={[userLocation.lat, userLocation.lng]}
            zoom={locationFound ? 13 : 10} // Adjust zoom based on whether location was found
            style={{ height: '80vh', width: '100%', borderRadius: '10px' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> conributors'
            />
            <MyComponent />
        </MapContainer>
    );
}
 
export default MyMapComponent;
 