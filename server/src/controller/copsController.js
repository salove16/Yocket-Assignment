const data = require("../db.json")
// console.log(data.cops)

  exports.getCops = async (req, res) => {
    try {
      return res.status(200).json(data.cops);
    } catch (err) {
      res.status(500).json(err);
    }
  };