import React, { useState, useEffect } from "react";

function AdoptPage() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dogInfoVisible, setDogInfoVisible] = useState({});

  const fetchData = async () => {
    try {
      // Fetching access token
      const tokenResponse = await fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            grant_type: "client_credentials",
            client_id: "db6YQIx3dF2jc03SbIMpLucEqnqzIwoGxpx5BfLtVBZekB1ykC",
            client_secret: "XmnHbT1XCvQSl8OwHGSgIWk6mIkoZgZoKpIfBqaG",
          }),
        }
      );

      const tokenData = await tokenResponse.json();

      // Fetching data using the access token
      const response = await fetch("https://api.petfinder.com/v2/animals", {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      });

      const data = await response.json();
      setDogs(data.animals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleInfoVisibility = (index) => {
    setDogInfoVisible((prevVisibility) => {
      return { ...prevVisibility, [index]: !prevVisibility[index] };
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="adopt-page">
          {dogs.map((dog, index) => (
            <div className="dog-card" key={index}>
              <div className="dog-card-container">
                {dog.photos.length > 0 ? (
                  <img
                    className="dog-pic"
                    src={dog.photos[0].medium}
                    alt={`${dog.name} - Photo`}
                  />
                ) : (
                  <div className="dog-pic">
                    <span>
                      <img
                        className="dog-pic"
                        src="https://http.dog/404.jpg"
                        alt="error-404"
                      />
                    </span>
                  </div>
                )}
                <div className="dog-name-container">
                  <h3 className="dog-name">{dog.name.split(" ")[0]}</h3>
                </div>
                <div
                  className={`dog-info ${
                    dogInfoVisible[index] ? "visible" : ""
                  }`}
                >
                  <p>
                    <span>Breed:</span> {dog.breeds.primary}
                  </p>
                  <p>
                    <span>Age:</span> {dog.age}
                  </p>
                  <p>
                    <span>Gender:</span> {dog.gender}
                  </p>
                  <p>
                    <span>Phone:</span> {dog.contact.phone}
                  </p>
                  <p>
                    <span>Email:</span> {dog.contact.email}
                  </p>
                  <p>
                    <span>
                      {dog.contact.address.city}, <br />
                      {dog.contact.address.state}
                    </span>
                  </p>
                </div>
                <button
                  className="details-button"
                  onClick={() => toggleInfoVisibility(index)}
                >
                  {dogInfoVisible[index] ? "Hide Info" : "View More Info"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdoptPage;
