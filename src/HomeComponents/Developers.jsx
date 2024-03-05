import PropTypes from "prop-types";
import { useState } from "react";

const Developers = ({ name, devType, image, funFacts }) => {
  const [devInfoVisible, setDevInfoVisible] = useState(false);

  const toggleInfoVisibility = () => {
    setDevInfoVisible(!devInfoVisible);
  };

  return (
    <>
      <div className="dev-card">
        <img className="dev-image" src={image} alt="dev-image" />
        <h2 className="dev-name">{name}</h2>
        <div className={`dev-info ${devInfoVisible ? "visible" : ""}`}>
          <h3 className="dev-type">{devType}</h3>
          <h4 className="dev-facts">Fun Fact: {funFacts.fact}</h4>
          <h4 className="dev-facts">Favorite Dog Breed: {funFacts.faveDog}</h4>
        </div>
        <button className="dev-button" onClick={toggleInfoVisibility}>
          {devInfoVisible ? "Hide Info" : "Meet The Developer"}
        </button>
      </div>
    </>
  );
};

Developers.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  devType: PropTypes.string.isRequired,
  funFacts: PropTypes.shape({
    fact: PropTypes.string,
    faveDog: PropTypes.string,
  }).isRequired,
};
export default Developers;
