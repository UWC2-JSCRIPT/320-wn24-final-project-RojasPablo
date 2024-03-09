import PropTypes from "prop-types";

const StatusDogs = ({ image, statusCode, description }) => {
  return (
    <>
      <div className="statusDogBox">
        <img className="statusDogImg" src={image} alt="Status Dog Image" />
        <h3 className="statusDogCode">
          &#10070;{` HTTP Response Status Code - ${statusCode} `}&#10070;
        </h3>
        <h3 className="statusDogDescription">{description}</h3>
      </div>
    </>
  );
};

StatusDogs.propTypes = {
  image: PropTypes.string.isRequired,
  statusCode: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default StatusDogs;
