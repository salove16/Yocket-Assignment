import React, { useState } from "react";
import "../App.css";

const CitySelection = ({ cities, handleCitySelection }) => {

  const handleButtonClick = (cityName) => {
    handleCitySelection(cityName);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Select City</h2>
      <div className="select-container">
        {cities.map((city) => (
          <div key={city.name} className="city" onClick={() => handleButtonClick(city.name)}  style={{ 
            cursor: city.selected ? 'not-allowed' : 'pointer', 
            opacity: city.selected ? 0.5 : 1 
          }}>
            <div className="city-info">
              <h3>{city.name}</h3>
              <img src={city.image} alt={city.name} className="city-image" />
              <p className="city-description">{city.description}</p>
              <p>Distance: {city.distance} km</p>
            </div>
            {/* <button
              onClick={() => handleButtonClick(city.name)}
              className={selectedButton === city.name ? "selected" : ""}
            >
              Select
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitySelection;
