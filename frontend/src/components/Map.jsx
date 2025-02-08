// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// function MyComponent() {
//     const map = useMap();
//     console.log('map center:', map.getCenter());
//     return null;
// }

// function MyMapComponent() {
//     const [userLocation, setUserLocation] = useState(null); // Start with null to indicate no location yet
//     const [locationFound, setLocationFound] = useState(false);

//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     console.log('User location found:', latitude, longitude); // Debugging
//                     setUserLocation({ lat: latitude, lng: longitude });
//                     setLocationFound(true);
//                 },
//                 (error) => {
//                     console.error('Error getting user location:', error); // Debugging
//                     // Fallback to a default location if geolocation fails
//                     setUserLocation({ lat: 41.8781, lng: -87.6298 }); // Default to Chicago, IL
//                     setLocationFound(false);
//                 }
//             );
//         } else {
//             console.error('Geolocation is not supported by this browser.'); // Debugging
//             // Fallback to a default location if geolocation is not supported
//             setUserLocation({ lat: 41.8781, lng: -87.6298 }); // Default to Chicago, IL
//             setLocationFound(false);
//         }
//     }, []);

//     // Render the map only after userLocation is set
//     if (!userLocation) {
//         return <div>Loading map...</div>; // Show a loading message while waiting for location
//     }

//     return (
//         <MapContainer
//             center={[userLocation.lat, userLocation.lng]}
//             zoom={locationFound ? 13 : 10} // Adjust zoom based on whether location was found
//             style={{ height: '80vh', width: '100%', borderRadius: '10px' }}
//         >
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <MyComponent />
//         </MapContainer>
//     );
// }

// export default MyMapComponent;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js'; // Update import path
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LocationMarker() {
  const map = useMap();
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'businesses'));
        const businessesData = [];
        
        for (const doc of querySnapshot.docs) {
          const userData = doc.data();
          if (userData.address) {
            try {
              // Geocode address to coordinates
              const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(userData.address)}`
              );
              const data = await response.json();
              
              if (data.length > 0) {
                businessesData.push({
                  id: doc.id,
                  name: userData.businessName || 'Unnamed Business',
                  address: userData.address,
                  lat: parseFloat(data[0].lat),
                  lng: parseFloat(data[0].lon)
                });
              }
            } catch (geocodeError) {
              console.error('Geocoding error:', geocodeError);
            }
          }
        }
        
        setBusinesses(businessesData);
        if (businessesData.length > 0) {
          map.flyTo([businessesData[0].lat, businessesData[0].lng], 13);
        }
        
      } catch (firestoreError) {
        console.error('Firestore error:', firestoreError);
      }
    };

    fetchBusinesses();
  }, [map]);

  return (
    <>
      {businesses.map((business) => (
        <Marker key={business.id} position={[business.lat, business.lng]}>
          <Popup>
            <div className="font-semibold">{business.name}</div>
            <div className="text-sm">{business.address}</div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

function MyMapComponent() {
  const [userLocation, setUserLocation] = useState(null);
  const [locationFound, setLocationFound] = useState(false);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            setLocationFound(true);
          },
          (error) => {
            console.error('Error getting location:', error);
            setUserLocation({ lat: 41.8781, lng: -87.6298 });
            setLocationFound(false);
          }
        );
      } else {
        setUserLocation({ lat: 41.8781, lng: -87.6298 });
        setLocationFound(false);
      }
    };

    getLocation();
  }, []);

  if (!userLocation) return <div>Loading map...</div>;

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
      <LocationMarker />
    </MapContainer>
  );
}

export default MyMapComponent;