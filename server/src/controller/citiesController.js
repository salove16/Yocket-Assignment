const data = require("../db.json")

exports.getCities = async (req, res) => {
    try {
      return res.status(200).json(data.cities);
    } catch (err) {
      res.status(500).json(err);
    }
  };