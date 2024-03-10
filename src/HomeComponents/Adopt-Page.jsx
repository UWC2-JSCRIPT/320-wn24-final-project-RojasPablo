import React, { useState, useEffect } from 'react';

function AdoptPage() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchData = async () => {
    try {
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

      
      const response = await fetch('https://api.petfinder.com/v2/animals', {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`
        },
      });
      const data = await response.json();
      setDogs(data.animals); 
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem', textAlign: 'center', color: 'white' }}>
      <h1 style={{ marginBottom: '20px', color: 'black', textAlign: 'center', marginTop: '0' }}>Available for Adoption</h1>
      {loading ? ( 
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {dogs.map(dog => (
            <div key={dog.id} style={{ background: 'linear-gradient(rgb(87, 165, 214), rgb(0, 150, 243))', borderRadius: '25px', fontWeight: 'normal', padding: '20px', marginBottom: '20px', width: '300px', marginRight: '20px' }}>
              <h2>{dog.name}</h2>
              {dog.photos.length > 0 ? (
                <img src={dog.photos[0].medium} alt={`${dog.name} - Photo`} />
              ) : (
                <div>No photo available</div>
              )}
              <p>Breed: {dog.breeds.primary}</p>
              <p>Age: {dog.age}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdoptPage;

