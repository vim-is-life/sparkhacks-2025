// Map.jsx
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons in React-Leaflet:
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Optional: Log the map center (for debugging)
function MyComponent() {
  const map = useMap();
  console.log('Map center:', map.getCenter());
  return null;
}

function MyMapComponent({ onMarkerClick }) {
  const [userLocation, setUserLocation] = useState(null);
  const [locationFound, setLocationFound] = useState(false);
  const [businesses, setBusinesses] = useState([]);

  // Get the user's location on component mount.
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('User location found:', latitude, longitude);
          setUserLocation({ lat: latitude, lng: longitude });
          setLocationFound(true);
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Fallback location (Chicago, IL) if geolocation fails.
          setUserLocation({ lat: 41.8781, lng: -87.6298 });
          setLocationFound(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Fallback location (Chicago, IL)
      setUserLocation({ lat: 41.8781, lng: -87.6298 });
      setLocationFound(false);
    }
  }, []);

  // Once we have the user location, fetch businesses from the backend.
  useEffect(() => {
    if (userLocation) {
      axios.get(`/businesses?lat=${userLocation.lat}&lon=${userLocation.lng}`)
        .then((response) => {
          console.log('Businesses fetched:', response.data);
          setBusinesses(response.data);
        })
        .catch((error) => {
          console.error('Error fetching businesses:', error);
        });
    }
  }, [userLocation]);

  // Render a loading message until the user's location is determined.
  if (!userLocation) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer
      center={[userLocation.lat, userLocation.lng]}
      zoom={locationFound ? 13 : 10}
      style={{ height: '80vh', width: '100%', borderRadius: '10px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker for the user's current location */}
      <Marker position={[userLocation.lat, userLocation.lng]}>
        <Popup>You are here!</Popup>
      </Marker>
      {/* Render a marker for each business */}
      {businesses.map((business) => (
        <Marker
          key={business.id}
          position={[parseFloat(business.latitude), parseFloat(business.longitude)]}
          eventHandlers={{
            click: () => {
              // When clicked, pass the business details back to the parent.
              if (onMarkerClick) {
                onMarkerClick(business);
              }
            }
          }}
        >
          <Popup>
            <strong>{business.name}</strong>
            <br />
            {business.address}
          </Popup>
        </Marker>
      ))}
      <MyComponent />
    </MapContainer>
  );
}

export default MyMapComponent;
