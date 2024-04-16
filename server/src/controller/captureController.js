const data = require("../db.json")

// Simulate fugitive's location
const fugitiveLocation = data.cities[Math.floor(Math.random() * data.cities.length)];

exports.capture = async (req, res) => {
    try {
      const { copCity, copVehicle } = req.body;
      
  
      const copRange = data.vehicles.find(
        (vehicle) => vehicle.kind === copVehicle
      ).range;
      const copLocation = data.cities.find((city) => city.name === copCity);
  
      const distanceToFugitive = Math.abs(
        fugitiveLocation.distance - copLocation.distance
      );

      
      const successfulCapture = distanceToFugitive <= copRange;
      
      if (successfulCapture) {
 
        const capturingCop = data.cops[Math.floor(Math.random() * data.cops.length)];
        res.status(200).json({ success: true, capturingCop });
      } else {
        res.status(200).json({ success: false });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };