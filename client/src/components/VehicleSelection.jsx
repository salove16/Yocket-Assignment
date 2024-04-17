import React from "react";
import "../App.css";

const VehicleSelection = ({ vehicles, handleVehicleSelection }) => {

  return (
  




    <div>
    <h2 style={{ textAlign: "center", marginTop: "20px" }}>Select Vehicle</h2>
    <div className="select-container">
      {vehicles.map((vehicle) => (
        <div key={vehicle.kind} className="city" onClick={() => handleVehicleSelection(vehicle.kind)} style={ {
            cursor: vehicle.count === 0 ? 'not-allowed' : 'pointer', 
            opacity: vehicle.count === 0 ? 0.5 : 1  }}>
          <div className="city-info">
            <h3>{vehicle.kind}</h3>
            <img src={vehicle.image} alt={vehicle.kind} className="city-image" />
            <p>Range: {vehicle.range} km</p>
            <p>Count: {vehicle.count}</p>
          
          </div>
          
  </div>
      ))}
    </div>
  </div>
  );
};

export default VehicleSelection;
