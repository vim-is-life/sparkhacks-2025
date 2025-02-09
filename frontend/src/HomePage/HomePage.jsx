// HomePage.jsx
import { useState } from 'react';
import MyMapComponent from "../components/Map";
import BCard from "../components/BCard";

function HomePage() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  return (
    <div className="container">
      <div className="map">
        {/* The map passes the clicked business data via the onMarkerClick callback */}
        <MyMapComponent onMarkerClick={setSelectedBusiness} />
      </div>
      <div style={{ marginTop: '20px' }}>
        {selectedBusiness ? (
          // When a business is selected, display its details.
          <BCard
                title={selectedBusiness.name}
                pictureUrls={selectedBusiness.pictureUrls}
                description={selectedBusiness.description}
                address={selectedBusiness.address} // New prop for the address
            />

        ) : (
          // When no business is selected, display a placeholder card.
          <BCard
            title="HOLDER"
            pictureUrls={[
              "https://media.istockphoto.com/id/141914198/photo/young-labrador-retriever-4-months-old.jpg?s=612x612&w=0&k=20&c=w3I20o2KkK9cKzdY69nqbj_HNSJFGp28KgK9Gp11UME="
            ]}
            description="This is a description of the card"
            buttonText="SOCIAL MEDIA"
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
