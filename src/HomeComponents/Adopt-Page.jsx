import React, { useState, useEffect } from 'react';

function AdoptPage() {
  // State to store the data fetched from the API
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the Petfinder API
  const fetchData = async () => {
    try {
      // Fetching access token
      const tokenResponse = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'client_credentials',
          client_id: 'db6YQIx3dF2jc03SbIMpLucEqnqzIwoGxpx5BfLtVBZekB1ykC', 
          client_secret: 'XmnHbT1XCvQSl8OwHGSgIWk6mIkoZgZoKpIfBqaG', 
        }),
      });

      const tokenData = await tokenResponse.json();

      // Fetching data using the access token
      const response = await fetch('https://api.petfinder.com/v2/animals', {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`
        },
      });
      const data = await response.json();
      setDogs(data.animals); // Update state with fetched data
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem', textAlign: 'center', color: 'white' }}>
      <h1 style={{ marginBottom: '20px', color: 'black', textAlign: 'center', marginTop: '0' }}>Available for Adoption</h1>
      {loading ? ( // Show loading indicator if data is loading
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Map through the dogs array and display each dog's information */}
          {dogs.map(dog => (
            <div key={dog.id} style={{ background: 'linear-gradient(rgb(87, 165, 214), rgb(0, 150, 243))', borderRadius: '25px', fontWeight: 'normal', padding: '20px', marginBottom: '20px', width: '300px', marginRight: '20px' }}>
              <h2>{dog.name}</h2>
              {/* Check if there are photos available */}
              {dog.photos.length > 0 ? (
                <img src={dog.photos[0].medium} alt={`${dog.name} - Photo`} />
              ) : (
                <div>No photo available</div>
              )}
              <p>Breed: {dog.breeds.primary}</p>
              <p>Age: {dog.age}</p>
              {/* Add more information as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdoptPage;

