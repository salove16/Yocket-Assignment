const data = require("../db.json")


exports.getVehicles = async (req, res) => {
    try {
      return res.status(200).json(data.vehicles);
    } catch (err) {
      res.status(500).json(err);
    }
  };