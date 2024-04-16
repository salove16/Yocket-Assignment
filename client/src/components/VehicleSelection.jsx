import React from "react";
import "../App.css";

const VehicleSelection = ({ vehicles, handleVehicleSelection }) => {

  return (
  




    <div>
    <h2 style={{ textAlign: "center", marginTop: "20px" }}>Select Vehicle</h2>
    <div className="select-container">
      {vehicles.map((city) => (
        <div key={city.kind} className="city" onClick={() => handleVehicleSelection(city.kind)} style={ {
            cursor: city.count === 0 ? 'not-allowed' : 'pointer', 
            opacity: city.count === 0 ? 0.5 : 1  }}>
          <div className="city-info">
            <h3>{city.kind}</h3>
            <img src={city.image} alt={city.kind} className="city-image" />
          
          </div>
          
  </div>
      ))}
    </div>
  </div>
  );
};

export default VehicleSelection;
